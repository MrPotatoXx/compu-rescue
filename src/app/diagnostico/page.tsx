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

    const requestData = {
      type: pcType,
      details: details,
      problemDescription: pcType === 'desktop' ? desktopDetails.problemDescription : notebookDetails.problemDescription
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
              <h3 className="tracking-tight text-3xl font-bold text-center">Diagnóstico</h3>
              <p className="text-sm text-gray-500 text-center">Selecciona según el computador que tengas</p>
              <p className="text-sm text-gray-500 text-center">Recuerda que este diagnostico no valida que el problema sea real</p>
              {!pcType ? (
                <div className="flex justify-around py-6">
                  <div
                    onClick={() => setPcType('notebook')}
                    className="cursor-pointer p-4 border rounded-lg flex flex-col items-center hover:bg-gray-100"
                  >
                    <svg className="h-32 w-32 mb-2"
                      viewBox="0 0 32 32">
                      <rect x="15" y="23" width="2" height="2"/>
                      <path d="M6 1v30h20V1H6zM24 29H8V15h16V29zM24 13H8V9h16V13zM24 7H8V3h16V7z"/>
                    </svg>
                    <p>Notebook</p>
                  </div>
                  <div
                    onClick={() => setPcType('desktop')}
                    className="cursor-pointer p-4 border rounded-lg flex flex-col items-center hover:bg-gray-100"
                  >
                    <svg className="h-32 w-32 mb-2" viewBox="0 0 32 32" fill="#000000">
                      <g fill="none" fill-rule="evenodd">
                        <path d="m0 0h32v32h-32z"/>
                        <path d="m29 2-.0007764 18.876 2.2815528 9.124h-30.56155281l2.28-9.12.00077641-18.88zm-1.782 20h-22.437l-1.5 6h25.437zm-.218-18h-22v16h22z" fill="#000000" fill-rule="nonzero"/>
                      </g>
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
                <div className="grid gap-6 lg:grid-cols-3">
                  {object.problems.map((problem, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                      <p>{problem}</p>
                      {object.solutions && object.solutions[index] && (
                        <>
                          <h5 className="font-semibold mt-4">Soluciones:</h5>
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
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
