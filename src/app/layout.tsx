import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pixelwerft — App-Entwicklung aus Köln",
  description: "Wir bauen mobile Apps und Web-Plattformen. Von der Idee bis zum Launch — Flutter, Next.js, Supabase.",
  openGraph: {
    title: "Pixelwerft — App-Entwicklung aus Köln",
    description: "Wir bauen mobile Apps und Web-Plattformen.",
    siteName: "Pixelwerft",
  },
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
