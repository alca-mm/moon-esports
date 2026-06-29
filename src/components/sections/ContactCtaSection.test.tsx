import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ContactCtaSection from './ContactCtaSection';

// Smoke test: ContactCtaSection renders the call-to-action heading and both action
// links. MemoryRouter is required because Button renders Link for the to prop.
// Regressions pinned: CTA heading text and both link labels.
describe('ContactCtaSection', () => {
  it('renders the CTA heading and both action links', () => {
    render(
      <MemoryRouter>
        <ContactCtaSection />
      </MemoryRouter>,
    );

    // Main CTA heading
    expect(
      screen.getByRole('heading', { name: 'Bereit, Teil von Moon zu werden?' }),
    ).toBeInTheDocument();

    // Both action links must be present
    expect(
      screen.getByRole('link', { name: 'Kontakt aufnehmen' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Teams ansehen' }),
    ).toBeInTheDocument();
  });
});
