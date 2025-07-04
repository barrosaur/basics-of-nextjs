import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Updating Objects in state",
  description: "By BroCode Tutorial",
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
