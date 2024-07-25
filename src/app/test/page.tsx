'use client';

import { experimental_useObject as useObject } from 'ai/react';
import { diagnosisSchema } from '@/lib/ai-diagnostico';

export default function Test() {
  const { object, submit } = useObject({
    api: '/api/diagnosis',
    schema: diagnosisSchema,
  });

  return (
    <div>
      <button onClick={() => submit('Tipo: notebook\nMarca: HP\nModelo: 15-ay503tx\nComponentes:\n- Procesador: Intel Core i3-6006U\n- RAM: 4GB DDR4\n- Almacenamiento: 1TB HDD\n- Tarjeta de video: AMD Radeon R5 M430')}>
        Generar diagnóstico
      </button>

      {object?.problems?.map((problem, index) => (
        <div key={index}>
          <p><strong>Problema {index + 1}:</strong> {problem}</p>
          {object.solutions && object.solutions[index] && (
            <>
              <p><strong>Soluciones:</strong></p>
              <ul>
                {object.solutions[index].map((solution, i) => (
                  <li key={i}>{solution}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
