import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const links = ['home', 'about', 'services', 'contact'];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const styles = {
    nav: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '20px 60px',
      background: scrolled
        ? 'rgba(10,10,10,0.97)'
        : 'linear-gradient(to bottom, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 70%, transparent 100%)',
      backdropFilter: scrolled ? 'blur(12px)' : 'blur(4px)',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : '1px solid transparent',
      transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
    },
    logo: {
      fontFamily: 'var(--font-display)', fontSize: '2rem',
      letterSpacing: '0.15em', color: 'var(--white)', textDecoration: 'none',
      textShadow: '0 1px 8px rgba(0,0,0,0.8)',
    },
    logoSpan: { color: 'var(--gold)' },
    navLinks: { display: 'flex', gap: 48, listStyle: 'none' },
    navLink: {
      fontFamily: 'var(--font-body)', fontSize: '0.75rem',
      letterSpacing: '0.2em', textTransform: 'uppercase',
      color: 'var(--white)', textDecoration: 'none',
      opacity: 1, transition: 'color 0.3s',
      textShadow: '0 1px 6px rgba(0,0,0,0.9)',
      fontWeight: 400,
    },
    cta: {
      fontFamily: 'var(--font-body)', fontSize: '0.75rem',
      letterSpacing: '0.2em', textTransform: 'uppercase',
      color: 'var(--black)', background: 'var(--gold)',
      border: 'none', padding: '12px 28px', textDecoration: 'none',
      transition: 'background 0.3s', fontWeight: 500,
      boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
    },
  };

  return (
    <nav style={styles.nav}>
      <a href="#home" style={styles.logo}>
        Heeswar Photography<span style={styles.logoSpan}>.</span>
      </a>
      <ul style={styles.navLinks}>
        {links.map(l => (
          <li key={l}>
            <a
              href={`#${l}`}
              style={styles.navLink}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--white)'; }}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        style={styles.cta}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-light)'}
        onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
      >
        Book Session
      </a>
    </nav>
  );
}
