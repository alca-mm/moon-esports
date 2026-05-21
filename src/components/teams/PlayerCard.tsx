import { useState } from 'react';
import { type Player, type PlayerSocials } from '../../data/teams';
import RoleBadge from './RoleBadge';

interface PlayerCardProps {
  player: Player;
}

const nationalityFlag: Record<string, string> = {
  DE: '🇩🇪',
  AT: '🇦🇹',
  CH: '🇨🇭',
};

const socialConfig: Record<
  keyof PlayerSocials,
  { label: string; color: string; bg: string }
> = {
  x:         { label: 'X',       color: '#e7e9ea', bg: 'rgba(231,233,234,0.08)' },
  twitch:    { label: 'Twitch',  color: '#9146ff', bg: 'rgba(145,70,255,0.1)'   },
  instagram: { label: 'IG',      color: '#e1306c', bg: 'rgba(225,48,108,0.1)'   },
  opgg:      { label: 'OP.GG',   color: '#5c74e0', bg: 'rgba(92,116,224,0.1)'   },
  discord:   { label: 'Discord', color: '#5865f2', bg: 'rgba(88,101,242,0.1)'   },
};

function SocialLinks({ socials }: { socials: PlayerSocials }) {
  const keys = (Object.keys(socialConfig) as (keyof PlayerSocials)[])
    .filter((k) => k !== 'opgg' && socials[k]);

  const opggCfg = socialConfig.opgg;
  const opggUrl = socials.opgg && socials.opgg !== '#' ? socials.opgg : '#';
  const hasRealOpgg = opggUrl !== '#';

  return (
    <div className="player-card__socials">
      {keys.map((key) => {
        const cfg = socialConfig[key];
        return (
          <a
            key={key}
            href={socials[key]}
            target="_blank"
            rel="noopener noreferrer"
            className="player-card__social-link"
            style={{ color: cfg.color, background: cfg.bg }}
            onClick={(e) => e.stopPropagation()}
          >
            {cfg.label}
          </a>
        );
      })}
      <a
        href={opggUrl}
        className="player-card__social-link"
        style={{ color: opggCfg.color, background: opggCfg.bg }}
        {...(hasRealOpgg ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        onClick={(e) => {
          e.stopPropagation();
          if (!hasRealOpgg) e.preventDefault();
        }}
      >
        {opggCfg.label}
      </a>
    </div>
  );
}

export default function PlayerCard({ player }: PlayerCardProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const hasImage = Boolean(player.splashImage) && !imgFailed;
  const imgStyle: React.CSSProperties = {
    objectPosition: player.splashPosition ?? 'center',
  };
  const bgStyle = player.splashSize
    ? ({ '--splash-scale': player.splashSize } as React.CSSProperties)
    : undefined;

  return (
    <div className="player-card">
      {/* ── Background ──────────────────────── */}
      <div className="player-card__bg" style={bgStyle}>
        {hasImage ? (
          <img
            className="player-card__bg-img"
            src={player.splashImage}
            alt=""
            aria-hidden="true"
            style={imgStyle}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="player-card__bg-fallback">
            {player.gamertag.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      {/* ── Top: role badge + status ─────────── */}
      <div className="player-card__top">
        {player.isSubstitute ? (
          <span className="player-card__badge player-card__badge--staff">
            {player.staffRole ?? 'Substitute'}
          </span>
        ) : (
          <>
            {player.role && <RoleBadge role={player.role} />}
            {player.staffRole && (
              <span className="player-card__badge player-card__badge--staff">
                {player.staffRole}
              </span>
            )}
          </>
        )}
      </div>

      {/* ── Always-visible IGN (fades on hover) ─ */}
      <div className="player-card__name-bar">
        <span className="player-card__ign">{player.gamertag}</span>
      </div>

      {/* ── Hover info panel (slides up) ──────── */}
      <div className="player-card__panel">
        <div className="player-card__gamertag">{player.gamertag}</div>

        {player.summonerName && (
          <div className="player-card__summoner">{player.summonerName}</div>
        )}

        {player.realName && (
          <div className="player-card__realname">{player.realName}</div>
        )}

        {player.champion && (
          <div className="player-card__champion">
            {player.champion}
            {player.skinName && (
              <span className="player-card__skin"> · {player.skinName}</span>
            )}
          </div>
        )}

        {(player.nationality || player.age) && (
          <div className="player-card__details">
            {player.nationality && (
              <span className="player-card__flag">
                {nationalityFlag[player.nationality] ?? player.nationality}
              </span>
            )}
            {player.age && (
              <span className="player-card__age">{player.age} J.</span>
            )}
          </div>
        )}

        <SocialLinks socials={player.socials ?? {}} />
      </div>
    </div>
  );
}
