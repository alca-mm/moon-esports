import { render, screen } from '@testing-library/react';
import { type Player } from '../../types/teams';
import PlayerCard from './PlayerCard';

// PlayerCard receives heterogeneous data: most fields on Player are optional.
// These tests are the null-safety net that proves optional fields STAY optional
// and the documented fallbacks STAY safe. Fixtures are built locally on purpose
// (no dependency on the real data) so behavior is pinned regardless of content.

describe('PlayerCard', () => {
  it('renders a minimal player (only id + gamertag) without crashing', () => {
    const player: Player = { id: 'min-1', gamertag: 'Moonshadow' };

    const { container } = render(<PlayerCard player={player} />);

    // Gamertag is shown (name bar + hover panel -> appears more than once).
    expect(screen.getAllByText('Moonshadow').length).toBeGreaterThan(0);
    // No splashImage -> initials fallback ("MO") instead of an <img>.
    expect(screen.getByText('MO')).toBeInTheDocument();
    expect(container.querySelector('img')).toBeNull();
    // No role / staffRole / isSubstitute -> no role badge is rendered.
    expect(container.querySelector('.role-badge')).toBeNull();
  });

  it('does not turn a placeholder "#" op.gg value into an active external link', () => {
    const player: Player = {
      id: 'sub-1',
      gamertag: 'Benchy',
      socials: { opgg: '#' },
    };

    render(<PlayerCard player={player} />);

    const opgg = screen.getByText('OP.GG').closest('a');
    expect(opgg).not.toBeNull();
    // Placeholder: href stays "#" and the link is NOT opened in a new tab.
    expect(opgg).toHaveAttribute('href', '#');
    expect(opgg).not.toHaveAttribute('target');
  });

  it('renders a real op.gg value as an external link opened in a new tab', () => {
    const url = 'https://op.gg/de/lol/summoners/euw/Example';
    const player: Player = {
      id: 'real-1',
      gamertag: 'Starlight',
      socials: { opgg: url },
    };

    render(<PlayerCard player={player} />);

    const opgg = screen.getByText('OP.GG').closest('a');
    expect(opgg).toHaveAttribute('href', url);
    expect(opgg).toHaveAttribute('target', '_blank');
  });

  it('renders provided non-op.gg socials (e.g. Twitch) as external links', () => {
    const twitch = 'https://twitch.tv/example';
    const player: Player = {
      id: 'soc-1',
      gamertag: 'Comet',
      socials: { twitch },
    };

    render(<PlayerCard player={player} />);

    const link = screen.getByText('Twitch').closest('a');
    expect(link).toHaveAttribute('href', twitch);
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('shows a substitute badge for a substitute without a role badge', () => {
    const player: Player = {
      id: 'sub-2',
      gamertag: 'Reserve',
      role: 'Support',
      isSubstitute: true,
    };

    const { container } = render(<PlayerCard player={player} />);

    // Substitutes show the staff badge ("Substitute"), not the role badge.
    expect(screen.getByText('Substitute')).toBeInTheDocument();
    expect(container.querySelector('.role-badge')).toBeNull();
  });
});
