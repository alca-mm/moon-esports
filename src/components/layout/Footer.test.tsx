import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

// Smoke test: Footer renders in isolation inside a MemoryRouter (Link requires a
// router context). Regressions pinned: the legal navigation landmark, both legal
// links, and the copyright line (year is computed at render time, same as component).
describe('Footer', () => {
  it('renders the legal navigation, legal links, and copyright line', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    // Legal navigation landmark carries its aria-label
    expect(
      screen.getByRole('navigation', { name: 'Rechtliches' }),
    ).toBeInTheDocument();

    // Both legal links must be present
    expect(
      screen.getByRole('link', { name: 'Impressum' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Datenschutz' }),
    ).toBeInTheDocument();

    // Copyright line includes the current year (component uses new Date().getFullYear())
    const year = new Date().getFullYear();
    expect(
      screen.getByText(`© ${year} Moon Esports. Alle Rechte vorbehalten.`),
    ).toBeInTheDocument();
  });
});
