import type { Metadata } from "next";

export interface AppInfo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;        // emoji or image path
  color: string;       // tailwind color class
  platforms: ("android" | "ios" | "web")[];
  playStoreId?: string;
  webUrl?: string;
  features: { icon: string; title: string; desc: string }[];
  screenshots: string[];
  privacyUrl?: string;
}

export const APPS: AppInfo[] = [
  {
    slug: "flohmarkt",
    name: "Flohmarkt-Finder",
    tagline: "Finde Flohmärkte in deiner Nähe",
    description:
      "Entdecke Trödel-, Antik- und Flohmärkte in ganz Deutschland. Mit interaktiver Karte, Terminübersicht und Favoriten-Funktion.",
    icon: "🛍️",
    color: "amber",
    platforms: ["android"],
    playStoreId: undefined, // set after publish
    features: [
      { icon: "🗺️", title: "Interaktive Karte", desc: "Alle Märkte auf einen Blick — mit Navigation zu jedem Standort." },
      { icon: "📅", title: "Wöchentliche Termine", desc: "Verpasse nie wieder einen Markt — immer aktuell." },
      { icon: "⭐", title: "Favoriten speichern", desc: "Behalte deine Lieblingsmärkte im Blick." },
      { icon: "🔍", title: "Schnelle Suche", desc: "Finde Märkte in deiner Stadt oder Umgebung." },
    ],
    screenshots: [
      "/apps/flohmarkt/screen1.png",
      "/apps/flohmarkt/screen2.png",
      "/apps/flohmarkt/screen3.png",
    ],
  },
  {
    slug: "release-kalender",
    name: "Release Kalender",
    tagline: "Games, Filme, Serien & Anime im Überblick",
    description:
      "Verpasse keinen Release mehr. Games, Filme, Serien, Anime & Manga — alle Termine in einem Kalender.",
    icon: "🎬",
    color: "purple",
    platforms: ["web"],
    webUrl: "https://release-kalender.vercel.app",
    features: [
      { icon: "🎮", title: "Games", desc: "RAWG + VGC — tausende Spiele, alle Plattformen." },
      { icon: "🌸", title: "Anime & Manga", desc: "AniList-Daten — immer aktuell, inkl. Beschreibungen." },
      { icon: "🎬", title: "Filme & Serien", desc: "TMDB-Daten mit Region-Filter (DE/US/JP)." },
      { icon: "🔍", title: "Suche über alle Jahre", desc: "Finde Klassiker und kommende Releases." },
    ],
    screenshots: [],
  },
];
