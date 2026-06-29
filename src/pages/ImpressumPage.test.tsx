import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ImpressumPage from './ImpressumPage';

// Smoke test: ImpressumPage must render the h1 heading (distinct from the footer
// legal link), the first legal section heading, and the company name "Moon Esports GbR".
// Regressions pinned: legal page headings and required company disclosure text.
describe('ImpressumPage', () => {
  it('renders the page heading, first section heading, and company name', () => {
    render(
      <MemoryRouter>
        <ImpressumPage />
      </MemoryRouter>,
    );

    // Level-1 heading disambiguates from the Impressum footer nav link
    expect(
      screen.getByRole('heading', { name: 'Impressum', level: 1 }),
    ).toBeInTheDocument();

    // First legal sub-heading (§ 5 TMG disclosure requirement)
    expect(
      screen.getByRole('heading', { name: 'Angaben gemäß § 5 TMG', level: 2 }),
    ).toBeInTheDocument();

    // Company name appears at least once in the legal content
    const instances = screen.getAllByText(/Moon Esports GbR/);
    expect(instances.length).toBeGreaterThan(0);
  });
});
