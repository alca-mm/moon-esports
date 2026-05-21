import { Link } from 'react-router-dom';

function MoonIconSmall() {
  return (
    <svg width="18" height="18" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M18 7a8 8 0 1 0 0 14 6 6 0 1 1 0-14z" fill="#b8cce4" opacity="0.8" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div>
            <div className="footer__brand-name">
              <MoonIconSmall />
              MOON ESPORTS
            </div>
            <p className="footer__brand-desc">
              Professionelle League-of-Legends-Organisation aus der DACH-Region.
              Drei Teams, eine Mission – Exzellenz im Wettbewerb.
            </p>
          </div>

          <div>
            <div className="footer__col-title">Navigation</div>
            <ul className="footer__col-links">
              {[
                { to: '/',        label: 'Home'     },
                { to: '/teams',   label: 'Teams'    },
                { to: '/about',   label: 'Über uns' },
                { to: '/contact', label: 'Kontakt'  },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__col-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Teams</div>
            <ul className="footer__col-links">
              {[
                { to: '/teams/mothlings', label: 'MOON Mothlings' },
                { to: '/teams/challengers', label: 'Moon Challengers' },
                { to: '/teams/rising',      label: 'Moon Rising'      },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer__col-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">© {year} Moon Esports. Alle Rechte vorbehalten.</span>
          <nav className="footer__legal" aria-label="Rechtliches">
            <Link to="/impressum"   className="footer__legal-link">Impressum</Link>
            <Link to="/datenschutz" className="footer__legal-link">Datenschutz</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
