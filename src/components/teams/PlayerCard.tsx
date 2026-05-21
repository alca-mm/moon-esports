import { type Player } from '../../data/teams';
import RoleBadge from './RoleBadge';

interface PlayerCardProps {
  player: Player;
}

function initials(gamertag: string): string {
  return gamertag.slice(0, 2).toUpperCase();
}

const nationalityLabels: Record<string, string> = {
  DE: '🇩🇪 DE',
  AT: '🇦🇹 AT',
  CH: '🇨🇭 CH',
};

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className="player-card">
      <div className="player-card__avatar">{initials(player.gamertag)}</div>
      <div className="player-card__gamertag">{player.gamertag}</div>
      <div className="player-card__realname">{player.realName}</div>
      <div className="player-card__meta">
        <RoleBadge role={player.role} />
        <span className="player-card__flag">
          {nationalityLabels[player.nationality] ?? player.nationality} · {player.age} J.
        </span>
      </div>
    </div>
  );
}
