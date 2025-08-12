import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Login Sample",
  description: "Login Sample",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
