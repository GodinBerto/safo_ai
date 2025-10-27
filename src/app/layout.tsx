import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Safo AI",
  description: "Your personal AI assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-roboto antialiased`}>{children}</body>
    </html>
  );
}
