import PageShell from '../components/layout/PageShell';

export default function ImpressumPage() {
  return (
    <PageShell>
      <div className="page-hero">
        <div className="container">
          <span className="page-hero__eyebrow">Rechtliches</span>
          <h1 className="page-hero__title">Impressum</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              Moon Esports GbR<br />
              Musterstraße 1<br />
              12345 Musterstadt<br />
              Deutschland
            </p>

            <h2>Kontakt</h2>
            <p>
              E-Mail: contact@moon-esports.gg
            </p>

            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Moon Esports GbR<br />
              Musterstraße 1<br />
              12345 Musterstadt
            </p>

            <h2>Haftungsausschluss</h2>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
              keine Gewähr übernehmen.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
              bzw. Erstellers.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
