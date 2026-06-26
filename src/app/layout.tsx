import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "built by bw — App-Entwicklung aus Köln",
  description: "Wir bauen mobile Apps und Web-Plattformen. Flutter, Next.js, Supabase. Von der Idee bis zum Launch.",
  openGraph: {
    title: "built by bw — App-Entwicklung aus Köln",
    description: "Wir bauen mobile Apps und Web-Plattformen.",
    siteName: "built by bw",
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
