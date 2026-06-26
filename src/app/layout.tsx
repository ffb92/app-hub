import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apps by ffb92",
  description: "Kleine, fokussierte Apps für den Alltag.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full bg-[#0A0A0F] text-white">{children}</body>
    </html>
  );
}
