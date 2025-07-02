import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Color Picker",
  description: "A simple color picker with nextJS",
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
