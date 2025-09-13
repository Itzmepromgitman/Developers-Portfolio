// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "DevFolio Dark — Developer Portfolio",
  description: "A dark, animated developer portfolio built with Next.js, Tailwind, and Motion.",
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#0b0f17] text-slate-200 antialiased">
        <div className="bg-radial-rays" />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
