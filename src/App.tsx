import './App.css';
import { useState } from 'react';
import { translations, type Lang } from './i18n';
import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';

type Page = 'home' | 'join';

// Hong Kong WhatsApp: country code 852
const WA_PHONE = '85295847154';

function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [page, setPage] = useState<Page>('home');

  const t = translations[lang];

  const getWaUrl = () => {
    const msg = encodeURIComponent(t.wa_msg);
    return `https://wa.me/${WA_PHONE}?text=${msg}`;
  };

  return (
    <div className="app">
      {/* ── NAVIGATION ── */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav__inner">

          {/* Logo */}
          <button className="nav__logo" onClick={() => setPage('home')} aria-label="Alpha Financials Home">
            <img
              src="/logo.png"
              alt="Alpha Financials Logo"
              className="nav__logo-img"
            />
            <div className="nav__logo-text">
              <span className="nav__logo-alpha">ALPHA</span>
              <span className="nav__logo-fin">FINANCIALS</span>
            </div>
          </button>

          {/* Links */}
          <div className="nav__links">
            <button
              id="nav-about"
              className={`nav__link ${page === 'home' ? 'nav__link--active' : ''}`}
              onClick={() => setPage('home')}
            >
              {t.nav_about}
            </button>
            <button
              id="nav-join"
              className={`nav__link ${page === 'join' ? 'nav__link--active' : ''}`}
              onClick={() => setPage('join')}
            >
              {t.nav_join}
            </button>
          </div>

          {/* Language Switcher */}
          <div className="nav__lang" role="group" aria-label="Language switcher">
            {(['en', 'zh-hant', 'zh-hans'] as Lang[]).map((l) => (
              <button
                key={l}
                id={`lang-${l}`}
                className={`lang-btn ${lang === l ? 'lang-btn--active' : ''}`}
                onClick={() => setLang(l)}
                aria-label={`Switch language to ${l === 'en' ? 'English' : l === 'zh-hant' ? 'Traditional Chinese' : 'Simplified Chinese'}`}
                aria-pressed={lang === l}
              >
                {l === 'en' ? 'EN' : l === 'zh-hant' ? '繁' : '简'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── PAGES ── */}
      <main id="main-content">
        {page === 'home' ? (
          <HomePage t={t} waUrl={getWaUrl()} onNavigateJoin={() => setPage('join')} />
        ) : (
          <JoinPage t={t} waUrl={getWaUrl()} />
        )}
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer" role="contentinfo">
        <div className="footer__inner">
          <div className="footer__brand">
            <span className="footer__logo">
              ALPHA <span className="teal">FINANCIALS</span>
            </span>
            <p className="footer__tagline">{t.footer_tagline}</p>
          </div>
          <a
            id="footer-whatsapp-cta"
            href={getWaUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa btn-wa--sm"
            aria-label="Contact us on WhatsApp"
          >
            <span className="wa-icon">💬</span> {t.cta_btn}
          </a>
        </div>
        <div className="footer__bottom">
          <p>{t.footer_rights}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
