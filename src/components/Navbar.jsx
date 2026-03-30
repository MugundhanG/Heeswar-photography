const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '24px 60px',
    background: 'linear-gradient(to bottom, rgba(10,10,10,0.95), transparent)',
  },
  logo: {
    fontFamily: 'var(--font-display)', fontSize: '2rem',
    letterSpacing: '0.15em', color: 'var(--white)', textDecoration: 'none',
  },
  logoSpan: { color: 'var(--gold)' },
  navLinks: { display: 'flex', gap: 48, listStyle: 'none' },
  navLink: {
    fontFamily: 'var(--font-body)', fontSize: '0.75rem',
    letterSpacing: '0.2em', textTransform: 'uppercase',
    color: 'var(--white)', textDecoration: 'none',
    opacity: 0.7, transition: 'opacity 0.3s, color 0.3s',
  },
  cta: {
    fontFamily: 'var(--font-body)', fontSize: '0.75rem',
    letterSpacing: '0.2em', textTransform: 'uppercase',
    color: 'var(--black)', background: 'var(--gold)',
    border: 'none', padding: '12px 28px', textDecoration: 'none',
    transition: 'background 0.3s',
  },
};

export default function Navbar() {
  const links = ['home', 'about', 'services', 'contact'];

  return (
    <nav style={styles.nav}>
      <a href="#home" style={styles.logo}>
        LENZ<span style={styles.logoSpan}>.</span>
      </a>
      <ul style={styles.navLinks}>
        {links.map(l => (
          <li key={l}>
            <a
              href={`#${l}`}
              style={styles.navLink}
              onMouseEnter={e => { e.target.style.opacity = 1; e.target.style.color = 'var(--gold)'; }}
              onMouseLeave={e => { e.target.style.opacity = 0.7; e.target.style.color = 'var(--white)'; }}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        style={styles.cta}
        onMouseEnter={e => e.target.style.background = 'var(--gold-light)'}
        onMouseLeave={e => e.target.style.background = 'var(--gold)'}
      >
        Book Session
      </a>
    </nav>
  );
}
