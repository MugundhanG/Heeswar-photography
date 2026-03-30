const s = {
  footer: {
    background: 'var(--black)', padding: '48px 60px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    borderTop: '1px solid rgba(255,255,255,0.06)',
  },
  logo: { fontFamily: 'var(--font-display)', fontSize: '1.6rem', letterSpacing: '0.15em', color: 'var(--white)' },
  logoSpan: { color: 'var(--gold)' },
  copy: { fontSize: '0.75rem', color: 'var(--grey)', letterSpacing: '0.1em' },
  socials: { display: 'flex', gap: 24 },
  link: {
    fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase',
    color: 'var(--grey)', textDecoration: 'none', transition: 'color 0.3s',
  },
};

const socials = ['Instagram', 'Behance', 'LinkedIn'];

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.logo}>LENZ<span style={s.logoSpan}>.</span></div>
      <p style={s.copy}>© 2025 LENZ Studio. All rights reserved.</p>
      <div style={s.socials}>
        {socials.map(name => (
          <a
            key={name}
            href="#"
            style={s.link}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'var(--grey)'}
          >
            {name}
          </a>
        ))}
      </div>
    </footer>
  );
}
