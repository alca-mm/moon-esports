import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

// Smoke test: Navbar renders in isolation inside a MemoryRouter (NavLink requires a
// router context). Regressions pinned: the accessible navigation landmark label,
// all four nav link texts, and the logo link href.
describe('Navbar', () => {
  it('renders the navigation landmark and all four nav links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    // The <nav> carries an aria-label used by assistive technology
    expect(
      screen.getByRole('navigation', { name: 'Hauptnavigation' }),
    ).toBeInTheDocument();

    // All four primary nav links must be present
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Teams' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Über uns' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Kontakt' })).toBeInTheDocument();

    // Teams nav link points to the /teams route
    expect(screen.getByRole('link', { name: 'Teams' })).toHaveAttribute(
      'href',
      '/teams',
    );

    // Logo link (text content "MOONESPORTS" from two adjacent spans) points to root
    const logoLink = screen.getByRole('link', { name: /MOON.*ESPORTS/i });
    expect(logoLink).toHaveAttribute('href', '/');
  });
});
