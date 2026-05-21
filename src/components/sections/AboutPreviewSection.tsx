import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

const stats = [
  { number: '3',    label: 'Aktive Teams'  },
  { number: '15',   label: 'Spieler'       },
  { number: '2022', label: 'Gegründet'     },
  { number: 'DACH', label: 'Region'        },
];

export default function AboutPreviewSection() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="about-preview">
          <div>
            <SectionHeading
              label="Über Moon Esports"
              title="Mehr als ein Esports-Team."
            />
            <p className="about-preview__body">
              Moon Esports wurde 2022 mit dem Ziel gegründet, eine nachhaltige,
              spielerorientierte Organisation in der deutschsprachigen League-of-Legends-Szene
              aufzubauen. Wir stehen für faire Strukturen, professionelles Coaching und
              echte Entwicklungsperspektiven.
            </p>
            <div className="about-preview__stats">
              {stats.map(({ number, label }) => (
                <div className="stat-item" key={label}>
                  <div className="stat-item__number">{number}</div>
                  <div className="stat-item__label">{label}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2.5rem' }}>
              <Button to="/about" variant="ghost">Unsere Geschichte</Button>
            </div>
          </div>

          <div className="about-preview__visual" aria-hidden="true">
            <div className="about-visual__orb">MOON</div>
            <div className="about-visual__ring" />
            <div className="about-visual__ring-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
