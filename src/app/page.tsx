import { APPS } from "@/lib/apps";
import Link from "next/link";

const STATS = [
  { value: "2", label: "Apps live", suffix: "" },
  { value: "345", label: "Flohmärkte gelistet", suffix: "+" },
  { value: "1.300", label: "Releases getrackt", suffix: "+" },
  { value: "100", label: "Entwicklungsstunden", suffix: "%" },
];

const PROCESS = [
  {
    step: "01",
    title: "Idee",
    desc: "Wir verstehen dein Problem und finden die einfachste Lösung. Kein Over-Engineering.",
    icon: "💡",
  },
  {
    step: "02",
    title: "Build",
    desc: "Schnelle Umsetzung mit modernstem Stack. Flutter, Next.js, Supabase — was am besten passt.",
    icon: "⚡",
  },
  {
    step: "03",
    title: "Launch",
    desc: "Play Store, Vercel, Marketing. Deine App geht live und wir kümmern uns um alles.",
    icon: "🚀",
  },
];

const TECH = [
  "Flutter", "Next.js", "TypeScript", "React", "Supabase", "PostgreSQL",
  "Tailwind CSS", "Vercel", "Stripe", "OpenStreetMap", "REST APIs", "GraphQL",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050508] text-zinc-200">
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050508]/80 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-bold tracking-tight text-white">
            Pixel<span className="text-indigo-400">werft</span>
          </span>
          <div className="flex items-center gap-6 text-xs text-zinc-500">
            <a href="#work" className="hover:text-zinc-300 transition-colors">Work</a>
            <a href="#process" className="hover:text-zinc-300 transition-colors">Process</a>
            <a href="#contact" className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-zinc-300 hover:bg-white/[0.12] transition-colors">
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.03] via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/[0.04] blur-[80px]" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] text-zinc-500 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Verfügbar für Projekte
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            Wir bauen Apps,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-400">
              die was können.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 mt-6 max-w-2xl leading-relaxed">
            Pixelwerft ist ein kleines, fokussiertes App-Studio aus Köln. 
            Wir entwickeln mobile Apps und Web-Plattformen — von der Idee bis zum Launch.
          </p>
          <div className="flex gap-3 mt-8">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors"
            >
              Unsere Apps
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm font-medium text-zinc-300 hover:bg-white/[0.08] transition-colors"
            >
              Projekt anfragen
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
                  {s.value}<span className="text-indigo-400">{s.suffix}</span>
                </div>
                <div className="text-xs text-zinc-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-3">Unsere Arbeit</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Apps aus der Werft</h2>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {APPS.map((app) => (
              <Link
                key={app.slug}
                href={`/${app.slug}`}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {app.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white">{app.name}</h3>
                      {app.webUrl && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">Live</span>
                      )}
                    </div>
                    <p className="text-sm text-zinc-400 mt-1">{app.tagline}</p>
                    <p className="text-sm text-zinc-500 mt-3 leading-relaxed line-clamp-2">
                      {app.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {app.features.slice(0, 4).map((f) => (
                        <span key={f.title} className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.03] text-zinc-500 border border-white/[0.04]">
                          {f.icon} {f.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute top-6 right-6 text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming soon placeholder */}
          <div className="mt-6 rounded-2xl border border-dashed border-white/[0.06] p-10 text-center">
            <p className="text-sm text-zinc-600">
              Das nächste Projekt steht schon in den Startlöchern.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-24 sm:py-32 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-3">Wie wir arbeiten</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Von Null auf Live in drei Schritten</h2>

          <div className="grid gap-8 sm:grid-cols-3">
            {PROCESS.map((p) => (
              <div key={p.step} className="relative group">
                <div className="text-6xl font-bold text-white/[0.03] absolute -top-6 -left-2 select-none">
                  {p.step}
                </div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-xl mb-4">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-3">Tech Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Die Werkzeuge, die wir nutzen</h2>
          <div className="flex flex-wrap gap-2">
            {TECH.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] text-sm text-zinc-400 hover:border-white/[0.12] hover:text-zinc-200 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="py-24 sm:py-32 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-3">Loslegen</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Du hast eine App-Idee?
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto mb-8">
            Wir bauen den MVP, kümmern uns um den Launch und bleiben dran. 
            Kein Bullshit, kein Over-Engineering — einfach gute Apps.
          </p>
          <a
            href="mailto:bwestphal92132@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors"
          >
            Schreib uns
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.04] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-zinc-600">
            Pixel<span className="text-indigo-400">werft</span> © {new Date().getFullYear()}
          </span>
          <div className="flex items-center gap-6 text-xs text-zinc-600">
            <Link href="/impressum" className="hover:text-zinc-400 transition-colors">Impressum</Link>
            <Link href="/flohmarkt/datenschutz" className="hover:text-zinc-400 transition-colors">Datenschutz</Link>
            <span>Köln, DE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
