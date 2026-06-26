import { APPS } from "@/lib/apps";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

const COLOR_MAP: Record<string, { bg: string; text: string; border: string; from: string; to: string }> = {
  amber:  { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", from: "from-amber-500/10", to: "to-transparent" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", from: "from-purple-500/10", to: "to-transparent" },
  green:  { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20", from: "from-green-500/10", to: "to-transparent" },
  blue:   { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", from: "from-blue-500/10", to: "to-transparent" },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = APPS.find((a) => a.slug === slug);
  if (!app) return {};
  return {
    title: `${app.name} — ${app.tagline}`,
    description: app.description,
  };
}

export default async function AppPage({ params }: Props) {
  const { slug } = await params;
  const app = APPS.find((a) => a.slug === slug);
  if (!app) notFound();

  const c = COLOR_MAP[app.color] || COLOR_MAP.amber;

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Hero */}
      <header className={`relative overflow-hidden border-b border-white/5 bg-gradient-to-b ${c.from} ${c.to}`}>
        <div className="max-w-4xl mx-auto px-6 py-20 sm:py-28 relative">
          <Link href="/" className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 mb-8 transition-colors">
            ← Alle Apps
          </Link>
          <div className="flex items-start gap-5">
            <span className="text-5xl">{app.icon}</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">{app.name}</h1>
              <p className={`text-lg mt-2 ${c.text}`}>{app.tagline}</p>
              <p className="text-zinc-400 mt-4 max-w-lg">{app.description}</p>
              <div className="flex gap-3 mt-6">
                {app.playStoreId && (
                  <a
                    href={`https://play.google.com/store/apps/details?id=${app.playStoreId}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.8 12 3.84 22.85C3.34 22.61 3 22.09 3 21.5zm17.7-9.79l-3.34-1.93-3.44 3.22 3.44 3.22 3.34-1.93c.64-.37.64-1.33 0-1.7z"/></svg>
                    Google Play
                  </a>
                )}
                {app.webUrl && (
                  <a
                    href={app.webUrl}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors border border-white/10"
                  >
                    Web App öffnen ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Features</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {app.features.map((f) => (
            <div key={f.title} className={`rounded-xl border ${c.border} ${c.bg} p-5`}>
              <span className="text-2xl">{f.icon}</span>
              <h3 className="text-sm font-semibold text-white mt-3">{f.title}</h3>
              <p className="text-sm text-zinc-400 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Screenshots */}
        {app.screenshots.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Screenshots</h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {app.screenshots.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${app.name} Screenshot ${i + 1}`}
                  className="w-64 rounded-2xl border border-white/10 shadow-xl flex-shrink-0"
                />
              ))}
            </div>
          </section>
        )}

        {/* Privacy */}
        <section className="mt-16 pt-8 border-t border-white/5">
          <Link
            href={`/${app.slug}/datenschutz`}
            className="text-sm text-zinc-500 hover:text-zinc-300 underline"
          >
            Datenschutzerklärung für {app.name}
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center">
        <div className="flex justify-center gap-6 text-xs text-zinc-600">
          <Link href="/impressum" className="hover:text-zinc-400">Impressum</Link>
          <span>·</span>
          <Link href="/" className="hover:text-zinc-400">Alle Apps</Link>
          <span>·</span>
          <span>ffb92 © {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
