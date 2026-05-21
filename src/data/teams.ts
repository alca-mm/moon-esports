export type Role = 'Top' | 'Jungle' | 'Mid' | 'ADC' | 'Support';

export interface Player {
  id: string;
  gamertag: string;
  realName: string;
  role: Role;
  nationality: string;
  age: number;
}

export interface Team {
  id: string;
  slug: string;
  name: string;
  tier: 'Prime' | 'Challengers' | 'Rising';
  tagline: string;
  description: string;
  accentColor: string;
  founded: string;
  players: Player[];
  achievements: string[];
}

export const teams: Team[] = [
  {
    id: 'prime',
    slug: 'prime',
    name: 'Moon Prime',
    tier: 'Prime',
    tagline: 'Das Flaggschiff',
    description:
      'Das Hauptteam von Moon Esports tritt in der Prime League an und repräsentiert die Organisation auf den größten Bühnen der DACH-Region.',
    accentColor: '#82aee0',
    founded: '2022',
    players: [
      { id: 'p1', gamertag: 'Stellaris', realName: 'Maximilian Weber',  role: 'Top',     nationality: 'DE', age: 22 },
      { id: 'p2', gamertag: 'DarkOrbit', realName: 'Jonas Klein',        role: 'Jungle',  nationality: 'DE', age: 20 },
      { id: 'p3', gamertag: 'Luminae',   realName: 'Erik Hartmann',      role: 'Mid',     nationality: 'AT', age: 21 },
      { id: 'p4', gamertag: 'Perigee',   realName: 'Leon Bauer',         role: 'ADC',     nationality: 'DE', age: 23 },
      { id: 'p5', gamertag: 'Selene',    realName: 'Niklas Fischer',     role: 'Support', nationality: 'CH', age: 22 },
    ],
    achievements: [
      'Prime League Spring 2024 – Top 4',
      'ERL Masters 2024 – Qualifier',
      'Prime League Summer 2023 – Playoffs',
    ],
  },
  {
    id: 'challengers',
    slug: 'challengers',
    name: 'Moon Challengers',
    tier: 'Challengers',
    tagline: 'Die Aufsteiger',
    description:
      'Moon Challengers kämpfen sich durch die Challenger-Ligen und liefern Nachwuchstalenten eine kompetitive Plattform auf dem Weg nach oben.',
    accentColor: '#c9a448',
    founded: '2023',
    players: [
      { id: 'c1', gamertag: 'Vanguard',   realName: 'Tim Schneider', role: 'Top',     nationality: 'DE', age: 19 },
      { id: 'c2', gamertag: 'Phasewalk',  realName: 'Ben Müller',    role: 'Jungle',  nationality: 'AT', age: 18 },
      { id: 'c3', gamertag: 'Zephyros',   realName: 'Felix Wagner',  role: 'Mid',     nationality: 'DE', age: 20 },
      { id: 'c4', gamertag: 'Nightfall',  realName: 'Lars Braun',    role: 'ADC',     nationality: 'DE', age: 19 },
      { id: 'c5', gamertag: 'Aether',     realName: 'Paul Richter',  role: 'Support', nationality: 'CH', age: 21 },
    ],
    achievements: [
      'Prime League Division 2 2024 – Aufstiegsplayoffs',
    ],
  },
  {
    id: 'rising',
    slug: 'rising',
    name: 'Moon Rising',
    tier: 'Rising',
    tagline: 'Die Zukunft',
    description:
      'Das Nachwuchsteam von Moon Esports – hier werden junge Talente entdeckt, gefördert und zu den Profis von morgen ausgebildet.',
    accentColor: '#72c4a0',
    founded: '2024',
    players: [
      { id: 'r1', gamertag: 'Solstice', realName: 'Finn Hoffmann', role: 'Top',     nationality: 'DE', age: 17 },
      { id: 'r2', gamertag: 'Eclipse',  realName: 'Nico Schwartz', role: 'Jungle',  nationality: 'DE', age: 18 },
      { id: 'r3', gamertag: 'Meridian', realName: 'Tom Krause',    role: 'Mid',     nationality: 'AT', age: 17 },
      { id: 'r4', gamertag: 'Nadir',    realName: 'Jan Vogt',      role: 'ADC',     nationality: 'DE', age: 18 },
      { id: 'r5', gamertag: 'Apogee',   realName: 'Lukas Wolf',    role: 'Support', nationality: 'DE', age: 17 },
    ],
    achievements: [],
  },
];

export function getTeamBySlug(slug: string): Team | undefined {
  return teams.find((t) => t.slug === slug);
}
