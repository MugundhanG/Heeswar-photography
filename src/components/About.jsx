const s = {
  section: {
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
    alignItems: 'center', background: 'var(--off-black)', padding: '120px 60px',
  },
  visual: { position: 'relative', height: 580 },
  imgMain: {
    position: 'absolute', top: 0, left: 0, width: '75%', height: '85%',
    background: 'linear-gradient(145deg, #1a1510 0%, #2e2416 60%, #0d0b08 100%)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  imgAccent: {
    position: 'absolute', bottom: 0, right: 0, width: '50%', height: '45%',
    background: 'var(--charcoal)', border: '2px solid var(--gold)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  badge: {
    position: 'absolute', top: '50%', left: '60%',
    transform: 'translate(-50%, -50%)',
    background: 'var(--gold)', color: 'var(--black)',
    padding: '20px 24px', textAlign: 'center', zIndex: 2,
  },
  badgeNum: {
    fontFamily: 'var(--font-display)', fontSize: '2.5rem',
    lineHeight: 1, display: 'block',
  },
  badgeLbl: { fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' },
  content: { paddingRight: 40 },
  label: {
    fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase',
    color: 'var(--gold)', marginBottom: 16,
  },
  title: {
    fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 5rem)',
    lineHeight: 1, letterSpacing: '0.03em',
  },
  titleEm: {
    fontFamily: 'var(--font-serif)', fontStyle: 'italic',
    fontWeight: 300, color: 'var(--gold)',
  },
  text: { marginTop: 32, fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--grey)', maxWidth: 480 },
  stats: {
    display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32,
    marginTop: 56, paddingTop: 48, borderTop: '1px solid rgba(255,255,255,0.08)',
  },
  statNum: { fontFamily: 'var(--font-display)', fontSize: '2.8rem', color: 'var(--gold)', lineHeight: 1 },
  statLabel: { fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey)', marginTop: 8 },
};

const stats = [
  { num: '1200+', label: 'Projects Delivered' },
  { num: '98%',   label: 'Client Satisfaction' },
  { num: '40+',   label: 'Awards Won' },
];

export default function About() {
  return (
    <section id="about" style={s.section}>
      <div style={s.visual}>
        <div style={s.imgMain}>
          <div style={{ opacity: 0.2, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1">
              <circle cx="12" cy="12" r="4"/>
              <path d="M20 9V7a2 2 0 0 0-2-2h-1l-1-2H8L7 5H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>
            </svg>
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontFamily: 'var(--font-body)' }}>
              Your photo here
            </span>
          </div>
        </div>
        <div style={s.imgAccent}>
          <div style={{ opacity: 0.15 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="m21 15-5-5L5 21"/>
            </svg>
          </div>
        </div>
        <div style={s.badge}>
          <span style={s.badgeNum}>8+</span>
          <span style={s.badgeLbl}>Years of<br />Excellence</span>
        </div>
      </div>

      <div style={s.content}>
        <p style={s.label}>✦ About the Studio</p>
        <h2 style={s.title}>
          Passion Meets<br />
          <em style={s.titleEm}>Precision</em>
        </h2>
        <p style={s.text}>
          At <strong style={{ color: 'var(--white)', fontWeight: 500 }}>LENZ Studio</strong>, we believe every great photograph is a conversation between light, emotion, and intention.
          Founded on a love for authentic storytelling, our studio has spent over{' '}
          <strong style={{ color: 'var(--white)', fontWeight: 500 }}>8 years</strong> capturing the extraordinary within the ordinary.
          <br /><br />
          From intimate portraits to grand commercial productions, we bring the same dedication to craft — meticulous preparation, sharp instincts, and an eye trained to find beauty in every frame.
        </p>
        <div style={s.stats}>
          {stats.map(({ num, label }) => (
            <div key={label}>
              <div style={s.statNum}>{num}</div>
              <div style={s.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
