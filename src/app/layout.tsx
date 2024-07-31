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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
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
