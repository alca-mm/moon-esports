import { NavLink } from 'react-router-dom';

function MoonIcon() {
  return (
    <svg
      className="navbar__logo-icon"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="14" cy="14" r="13" stroke="#b8cce4" strokeWidth="1" opacity="0.3" />
      <path
        d="M18 7a8 8 0 1 0 0 14 6 6 0 1 1 0-14z"
        fill="#b8cce4"
        opacity="0.9"
      />
    </svg>
  );
}

const links = [
  { to: '/',        label: 'Home'    },
  { to: '/teams',   label: 'Teams'   },
  { to: '/about',   label: 'Über uns' },
  { to: '/contact', label: 'Kontakt' },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__logo">
          <MoonIcon />
          <span>
            <span className="navbar__logo-name">MOON</span>
            <span className="navbar__logo-org">ESPORTS</span>
          </span>
        </NavLink>

        <nav className="navbar__nav" aria-label="Hauptnavigation">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                'navbar__link' + (isActive ? ' active' : '')
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
