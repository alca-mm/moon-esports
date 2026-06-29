import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

// Smoke test: ContactPage must render the h1 heading, all four labelled form fields,
// the submit button, and the displayed contact e-mail address.
// Regressions pinned: form accessibility (label/input associations) and key copy.
describe('ContactPage', () => {
  it('renders the page heading, all form fields, submit button, and contact e-mail', () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>,
    );

    // Page heading – level 1 to disambiguate from footer "Kontakt" nav link
    expect(
      screen.getByRole('heading', { name: 'Kontakt', level: 1 }),
    ).toBeInTheDocument();

    // Form fields are accessible via their <label htmlFor> associations
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('E-Mail')).toBeInTheDocument();
    expect(screen.getByLabelText('Betreff')).toBeInTheDocument();
    expect(screen.getByLabelText('Nachricht')).toBeInTheDocument();

    // Submit button
    expect(
      screen.getByRole('button', { name: 'Nachricht senden' }),
    ).toBeInTheDocument();

    // Displayed contact e-mail address (plain text in contact-info section)
    expect(screen.getByText('contact@moon-esports.gg')).toBeInTheDocument();
  });
});
