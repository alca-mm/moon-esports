import PageShell from '../components/layout/PageShell';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const values = [
  {
    icon: '⚡',
    title: 'Leistung',
    desc: 'Wir trainieren hart, analysieren konsequent und streben auf jeder Ebene nach dem höchsten Niveau.',
  },
  {
    icon: '🤝',
    title: 'Teamgeist',
    desc: 'Zusammenhalt und gegenseitiger Respekt sind die Basis unserer Spielerkultur – im Spiel und außerhalb.',
  },
  {
    icon: '🌱',
    title: 'Entwicklung',
    desc: 'Jeder Spieler verdient eine echte Perspektive. Wir investieren in Menschen, nicht nur in Ergebnisse.',
  },
  {
    icon: '🎯',
    title: 'Integrität',
    desc: 'Faire Strukturen, transparente Kommunikation und klare Werte bestimmen alles, was wir tun.',
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <div className="page-hero">
        <div className="container">
          <span className="page-hero__eyebrow">Wer wir sind</span>
          <h1 className="page-hero__title">Über Moon Esports</h1>
          <p className="page-hero__sub">
            Eine Organisation, die Esport ernst nimmt – für Spieler, Fans und die Szene.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p className="about-lead">
            Moon Esports wurde 2022 gegründet, um eine nachhaltige, spielerorientierte
            Esports-Organisation in der DACH-Region aufzubauen. Unser Fokus liegt auf
            League of Legends – dem meistgespielten PC-Spiel Europas.
          </p>
          <p className="about-body">
            Mit drei Teams auf unterschiedlichen Leistungsebenen bieten wir Talenten in
            jeder Phase ihrer Karriere einen Platz. Von Moon Rising, wo junge Spieler
            erstmals strukturiert gefördert werden, bis zu Moon Prime, das auf höchstem
            nationalem Niveau antritt.
          </p>
          <p className="about-body">
            Wir glauben daran, dass Esport mehr ist als Ergebnisse. Professionelles
            Coaching, mentale Stärke und ein positives Teamumfeld sind genauso wichtig
            wie mechanisches Können. Dieser Ansatz prägt alles, was wir tun.
          </p>
          <div style={{ marginTop: '2.5rem' }}>
            <Button to="/contact" variant="primary">Kontakt aufnehmen</Button>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            label="Unsere Werte"
            title="Was uns antreibt"
            sub="Diese vier Grundsätze bestimmen, wie wir als Organisation denken, handeln und wachsen."
          />
          <div className="values-grid">
            {values.map(({ icon, title, desc }) => (
              <div className="value-card" key={title}>
                <div className="value-card__icon">{icon}</div>
                <div className="value-card__title">{title}</div>
                <p className="value-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
