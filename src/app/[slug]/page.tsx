import { APPS } from "@/lib/apps";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = APPS.find((a) => a.slug === slug);
  if (!app) return {};
  return {
    title: `${app.name} — ${app.tagline} | Pixelwerft`,
    description: app.description,
  };
}

export default async function AppPage({ params }: Props) {
  const { slug } = await params;
  const app = APPS.find((a) => a.slug === slug);
  if (!app) notFound();

  return (
    <div className="min-h-screen bg-[#050508]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050508]/80 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center">
          <Link href="/" className="text-sm font-bold tracking-tight text-white hover:text-zinc-300 transition-colors">
            ← Pixel<span className="text-indigo-400">werft</span>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.03] via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="flex flex-col sm:flex-row items-start gap-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-4xl flex-shrink-0 shadow-2xl">
              {app.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl sm:text-4xl font-bold text-white">{app.name}</h1>
                {app.webUrl && (
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                    Live
                  </span>
                )}
              </div>
              <p className="text-lg text-indigo-400 mb-4">{app.tagline}</p>
              <p className="text-zinc-400 max-w-2xl leading-relaxed">{app.description}</p>
              
              <div className="flex flex-wrap gap-3 mt-6">
                {app.playStoreId && (
                  <a
                    href={`https://play.google.com/store/apps/details?id=${app.playStoreId}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-lg"
                  >
                    Google Play
                  </a>
                )}
                {app.webUrl && (
                  <a
                    href={app.webUrl}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm font-medium text-zinc-300 hover:bg-white/[0.08] transition-colors"
                  >
                    Web App öffnen ↗
                  </a>
                )}
              </div>

              <div className="flex gap-2 mt-4">
                {app.platforms.map((p) => (
                  <span key={p} className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] text-zinc-500 border border-white/[0.05]">
                    {p === "android" ? "Android" : p === "ios" ? "iOS" : "Web App"}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-3">Features</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">Was die App kann</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {app.features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-6 hover:border-white/[0.1] transition-colors"
              >
                <span className="text-2xl">{f.icon}</span>
                <h3 className="text-base font-bold text-white mt-3">{f.title}</h3>
                <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      {app.screenshots.length > 0 && (
        <section className="py-16 sm:py-24 border-t border-white/[0.04]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-3">Einblicke</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">Screenshots</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6">
              {app.screenshots.map((src, i) => (
                <div key={i} className="flex-shrink-0 rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl">
                  <img src={src} alt={`${app.name} ${i + 1}`} className="w-64 sm:w-72" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Interesse an einer eigenen App?</h2>
          <p className="text-zinc-400 mb-8">Wir bauen deine Idee — vom Konzept bis zum Launch.</p>
          <a
            href="mailto:bwestphal92132@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors"
          >
            Jetzt anfragen
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
            Pixel<span className="text-indigo-400">werft</span> © {new Date().getFullYear()}
          </Link>
          <div className="flex items-center gap-6 text-xs text-zinc-600">
            <Link href="/impressum" className="hover:text-zinc-400 transition-colors">Impressum</Link>
            <Link href={`/${app.slug}/datenschutz`} className="hover:text-zinc-400 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
