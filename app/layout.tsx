import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChatGPT — Flexwork",
  description: "ChatGPT History, Auto-Organized — UX Redesign Case Study",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased">{children}</body>
    </html>
  );
}
