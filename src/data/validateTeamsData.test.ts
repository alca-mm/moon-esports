import { describe, it, expect } from 'vitest';
import type { Player, Team } from '../types/teams';
import { validateTeamsData } from './validateTeamsData';
import { teams } from './teams';

function makePlayer(overrides: Partial<Player> = {}): Player {
  return { id: 'p-1', gamertag: 'Tester', ...overrides };
}

function makeTeam(overrides: Partial<Team> = {}): Team {
  return {
    id: 't-1',
    slug: 'team-one',
    name: 'Team One',
    tier: 'Gold',
    tagline: 'A tagline',
    description: 'A description',
    accentColor: '#ffffff',
    founded: '2025',
    players: [makePlayer()],
    achievements: [],
    ...overrides,
  };
}

describe('validateTeamsData', () => {
  it('returns no issues for the real teams data (good data is clean)', () => {
    expect(validateTeamsData(teams)).toEqual([]);
  });

  it('never throws and returns no issues for an empty array', () => {
    let result: string[] = [];
    expect(() => {
      result = validateTeamsData([]);
    }).not.toThrow();
    expect(result).toEqual([]);
  });

  it('flags duplicate team slugs', () => {
    const dupes = [makeTeam({ id: 't-1', slug: 'dup' }), makeTeam({ id: 't-2', slug: 'dup' })];
    const issues = validateTeamsData(dupes);
    expect(
      issues.some((m) => m.toLowerCase().includes('duplicate') && m.includes('dup')),
    ).toBe(true);
  });

  it('flags a team with an empty players array', () => {
    const issues = validateTeamsData([makeTeam({ slug: 'no-players', players: [] })]);
    expect(
      issues.some((m) => m.includes('no-players') && m.toLowerCase().includes('player')),
    ).toBe(true);
  });

  it('flags a team missing a required field given as an empty string', () => {
    const issues = validateTeamsData([makeTeam({ slug: 'bad-tagline', tagline: '' })]);
    expect(issues.some((m) => m.includes('tagline'))).toBe(true);
  });

  it('flags a team missing a required field that is undefined', () => {
    const bad = { ...makeTeam({ slug: 'missing-founded' }), founded: undefined } as unknown as Team;
    const issues = validateTeamsData([bad]);
    expect(issues.some((m) => m.includes('founded'))).toBe(true);
  });

  it('does not flag an empty achievements array as missing (empty array is allowed)', () => {
    const issues = validateTeamsData([makeTeam({ slug: 'no-achievements', achievements: [] })]);
    expect(issues.some((m) => m.includes('achievements'))).toBe(false);
  });

  it('flags duplicate player ids within a team', () => {
    const team = makeTeam({
      slug: 'dup-players',
      players: [makePlayer({ id: 'same' }), makePlayer({ id: 'same' })],
    });
    const issues = validateTeamsData([team]);
    expect(issues.some((m) => m.includes('same'))).toBe(true);
  });

  it('collects multiple problems at once without throwing', () => {
    const messy = [makeTeam({ slug: 'x', players: [] }), makeTeam({ slug: 'x', tagline: '' })];
    let issues: string[] = [];
    expect(() => {
      issues = validateTeamsData(messy);
    }).not.toThrow();
    expect(issues.length).toBeGreaterThan(1);
  });
});
