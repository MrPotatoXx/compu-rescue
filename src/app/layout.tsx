import "./globals.css";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center">
          <a className="flex items-center justify-center font-bold text-lg" href="/">
            Home
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
        <main>{children}</main>
        <footer className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center justify-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} App de Diagnóstico de PC con IA
          </p>
        </footer>
      </body>
    </html>
  );
}
