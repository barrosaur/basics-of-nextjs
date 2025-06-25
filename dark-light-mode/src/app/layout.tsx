import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dark and Light Mode",
  description: "A simple dark and light mode for useState()",
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
