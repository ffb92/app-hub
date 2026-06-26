import { APPS } from "@/lib/apps";
import Link from "next/link";

const STATS = [
  { value: "2", label: "Apps live", suffix: "" },
  { value: "345", label: "Flohmärkte gelistet", suffix: "+" },
  { value: "1.300", label: "Releases getrackt", suffix: "+" },
  { value: "100", label: "Entwicklungsstunden", suffix: "%" },
];

const PROCESS = [
  { step: "01", title: "Idee", desc: "Wir verstehen dein Problem und finden die einfachste Lösung.", icon: "💡" },
  { step: "02", title: "Build", desc: "Schnelle Umsetzung mit Flutter, Next.js, Supabase — was am besten passt.", icon: "⌨️" },
  { step: "03", title: "Launch", desc: "Play Store, Vercel, Marketing — deine App geht live.", icon: "🚀" },
];

const TECH = [
  "Flutter", "Next.js", "TypeScript", "React", "Supabase", "PostgreSQL",
  "Tailwind CSS", "Vercel", "Stripe", "OpenStreetMap", "REST APIs", "GraphQL",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050508] text-zinc-200">
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050508]/80 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <img src="/brand/logo-mark.png" alt="" className="w-7 h-7 opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm font-medium tracking-tight text-zinc-300 group-hover:text-white transition-colors">
              built <span className="text-zinc-500">by</span> <span className="text-white font-bold">bw</span>
            </span>
          </Link>
          <div className="flex items-center gap-6 text-xs text-zinc-500">
            <a href="#work" className="hover:text-zinc-300 transition-colors">Work</a>
            <a href="#process" className="hover:text-zinc-300 transition-colors">Process</a>
            <a href="#contact" className="px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-300 hover:bg-white/[0.10] transition-colors">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-40 sm:pb-28">
        {/* Hero background image */}
        <div className="absolute inset-0 opacity-40">
          <img src="/brand/hero-bg.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/80 via-[#050508]/40 to-[#050508]" />
        
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
            {/* Left: Text */}
            <div className="flex-1 pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] text-zinc-500 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Verfügbar für Projekte
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                Wir bauen Apps,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-400">
                  die was können.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-zinc-400 mt-6 max-w-xl leading-relaxed">
                built by bw ist ein App-Studio aus Köln. Entwicklung, Design, Launch — alles aus einer Hand. Kein Bullshit, kein Over-Engineering.
              </p>
              <div className="flex gap-3 mt-8">
                <a href="#work" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors">
                  Unsere Apps
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </a>
                <a href="mailto:bwestphal92132@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm font-medium text-zinc-300 hover:bg-white/[0.08] transition-colors">
                  Projekt anfragen
                </a>
              </div>
            </div>

            {/* Right: Logo Mark (large, decorative) */}
            <div className="hidden lg:block flex-shrink-0">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-amber-500/10 border border-white/[0.06]" />
                <img src="/brand/logo-mark.png" alt="" className="relative w-full h-full object-contain p-8 opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center group">
                <div className="text-3xl sm:text-4xl font-bold text-white tabular-nums group-hover:scale-105 transition-transform duration-300">
                  {s.value}<span className="text-indigo-400">{s.suffix}</span>
                </div>
                <div className="text-xs text-zinc-500 mt-1.5">{s.label}</div>
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
              <p className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-3">Work</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Was wir gebaut haben</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {APPS.map((app) => (
              <Link
                key={app.slug}
                href={`/${app.slug}`}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-8 hover:bg-white/[0.03] hover:border-white/[0.10] transition-all duration-300 overflow-hidden"
              >
                {/* Accent gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] to-amber-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-white/[0.12] transition-all duration-300">
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
                    <p className="text-sm text-zinc-500 mt-3 leading-relaxed">{app.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {app.features.slice(0, 4).map((f) => (
                        <span key={f.title} className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.03] text-zinc-500 border border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
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
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-24 sm:py-32 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-3">Wie wir arbeiten</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-14">Von Null auf Live</h2>

          <div className="grid gap-8 sm:grid-cols-3">
            {PROCESS.map((p) => (
              <div key={p.step} className="relative group">
                <div className="text-7xl font-bold text-white/[0.02] absolute -top-8 -left-2 select-none tabular-nums">
                  {p.step}
                </div>
                <div className="relative pt-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-xl mb-5 group-hover:border-white/[0.15] transition-colors">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>
                {/* Connector line */}
                {p.step !== "03" && (
                  <div className="hidden sm:block absolute top-12 -right-4 w-8 h-px bg-white/[0.06]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH ── */}
      <section className="py-24 sm:py-32 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-3">Tech Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Womit wir arbeiten</h2>
          <div className="flex flex-wrap gap-2">
            {TECH.map((t) => (
              <span key={t} className="px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] text-sm text-zinc-400 hover:border-white/[0.12] hover:text-zinc-200 hover:bg-white/[0.04] transition-all cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="py-24 sm:py-32 border-t border-white/[0.05] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/[0.03] via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-[0.2em] mb-4">Loslegen</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Du hast eine App-Idee?
          </h2>
          <p className="text-lg text-zinc-400 mb-8 max-w-lg mx-auto leading-relaxed">
            Schreib mir 'ne Mail. Kurz, direkt, unverbindlich.
          </p>
          <a
            href="mailto:bwestphal92132@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-all hover:scale-[1.02]"
          >
            bwestphal92132@gmail.com
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.05] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/brand/logo-mark.png" alt="" className="w-4 h-4 opacity-40" />
            <span className="text-xs text-zinc-600">
              built <span className="text-zinc-500">by</span> <span className="text-zinc-400 font-medium">bw</span> © {new Date().getFullYear()}
            </span>
          </div>
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
