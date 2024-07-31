import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">
        <div className="flex flex-col min-h-[100vh]">
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <a className="flex items-center justify-center" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"></path>
            </svg>
              <span className="sr-only">App de Diagnóstico de PC</span>
            </a>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <a
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/"
              >
                Home
              </a>
              <a
                className="text-sm font-medium hover:underline underline-offset-4"
                href="/diagnostico"
              >
                Diagnóstico
              </a>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-muted-foreground">
              App de Diagnóstico de PC con IA utilizando el sdk de vercel.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
