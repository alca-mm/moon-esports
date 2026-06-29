import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

// Smoke test: the global 404 page renders its heading, code and the
// "back home" call-to-action link.
describe('NotFoundPage', () => {
  it('renders the 404 message and a link back to the start page', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'Seite nicht gefunden' }),
    ).toBeInTheDocument();
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Zur Startseite' }),
    ).toBeInTheDocument();
  });
});
