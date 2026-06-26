import { APPS } from "@/lib/apps";
import Link from "next/link";

const COLOR_MAP: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  amber:  { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", glow: "shadow-amber-500/10" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", glow: "shadow-purple-500/10" },
  green:  { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20", glow: "shadow-green-500/10" },
  blue:   { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", glow: "shadow-blue-500/10" },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-6 py-24 sm:py-32 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Apps by ffb92
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Apps, die was können.
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl">
            Kleine, fokussierte Apps für den Alltag. Kein Bloat, keine Abos — einfach nützlich.
          </p>
        </div>
      </header>

      {/* Apps Grid */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {APPS.map((app) => {
            const c = COLOR_MAP[app.color] || COLOR_MAP.amber;
            return (
              <Link
                key={app.slug}
                href={`/${app.slug}`}
                className={`group relative rounded-2xl border ${c.border} ${c.bg} p-6 hover:bg-white/[0.06] transition-all duration-300 ${c.glow} shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{app.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold text-white group-hover:text-zinc-100">
                      {app.name}
                    </h2>
                    <p className="text-sm text-zinc-400 mt-1">{app.tagline}</p>
                    <p className="text-sm text-zinc-500 mt-2 line-clamp-2">
                      {app.description}
                    </p>
                    <div className="flex gap-1.5 mt-3">
                      {app.platforms.map((p) => (
                        <span key={p} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-zinc-500 border border-white/5">
                          {p === "android" ? "Android" : p === "ios" ? "iOS" : "Web"}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`absolute top-4 right-4 text-xs font-medium ${c.text}`}>
                  {app.webUrl ? "Live →" : "Coming soon"}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty state for future apps */}
        <div className="mt-8 rounded-2xl border border-dashed border-white/10 p-12 text-center">
          <p className="text-zinc-600 text-sm">Weitere Apps in Arbeit.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center">
        <div className="flex justify-center gap-6 text-xs text-zinc-600">
          <Link href="/impressum" className="hover:text-zinc-400">Impressum</Link>
          <span>·</span>
          <span>ffb92 © {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
