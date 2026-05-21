import { Link } from 'react-router-dom';
import { type Team } from '../../types/teams';

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <div
      className="team-card"
      style={{ '--team-accent': team.accentColor } as React.CSSProperties}
    >
      <div className="team-card__tier">{team.tier}</div>
      <div className="team-card__name">{team.name}</div>
      <div className="team-card__tagline">{team.tagline}</div>
      <p className="team-card__desc">{team.description}</p>
      <div className="team-card__footer">
        <span className="team-card__meta">{team.players.length} Spieler · seit {team.founded}</span>
        <Link to={`/teams/${team.slug}`} className="team-card__link">
          Mehr erfahren →
        </Link>
      </div>
    </div>
  );
}
