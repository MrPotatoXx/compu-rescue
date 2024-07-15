export default function Diagnostico() {
  return (
    <main className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          Home
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Home
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Diagnostico
          </a>
        </nav>
      </header>
      <div className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="tracking-tight text-3xl font-bold">Diagnostico</h3>
              <p className="text-sm text-muted-foreground">
                Selecciona según el computador que tengas
              </p>
            </div>
            <div className="flex justify-end p-6">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
