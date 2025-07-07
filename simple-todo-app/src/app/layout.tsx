import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple TODO",
  description: "My version of a simple todo list :]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/TODO List.svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
