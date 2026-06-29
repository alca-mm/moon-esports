import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import DatenschutzPage from './DatenschutzPage';

// Smoke test: DatenschutzPage must render the h1 heading (distinct from footer link),
// the Datenschutzerklärung h2, and a properly href'd mailto link for the contact address.
// Regressions pinned: privacy page headings and accessible contact link.
describe('DatenschutzPage', () => {
  it('renders the page heading, section heading, and mailto contact link', () => {
    render(
      <MemoryRouter>
        <DatenschutzPage />
      </MemoryRouter>,
    );

    // Level-1 heading disambiguates from the Datenschutz footer nav link
    expect(
      screen.getByRole('heading', { name: 'Datenschutz', level: 1 }),
    ).toBeInTheDocument();

    // First h2 inside the privacy policy content
    expect(
      screen.getByRole('heading', { name: 'Datenschutzerklärung', level: 2 }),
    ).toBeInTheDocument();

    // The contact section renders a mailto anchor with the correct href
    const mailtoLink = screen.getByRole('link', {
      name: 'contact@moon-esports.gg',
    });
    expect(mailtoLink).toHaveAttribute('href', 'mailto:contact@moon-esports.gg');
  });
});
