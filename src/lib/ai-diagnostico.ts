import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';
import { streamObject } from 'ai';



const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

export const diagnosisSchema = z.object({
  problems: z.array(z.string()),
  solutions: z.array(z.array(z.string()))
});

function buildPrompt(details: { type: string, brand?: string, model?: string, components?: string, problemDescription: string }): string {
  let specifications = '';

  if (details.type === 'notebook') {
    specifications = `Marca: ${details.brand}, Modelo: ${details.model}`;
  } else if (details.type === 'desktop') {
    specifications = `Componentes: ${details.components || 'No especificados'}`;
  }

  return `
    Eres un asistente especializado en diagnósticos de computadoras. 
    Tu tarea es proporcionar 3 posibles problemas que el usuario podría estar experimentando con su computadora. 
    Además, para cada problema, proporcionarás 3 posibles soluciones básicas. 
    Las respuestas deben estar en español y ser claras y concisas.

    Las especificaciones de la computadora son:
    ${specifications}, Problema: ${details.problemDescription}

    Aquí tienes un ejemplo del formato esperado de las respuestas:
    Problema 1: [Descripción del problema]
    Soluciones:
    - [Solución 1]
    - [Solución 2]
    - [Solución 3]

    Problema 2: [Descripción del problema]
    Soluciones:
    - [Solución 1]
    - [Solución 2]
    - [Solución 3]

    Problema 3: [Descripción del problema]
    Soluciones:
    - [Solución 1]
    - [Solución 2]
    - [Solución 3]

    Los problemas pueden ser:
  `;
}

export async function getDiagnosis(details: { type: string; brand?: string; model?: string; components?: string; problemDescription: string }) {
  const prompt = buildPrompt(details);

  const result = await streamObject({
    model: groq('llama-3.1-70b-versatile'),
    schema: diagnosisSchema,
    prompt: prompt,
    maxTokens : 1000,
    temperature: 0.75,
    frequencyPenalty: 1,
  });

  return result.toTextStreamResponse();
}
