import { useState } from 'react';

const services = [
  {
    num: '01',
    icon: (
      <svg style={{ width: 44, height: 44, marginBottom: 20 }} viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    name: 'Wedding & Reception',
    desc: 'Complete wedding day coverage from the first look to the final dance. Every emotion, every detail captured beautifully and authentically.',
  },
  {
    num: '02',
    icon: (
      <svg style={{ width: 44, height: 44, marginBottom: 20 }} viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.2">
        <circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/>
      </svg>
    ),
    name: 'Portrait Sessions',
    desc: 'Timeless individual and family portraits that reflect your true personality. Studio and outdoor settings available with full retouching.',
  },
  {
    num: '03',
    icon: (
      <svg style={{ width: 44, height: 44, marginBottom: 20 }} viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    name: 'Birthday & Traditional Events',
    desc: 'Birthdays, naming ceremonies, engagements, and all cultural celebrations. Rich storytelling photography that preserves your traditions forever.',
  },
  {
    num: '04',
    icon: (
      <svg style={{ width: 44, height: 44, marginBottom: 20 }} viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    name: 'Pre / Post Wedding',
    desc: 'Romantic and cinematic pre-wedding and post-wedding shoots at stunning locations. Tell your love story the way it deserves to be told.',
  },
  {
    num: '05',
    icon: (
      <svg style={{ width: 44, height: 44, marginBottom: 20 }} viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    name: 'Kids / Couple Outdoor Shoot',
    desc: 'Fun, natural and candid outdoor sessions for couples and kids. Capturing genuine smiles, playful moments and pure joy in beautiful settings.',
  },
];

function ServiceCard({ num, icon, name, desc, price }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        background: hovered ? '#1f1f1f' : 'var(--charcoal)',
        padding: '48px 36px', position: 'relative', overflow: 'hidden',
        transition: 'background 0.4s', cursor: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: '100%', height: 2,
        background: 'var(--gold)',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left', transition: 'transform 0.4s ease',
      }} />
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: '3.5rem',
        color: hovered ? 'rgba(201,168,76,0.25)' : 'rgba(201,168,76,0.12)',
        lineHeight: 1, marginBottom: 24, transition: 'color 0.4s',
      }}>{num}</div>
      {icon}
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 400, marginBottom: 16, color: 'var(--white)' }}>{name}</h3>
      <p style={{ fontSize: '0.88rem', lineHeight: 1.8, color: 'var(--grey)' }}>{desc}</p>
      <div style={{ marginTop: 32, fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.1em', color: 'var(--gold)' }}>{price}</div>
    </div>
  );
}

const s = {
  section: { background: 'var(--black)', padding: '120px 60px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 72 },
  label: { fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 },
  title: { fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 1, letterSpacing: '0.03em' },
  titleEm: { fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' },
  ghost: {
    fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.2em',
    textTransform: 'uppercase', color: 'var(--white)', textDecoration: 'none',
    borderBottom: '1px solid var(--gold)', paddingBottom: 4, transition: 'color 0.3s',
  },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, },
  wrapper: { maxWidth: '66.66%', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, marginTop: 2 },
};

export default function Services() {
  return (
    <section id="services" style={s.section}>
      <div style={s.header}>
        <div>
          <p style={s.label}>✦ What We Offer</p>
          <h2 style={s.title}>Our<br /><em style={s.titleEm}>Services</em></h2>
        </div>
        <a
          href="#contact"
          style={s.ghost}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--white)'}
        >
          Get a Custom Quote →
        </a>
      </div>
      <div style={s.grid}>
        {services.slice(0, 3).map(svc => <ServiceCard key={svc.num} {...svc} />)}
      </div>
      <div style={s.wrapper}>
        {services.slice(3).map(svc => <ServiceCard key={svc.num} {...svc} />)}
      </div>
    </section>
  );
}
