export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a la App de Diagnóstico básico de tu PC con IA</h1>
      <p className="text-lg text-center mb-6">
        La aplicación utiliza inteligencia artificial para ayudarte a diagnosticar y solucionar problemas comunes con tu computadora.
      </p>
      <a
        href="/diagnostico"
        className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-lg font-medium hover:bg-primary-dark"
      >
        Ir al Diagnóstico
      </a>
    </main>
  );
}
