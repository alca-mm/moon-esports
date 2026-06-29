import { describe, it, expect } from 'vitest';
import { getTeamBySlug, teams } from './teams';
import { validateTeamsData } from './validateTeamsData';

describe('getTeamBySlug', () => {
  it('returns the matching team for every existing slug', () => {
    expect(teams.length).toBeGreaterThan(0);
    for (const team of teams) {
      const found = getTeamBySlug(team.slug);
      expect(found).toBeDefined();
      expect(found?.slug).toBe(team.slug);
      // Returns the actual source object, not a copy.
      expect(found).toBe(team);
    }
  });

  it('returns undefined for an unknown slug', () => {
    expect(getTeamBySlug('definitely-not-a-real-slug')).toBeUndefined();
    expect(getTeamBySlug('')).toBeUndefined();
  });

  it('does not mutate the source data when called repeatedly', () => {
    const lengthBefore = teams.length;
    const firstSlug = teams[0].slug;
    const callA = getTeamBySlug(firstSlug);
    const callB = getTeamBySlug(firstSlug);
    // Identity is stable across calls and the array is untouched.
    expect(callA).toBe(callB);
    expect(teams.length).toBe(lengthBefore);
  });
});

describe('teams data integrity', () => {
  it('has at least one team and every team exposes a truthy unique slug', () => {
    expect(teams.length).toBeGreaterThan(0);
    const slugs = teams.map((t) => t.slug);
    for (const slug of slugs) {
      expect(typeof slug).toBe('string');
      expect(slug.length).toBeGreaterThan(0);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('gives every team at least one player', () => {
    for (const team of teams) {
      expect(Array.isArray(team.players)).toBe(true);
      expect(team.players.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('has every required field present and non-empty on every team', () => {
    for (const team of teams) {
      expect(team.id.trim().length).toBeGreaterThan(0);
      expect(team.slug.trim().length).toBeGreaterThan(0);
      expect(team.name.trim().length).toBeGreaterThan(0);
      expect(team.tier.trim().length).toBeGreaterThan(0);
      expect(team.tagline.trim().length).toBeGreaterThan(0);
      expect(team.description.trim().length).toBeGreaterThan(0);
      expect(team.accentColor.trim().length).toBeGreaterThan(0);
      expect(team.founded.trim().length).toBeGreaterThan(0);
      expect(Array.isArray(team.achievements)).toBe(true);
    }
  });

  it('keeps each currently-existing slug resolvable via getTeamBySlug', () => {
    // Read the live slugs from the data instead of hard-coding a list
    // that could go stale; assert the set is non-empty and resolvable.
    const slugs = teams.map((t) => t.slug);
    expect(slugs.length).toBeGreaterThan(0);
    for (const slug of slugs) {
      expect(getTeamBySlug(slug)?.slug).toBe(slug);
    }
  });

  it('passes the validateTeamsData guard with zero issues', () => {
    expect(validateTeamsData(teams)).toEqual([]);
  });
});
