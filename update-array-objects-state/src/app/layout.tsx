import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Update-Array-Obj-useState",
  description: "Updating an array of objects using useState",
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
