export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-zinc-300">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold text-white mb-8">Impressum</h1>

        <section className="space-y-6 text-sm leading-relaxed">
          <div>
            <h2 className="text-base font-semibold text-white mb-2">Angaben gemäß § 5 TMG</h2>
            <p>Benjamin Westphal</p>
            <p>[Adresse ergänzen]</p>
            <p>[PLZ, Ort ergänzen]</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">Kontakt</h2>
            <p>E-Mail: bwestphal92132@gmail.com</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">Haftungsausschluss</h2>
            <p>
              Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
              Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter sind wir gemäß § 7
              Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
