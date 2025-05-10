import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HedCode",
  description: "HedCode is an awesome development team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
