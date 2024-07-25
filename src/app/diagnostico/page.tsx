'use client';

import { useState } from 'react';
import { experimental_useObject as useObject } from 'ai/react';
import { diagnosisSchema } from '@/lib/ai-diagnostico';

export default function Diagnostico() {
  const [pcType, setPcType] = useState<string | null>(null);
  const [notebookDetails, setNotebookDetails] = useState({ brand: '', model: '', problemDescription: '' });
  const [desktopDetails, setDesktopDetails] = useState({ components: '', problemDescription: '' });
  const { object, submit } = useObject({
    api: '/api/diagnosis',
    schema: diagnosisSchema,
  });

  const handleSubmit = () => {

    let details = {};
    if (pcType === 'notebook') {
      details = notebookDetails;
    } else if (pcType === 'desktop') {
      details = desktopDetails;
    }
    // Construir el objeto de detalles
    const requestData = {
      type: pcType,
      details: details,
      problemDescription: pcType === 'desktop' ? desktopDetails.problemDescription : ''
    };
    submit(requestData);
  };
  const handleEdit = () => {
    setPcType(null);
  };

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="rounded-lg border bg-white shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="tracking-tight text-3xl font-bold">Diagnóstico</h3>
              <p className="text-sm text-gray-500">Selecciona según el computador que tengas</p>
              {!pcType ? (
                <div className="flex justify-around py-6">
                  <div
                    onClick={() => setPcType('notebook')}
                    className="cursor-pointer p-4 border rounded-lg flex flex-col items-center hover:bg-gray-100"
                  >
                    <svg className="h-12 w-12 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <p>Notebook</p>
                  </div>
                  <div
                    onClick={() => setPcType('desktop')}
                    className="cursor-pointer p-4 border rounded-lg flex flex-col items-center hover:bg-gray-100"
                  >
                    <svg className="h-12 w-12 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <p>Escritorio</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {pcType === 'notebook' && (
                    <>
                      <input
                        type="text"
                        placeholder="Marca"
                        value={notebookDetails.brand}
                        onChange={(e) => setNotebookDetails({ ...notebookDetails, brand: e.target.value })}
                        className="border p-2 rounded w-full"
                      />
                      <input
                        type="text"
                        placeholder="Modelo"
                        value={notebookDetails.model}
                        onChange={(e) => setNotebookDetails({ ...notebookDetails, model: e.target.value })}
                        className="border p-2 rounded w-full"
                      />
                      <textarea
                        placeholder="Descripción del problema"
                        value={notebookDetails.problemDescription}
                        onChange={(e) => setNotebookDetails({ ...notebookDetails, problemDescription: e.target.value })}
                        className="border p-2 rounded w-full"
                      />
                    </>
                  )}
                  {pcType === 'desktop' && (
                    <>
                      <textarea
                        placeholder="Componentes (opcional)"
                        value={desktopDetails.components}
                        onChange={(e) => setDesktopDetails({ ...desktopDetails, components: e.target.value })}
                        className="border p-2 rounded w-full"
                      />
                      <textarea
                        placeholder="Descripción del problema"
                        value={desktopDetails.problemDescription}
                        onChange={(e) => setDesktopDetails({ ...desktopDetails, problemDescription: e.target.value })}
                        className="border p-2 rounded w-full"
                      />
                    </>
                  )}
                  <div className="flex justify-between p-6">
                    <button
                      onClick={handleEdit}
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-600 text-white hover:bg-gray-700 h-10 px-4 py-2"
                    >
                      Editar Selección
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
                    >
                      Generar diagnóstico
                    </button>
                  </div>
                </div>
              )}
            </div>
            {object?.problems && (
              <div className="p-6">
                {object.problems.map((problem, index) => (
                  <div key={index} className="mb-4">
                    <p><strong>Problema {index + 1}:</strong> {problem}</p>
                    {object.solutions && object.solutions[index] && (
                      <>
                        <p><strong>Soluciones:</strong></p>
                        <ul className="list-disc list-inside">
                          {object.solutions[index].map((solution, i) => (
                            <li key={i}>{solution}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
