import { type FormEvent } from 'react';
import PageShell from '../components/layout/PageShell';
import Button from '../components/ui/Button';

export default function ContactPage() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <PageShell>
      <div className="page-hero">
        <div className="container">
          <span className="page-hero__eyebrow">Schreib uns</span>
          <h1 className="page-hero__title">Kontakt</h1>
          <p className="page-hero__sub">
            Fragen, Bewerbungen, Sponsoring oder Kooperationen – wir freuen uns
            auf deine Nachricht.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-item__icon">✉</div>
                <div>
                  <div className="contact-info-item__label">E-Mail</div>
                  <div className="contact-info-item__value">contact@moon-esports.gg</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-item__icon">🎮</div>
                <div>
                  <div className="contact-info-item__label">Discord</div>
                  <div className="contact-info-item__value">discord.gg/moon-esports</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-item__icon">𝕏</div>
                <div>
                  <div className="contact-info-item__label">Twitter / X</div>
                  <div className="contact-info-item__value">@MoonEsportsGG</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-item__icon">📸</div>
                <div>
                  <div className="contact-info-item__label">Instagram</div>
                  <div className="contact-info-item__value">@moonesports.gg</div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    className="form-input"
                    placeholder="Dein Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">E-Mail</label>
                  <input
                    id="email"
                    type="email"
                    className="form-input"
                    placeholder="deine@email.de"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Betreff</label>
                  <input
                    id="subject"
                    type="text"
                    className="form-input"
                    placeholder="Worum geht es?"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Nachricht</label>
                  <textarea
                    id="message"
                    className="form-textarea"
                    placeholder="Deine Nachricht..."
                    required
                  />
                </div>
                <Button type="submit" variant="primary">Nachricht senden</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
