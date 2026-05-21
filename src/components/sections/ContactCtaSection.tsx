import Button from '../ui/Button';

export default function ContactCtaSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="contact-cta">
          <span className="section-label">Kontakt</span>
          <h2 className="contact-cta__title">Bereit, Teil von Moon zu werden?</h2>
          <p className="contact-cta__sub">
            Ob Spieler-Bewerbung, Sponsoring oder Kooperation – wir freuen uns
            auf deine Nachricht.
          </p>
          <div className="contact-cta__actions">
            <Button to="/contact" variant="primary">Kontakt aufnehmen</Button>
            <Button to="/teams" variant="ghost">Teams ansehen</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
