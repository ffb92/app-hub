import { APPS } from "@/lib/apps";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function DatenschutzPage({ params }: Props) {
  const { slug } = await params;
  const app = APPS.find((a) => a.slug === slug);
  if (!app) notFound();

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-zinc-300">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link href={`/${app.slug}`} className="text-xs text-zinc-500 hover:text-zinc-300 mb-8 inline-block">
          ← Zurück zu {app.name}
        </Link>

        <h1 className="text-2xl font-bold text-white mb-2">Datenschutzerklärung</h1>
        <p className="text-sm text-zinc-500 mb-8">für die App „{app.name}"</p>

        <section className="space-y-6 text-sm leading-relaxed">
          <div>
            <h2 className="text-base font-semibold text-white mb-2">1. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung im Sinne der DSGVO ist der Betreiber dieser App (Kontaktdaten siehe Impressum).</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">2. Erhebung und Verarbeitung von Daten</h2>
            <p>
              {app.slug === "flohmarkt" ? (
                "Die App &bdquo;Flohmarkt-Finder&ldquo; erhebt keine personenbezogenen Daten. Es ist keine Registrierung erforderlich. Standortdaten werden ausschließlich lokal auf dem Gerät verarbeitet und nicht an Server übermittelt. Favoriten werden lokal im Gerätespeicher abgelegt."
              ) : (
                `Die App &bdquo;${app.name}&ldquo; erhebt grundsätzlich keine personenbezogenen Daten.`
              )}
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">3. Hosting & Infrastruktur</h2>
            <p>
              {app.webUrl ? (
                `Die App wird über Vercel (Vercel Inc., USA) gehostet. Vercel verarbeitet zu Hosting-Zwecken technisch notwendige Daten wie IP-Adressen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an technisch einwandfreiem Betrieb).`
              ) : (
                "Die App wird lokal auf dem Gerät ausgeführt. Es werden keine Daten an externe Server übermittelt."
              )}
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">4. Rechte der Nutzer</h2>
            <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Bei Fragen kontaktieren Sie bitte die im Impressum angegebene E-Mail-Adresse.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">5. Änderungen</h2>
            <p>Diese Datenschutzerklärung kann aktualisiert werden. Die aktuelle Version ist jeweils unter dieser URL abrufbar.</p>
          </div>
        </section>

        <hr className="border-white/10 my-8" />
        <Link href="/impressum" className="text-sm text-zinc-500 hover:text-zinc-300 underline">
          Impressum
        </Link>
      </div>
    </div>
  );
}
