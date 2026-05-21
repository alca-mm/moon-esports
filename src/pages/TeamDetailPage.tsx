import { useParams, Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import PlayerCard from '../components/teams/PlayerCard';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { getTeamBySlug } from '../data/teams';

export default function TeamDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const team = slug ? getTeamBySlug(slug) : undefined;

  if (!team) {
    return (
      <PageShell>
        <div className="not-found">
          <div className="not-found__inner">
            <span className="not-found__code">404</span>
            <h1 className="not-found__title">Team nicht gefunden</h1>
            <p className="not-found__sub">Dieses Team existiert nicht.</p>
            <Button to="/teams" variant="primary">Alle Teams ansehen</Button>
          </div>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div
        className="page-hero"
        style={{ '--team-accent': team.accentColor } as React.CSSProperties}
      >
        <div className="container">
          <span className="page-hero__eyebrow">
            <Link to="/teams" style={{ opacity: 0.6, transition: 'opacity 0.2s' }}>Teams</Link>
            {' / '}{team.name}
          </span>
          <h1 className="page-hero__title" style={{ color: team.accentColor }}>
            {team.name}
          </h1>
          <p className="page-hero__sub">{team.tagline} — {team.description}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="team-meta-row">
            <div className="team-meta-item">
              <div className="team-meta-item__value">{team.tier}</div>
              <div className="team-meta-item__key">Liga-Stufe</div>
            </div>
            <div className="team-meta-item">
              <div className="team-meta-item__value">{team.founded}</div>
              <div className="team-meta-item__key">Gegründet</div>
            </div>
            <div className="team-meta-item">
              <div className="team-meta-item__value">{team.players.length}</div>
              <div className="team-meta-item__key">Spieler</div>
            </div>
            <div className="team-meta-item">
              <div className="team-meta-item__value">DACH</div>
              <div className="team-meta-item__key">Region</div>
            </div>
          </div>

          <SectionHeading label="Kader" title="Die Spieler" />
          <div className="players-grid">
            {team.players.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>

          {team.achievements.length > 0 && (
            <div style={{ marginTop: '4rem' }}>
              <SectionHeading label="Erfolge" title="Errungenschaften" />
              <ul className="achievements-list">
                {team.achievements.map((a) => (
                  <li key={a} className="achievement-item">{a}</li>
                ))}
              </ul>
            </div>
          )}

          <div style={{ marginTop: '3rem' }}>
            <Button to="/teams" variant="ghost">← Alle Teams</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
