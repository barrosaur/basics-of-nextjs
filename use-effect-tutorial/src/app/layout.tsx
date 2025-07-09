import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "useEffect",
  description: "Me understanding useEffect",
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
