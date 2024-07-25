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

function buildPrompt(context: string): string {
  return `
  Eres un asistente especializado en diagnósticos de computadoras. 
  Tu tarea es proporcionar 3 posibles problemas que el usuario podría estar experimentando con su computadora. 
  Además, para cada problema, proporcionarás 3 posibles soluciones básicas. 
  Las respuestas deben estar en español y ser claras y concisas.

  Las especificaciones de la computadora son:
  ${context}

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

export async function getDiagnosis(context: string) {
  const prompt = buildPrompt(context);

  const result = await streamObject({
    model: groq('llama3-70b-8192'),
    schema: diagnosisSchema,
    prompt: prompt,
    maxTokens : 1000,
    temperature: 0.75,
    frequencyPenalty: 1,
  });

  return result.toTextStreamResponse();
}
