export type Role = 'Top' | 'Jungle' | 'Mid' | 'ADC' | 'Support';

export interface PlayerSocials {
  x?: string;
  twitch?: string;
  instagram?: string;
  opgg?: string;
  discord?: string;
}

export interface Player {
  id: string;
  gamertag: string;
  realName?: string;
  summonerName?: string;
  role?: Role;
  nationality?: string;
  age?: number;
  champion?: string;
  skinId?: number;
  skinName?: string;
  splashImage?: string;
  splashPosition?: string;
  splashSize?: string;
  socials?: PlayerSocials;
  isSubstitute?: boolean;
  staffRole?: string;
}

export interface Team {
  id: string;
  slug: string;
  name: string;
  tier: string;
  tagline: string;
  description: string;
  accentColor: string;
  founded: string;
  players: Player[];
  achievements: string[];
  primeLeague?: { url: string; label: string };
}
