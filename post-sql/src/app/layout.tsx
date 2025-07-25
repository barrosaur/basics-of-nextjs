import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Posts SQL",
  description: "My intro to nextjs with a database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
