import hero1 from '../images/hero1.webp';
import hero2 from '../images/hero2.webp';


const s = {
  section: {
    height: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr',
    position: 'relative', overflow: 'hidden',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
  },
  left: {
    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
    padding: '0 60px 80px', zIndex: 2, position: 'relative',
    zIndex: 2, position: 'relative',
  },
  label: {
    fontFamily: 'var(--font-body)', fontSize: '0.7rem',
    letterSpacing: '0.3em', textTransform: 'uppercase',
    color: 'var(--gold)', marginBottom: 24,
    opacity: 0, animation: 'fadeUp 1s 0.3s forwards',
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2.2rem, 5vw, 9rem)',
    lineHeight: 0.92, letterSpacing: '0.02em', color: 'var(--white)',
    opacity: 0, animation: 'fadeUp 1s 0.5s forwards',
  },
  titleEm: {
    fontFamily: 'var(--font-serif)', fontStyle: 'italic',
    fontWeight: 300, color: 'var(--gold)', fontSize: '0.65em', display: 'block',
  },
  desc: {
    marginTop: 32, maxWidth: 380, fontSize: '0.95rem',
    lineHeight: 1.8, color: 'var(--grey)',
    opacity: 0, animation: 'fadeUp 1s 0.7s forwards',
  },
  actions: {
    display: 'flex', gap: 20, marginTop: 48, alignItems: 'center',
    opacity: 0, animation: 'fadeUp 1s 0.9s forwards',
  },
  btnPrimary: {
    background: 'var(--gold)', color: 'var(--black)',
    fontFamily: 'var(--font-body)', fontSize: '0.75rem',
    letterSpacing: '0.2em', textTransform: 'uppercase',
    padding: '16px 36px', border: 'none', textDecoration: 'none',
    display: 'inline-block', transition: 'background 0.3s',
  },
  btnGhost: {
    fontFamily: 'var(--font-body)', fontSize: '0.75rem',
    letterSpacing: '0.2em', textTransform: 'uppercase',
    color: 'var(--white)', textDecoration: 'none',
    borderBottom: '1px solid var(--gold)', paddingBottom: 4,
    transition: 'color 0.3s',
  },
  right: { position: 'relative', overflow: 'hidden' },
  imgGrid: {
    position: 'absolute', inset: 0,
    display: 'grid', gridTemplateRows: '1fr 1fr', gap: 4,
  },
  imgBlock1: {
    background: 'linear-gradient(160deg, #1a1208 0%, #2d2010 40%, #0f0c06 100%)',
    overflow: 'hidden', position: 'relative',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  imgBlock2: {
    background: 'linear-gradient(160deg, #0c0c0c 0%, #1e1a10 50%, #2a1f0a 100%)',
    overflow: 'hidden', position: 'relative',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  placeholder: {
    display: 'flex', flexDirection: 'column', gap: 12,
    alignItems: 'center', opacity: 0.3,
  },
  placeholderText: {
    fontFamily: 'var(--font-body)', fontSize: '0.65rem',
    letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)',
  },
  scroll: {
    position: 'absolute', bottom: 40, right: 60,
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
    opacity: 0, animation: 'fadeUp 1s 1.2s forwards',
  },
  scrollText: {
    fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase',
    color: 'var(--grey)', writingMode: 'vertical-rl',
  },
  scrollLine: {
    width: 1, height: 60,
    background: 'linear-gradient(to bottom, var(--gold), transparent)',
    animation: 'scrollPulse 2s infinite',
  },
};

const CameraIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1">
    <circle cx="12" cy="12" r="4"/>
    <path d="M20 9V7a2 2 0 0 0-2-2h-1l-1-2H8L7 5H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>
  </svg>
);

const ImageIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <path d="m21 15-5-5L5 21"/>
  </svg>
);

export default function Hero() {
  return (
    <section id="home" style={s.section}>
      <div style={s.left}>
        <p style={s.label}>✦ Visual Storytelling Photography</p>
        <h1 style={s.title}>
          We Shoot<br />
          <em style={s.titleEm}>Stories,</em>
          Not Just<br />Moments
        </h1>
        <p style={s.desc}>
          Trusted photography studio crafting timeless images for Weddings,
          individuals, and all kind of events. Every frame is intentional.
        </p>
        <div style={s.actions}>
          <a
            href="#services"
            style={s.btnPrimary}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-light)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
          >
            Explore Services
          </a>
          <a
            href="#about"
            style={s.btnGhost}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--white)'}
          >
            Our Story →
          </a>
        </div>
      </div>

      <div style={s.right}>
        <div style={s.imgGrid}>
          <div style={s.imgBlock1}>            
            <img src={hero1} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={s.imgBlock2}>            
            <img src={hero2} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

     
    </section>
  );
}
