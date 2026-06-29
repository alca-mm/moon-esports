import type { Team } from '../types/teams';

/**
 * Required Team fields that must be present and non-empty.
 * Array fields (players, achievements) only need to be a real array here;
 * the "empty players" rule is checked separately below.
 */
const REQUIRED_TEAM_FIELDS: readonly (keyof Team)[] = [
  'id',
  'slug',
  'name',
  'tier',
  'tagline',
  'description',
  'accentColor',
  'founded',
  'players',
  'achievements',
];

/** A short, secret-free identifier for a team, even when fields are missing. */
function teamLabel(team: Team, index: number): string {
  const slug = typeof team?.slug === 'string' ? team.slug.trim() : '';
  if (slug) return slug;
  const id = typeof team?.id === 'string' ? team.id.trim() : '';
  if (id) return id;
  return `#${index}`;
}

function isMissingRequiredField(team: Team, field: keyof Team): boolean {
  const value = team[field];
  if (field === 'players' || field === 'achievements') {
    // Array fields are "present" as long as they are arrays.
    return !Array.isArray(value);
  }
  if (typeof value === 'string') return value.trim().length === 0;
  return value === undefined || value === null;
}

/**
 * Pure, side-effect-free, never-throwing validator for the teams dataset.
 * Returns a list of human-readable, secret-free issue messages.
 * An empty list means the data is valid.
 */
export function validateTeamsData(teams: Team[]): string[] {
  const issues: string[] = [];

  if (!Array.isArray(teams)) {
    issues.push('Expected teams to be an array.');
    return issues;
  }

  const slugCounts = new Map<string, number>();

  teams.forEach((team, index) => {
    if (team === null || typeof team !== 'object') {
      issues.push(`Team at index ${index} is not an object.`);
      return;
    }

    const label = teamLabel(team, index);

    // Missing / empty required fields.
    for (const field of REQUIRED_TEAM_FIELDS) {
      if (isMissingRequiredField(team, field)) {
        issues.push(`Team "${label}" is missing required field "${String(field)}".`);
      }
    }

    // Track slug occurrences for duplicate detection.
    if (typeof team.slug === 'string' && team.slug.trim().length > 0) {
      const slug = team.slug;
      slugCounts.set(slug, (slugCounts.get(slug) ?? 0) + 1);
    }

    // Empty players array.
    if (Array.isArray(team.players) && team.players.length === 0) {
      issues.push(`Team "${label}" has an empty players array.`);
    }

    // Duplicate player ids within the team.
    if (Array.isArray(team.players)) {
      const seenPlayerIds = new Set<string>();
      for (const player of team.players) {
        const playerId =
          player && typeof player.id === 'string' ? player.id : undefined;
        if (playerId === undefined) continue;
        if (seenPlayerIds.has(playerId)) {
          issues.push(`Team "${label}" has duplicate player id "${playerId}".`);
        } else {
          seenPlayerIds.add(playerId);
        }
      }
    }
  });

  for (const [slug, count] of slugCounts) {
    if (count > 1) {
      issues.push(`Duplicate team slug: "${slug}" (used ${count} times).`);
    }
  }

  return issues;
}
