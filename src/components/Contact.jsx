import { useState } from 'react';

const s = {
  section: {
    background: 'var(--charcoal)', padding: '120px 60px',
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
  },
  label: { fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 },
  title: { fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 1, letterSpacing: '0.03em' },
  titleEm: { fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' },
  text: { marginTop: 32, fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--grey)' },
  details: { marginTop: 48, display: 'flex', flexDirection: 'column', gap: 20 },
  item: { display: 'flex', gap: 20, alignItems: 'flex-start' },
  itemStrong: { display: 'block', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: 4 },
  itemSpan: { fontSize: '0.95rem', color: 'var(--white)' },
  form: { display: 'flex', flexDirection: 'column', gap: 20 },
  formRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 },
  group: { display: 'flex', flexDirection: 'column', gap: 8 },
  label2: { fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--grey)' },
  field: {
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
    padding: '14px 18px', color: 'var(--white)', fontFamily: 'var(--font-body)',
    fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.3s',
  },
};

const contactItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 2.97 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
      </svg>
    ),
    label: 'Phone', value: '+91 98765 43210',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email', value: 'hello@lenzstudio.in',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Studio', value: 'Mumbai, Maharashtra, India',
  },
];

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sent');
    setTimeout(() => { setStatus('idle'); e.target.reset(); }, 3000);
  };

  const fieldStyle = (focused) => ({
    ...s.field,
    borderColor: focused ? 'var(--gold)' : 'rgba(255,255,255,0.08)',
  });

  return (
    <section id="contact" style={s.section}>
      <div>
        <p style={s.label}>✦ Get In Touch</p>
        <h2 style={s.title}>Let's Create<br /><em style={s.titleEm}>Together</em></h2>
        <p style={s.text}>Every great project starts with a conversation. Tell us your vision — we'll make it a reality.</p>
        <div style={s.details}>
          {contactItems.map(({ icon, label, value }) => (
            <div key={label} style={s.item}>
              <div style={{ flexShrink: 0, marginTop: 2 }}>{icon}</div>
              <div>
                <strong style={s.itemStrong}>{label}</strong>
                <span style={s.itemSpan}>{value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form style={s.form} onSubmit={handleSubmit}>
        <div style={s.formRow}>
          <div style={s.group}>
            <label style={s.label2}>Full Name</label>
            <input
              type="text" placeholder="Your name" required style={s.field}
              onFocus={e => e.target.style.borderColor = 'var(--gold)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
          </div>
          <div style={s.group}>
            <label style={s.label2}>Email Address</label>
            <input
              type="email" placeholder="your@email.com" required style={s.field}
              onFocus={e => e.target.style.borderColor = 'var(--gold)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
          </div>
        </div>
        <div style={s.group}>
          <label style={s.label2}>Service Required</label>
          <select
            style={{ ...s.field, appearance: 'none' }}
            onFocus={e => e.target.style.borderColor = 'var(--gold)'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
          >
            <option value="">Select a service…</option>
            {['Portrait Sessions','Wedding & Events','Product & Commercial','Editorial & Fashion','Architecture & Interiors','Corporate & Brand'].map(o => (
              <option key={o} style={{ background: 'var(--charcoal)' }}>{o}</option>
            ))}
          </select>
        </div>
        <div style={s.group}>
          <label style={s.label2}>Preferred Date</label>
          <input
            type="date" style={s.field}
            onFocus={e => e.target.style.borderColor = 'var(--gold)'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
          />
        </div>
        <div style={s.group}>
          <label style={s.label2}>Tell Us More</label>
          <textarea
            rows={5} placeholder="Describe your project, vision, or any specific requirements…"
            style={{ ...s.field, resize: 'none' }}
            onFocus={e => e.target.style.borderColor = 'var(--gold)'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
          />
        </div>
        <button
          type="submit"
          style={{
            background: status === 'sent' ? '#2d6a4f' : 'var(--gold)',
            color: status === 'sent' ? '#fff' : 'var(--black)',
            border: 'none', padding: 18, fontFamily: 'var(--font-body)',
            fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase',
            marginTop: 8, transition: 'background 0.3s', fontWeight: 500,
          }}
          onMouseEnter={e => { if (status !== 'sent') e.currentTarget.style.background = 'var(--gold-light)'; }}
          onMouseLeave={e => { if (status !== 'sent') e.currentTarget.style.background = 'var(--gold)'; }}
        >
          {status === 'sent' ? 'Message Sent ✓' : 'Send Enquiry →'}
        </button>
      </form>
    </section>
  );
}
