import PageShell from '../components/layout/PageShell';

export default function DatenschutzPage() {
  return (
    <PageShell>
      <div className="page-hero">
        <div className="container">
          <span className="page-hero__eyebrow">Rechtliches</span>
          <h1 className="page-hero__title">Datenschutz</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>Datenschutzerklärung</h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir
              verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen
              Bestimmungen (DSGVO, TMG).
            </p>

            <h2>Verantwortlicher</h2>
            <p>
              Moon Esports GbR<br />
              Musterstraße 1, 12345 Musterstadt<br />
              E-Mail: contact@moon-esports.gg
            </p>

            <h2>Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p>
              Diese Website erhebt und speichert automatisch Informationen in sogenannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname
              des zugreifenden Rechners sowie Uhrzeit der Serveranfrage.
            </p>
            <p>
              Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung
              dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>

            <h2>Kontaktformular</h2>
            <p>
              Wenn Sie uns per Formular Anfragen zukommen lassen, werden Ihre Angaben aus
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
              zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h2>Ihre Rechte</h2>
            <p>
              Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung,
              Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie
              glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt
              oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden
              sind, können Sie sich bei der Aufsichtsbehörde beschweren.
            </p>

            <h2>Kontakt</h2>
            <p>
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen
              Daten wenden Sie sich an: <a href="mailto:contact@moon-esports.gg">contact@moon-esports.gg</a>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
