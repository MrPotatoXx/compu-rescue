import "./globals.css";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
      {children}
      </body>
    </html>
  );
}
