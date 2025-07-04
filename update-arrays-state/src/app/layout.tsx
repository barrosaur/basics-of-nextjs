import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Update Arrays in State",
  description: "BroCode Tutorial on updating arrays using useState",
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
