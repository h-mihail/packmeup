import "./globals.css";
import ListProvider from "./providers/listProvider";
import QueryProvider from "./providers/queryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <ListProvider>{children}</ListProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
