import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Palindrome Checker",
  description: "palindrome checker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
