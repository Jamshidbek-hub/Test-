import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const NAV_ITEMS = [
  { path: '/', label: 'Bosh sahifa', icon: '🏠' },
  { path: '/results', label: 'Natijalar', icon: '📊' },
]

export default function Header() {
  const location = useLocation()

  return (
    <header className="header" role="banner">
      <div className="header__inner container">
        <Link to="/" className="header__logo" aria-label="Bosh sahifaga qaytish">
          <span className="header__logo-icon">📜</span>
          <span className="header__logo-text">
            <span className="header__logo-title">Tarix Tayyorlov</span>
            <span className="header__logo-subtitle">Sertifikat imtihoniga tayyorlanish</span>
          </span>
        </Link>

        <nav className="header__nav" role="navigation" aria-label="Asosiy navigatsiya">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`header__nav-link ${location.pathname === item.path ? 'header__nav-link--active' : ''}`}
              aria-current={location.pathname === item.path ? 'page' : undefined}
            >
              <span className="header__nav-icon" aria-hidden="true">{item.icon}</span>
              <span className="header__nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
