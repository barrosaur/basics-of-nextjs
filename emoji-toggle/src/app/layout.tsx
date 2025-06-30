import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emoji toggle",
  description: "Emoji toggle with useState",
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
