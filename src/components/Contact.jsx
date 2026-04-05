import emailjs from '@emailjs/browser';
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
    label: 'Phone', value: '+91 7010917677',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email', value: 'heeswarphotography@gmail.com',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location', value: '1/5 EVR Periyar 1st Cross Street, Ambal Nagar, Ramapuram, Chennai - 600089',
  },
];

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState({});
  const [selectedService, setSelectedService] = useState('');

  const validateField = (name, value) => {
  let error = '';

  if (name === 'from_name') {
    if (!value.trim()) error = '⚠ Full Name is required.';
    else if (value.trim().length < 3) error = '⚠ Full Name must be at least 3 characters.';
  }

  if (name === 'mobile') {
    if (!value.trim()) error = '⚠ Mobile Number is required.';
    else if (!/^[6-9]\d{9}$/.test(value.trim())) error = '⚠ Enter a valid 10-digit Indian mobile number.';
  }

  if (name === 'from_email') {
    if (!value.trim()) error = '⚠ Email Address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) error = '⚠ Enter a valid email. Example: name@gmail.com';
  }

  if (name === 'service') {
    if (!value) error = '⚠ Please select a Service.';
  }

  if (name === 'start_date') {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (!value) error = '⚠ Event Start Date is required.';
    else if (new Date(value) < today) error = '⚠ Start Date cannot be in the past.';
  }

  if (name === 'end_date') {
    const startDate = document.getElementsByName('start_date')[0]?.value;
    if (!value) error = '⚠ Event End Date is required.';
    else if (startDate && new Date(value) < new Date(startDate)) error = '⚠ End Date cannot be before Start Date.';
  }

  if (name === 'event_location') {
    if (!value.trim()) error = '⚠ Event Location is required.';
    else if (value.trim().length < 3) error = '⚠ Enter a valid location. Example: Chennai, Tamil Nadu';
  }

  setErrors(prev => ({ ...prev, [name]: error }));
};


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name        = form.from_name.value.trim();
    const mobile      = form.mobile.value.trim();
    const email       = form.from_email.value.trim();
    const startDate   = form.start_date.value;
    const endDate     = form.end_date ? form.end_date.value : '';
    const location    = form.event_location.value.trim();

  // Check empty fields
  // if (!name || !mobile || !email || !startDate || !endDate || !location) {
  //   setStatus('error');
  //   setErrorMsg('Please fill all required fields.');
  //   return;
  // }

    // Check if Full Name is empty
    if (!name) {
      setStatus('error');
      setErrorMsg('⚠ Full Name is required.');
      return;
    }

      // Check if Mobile Number is empty
    if (!mobile) {
      setStatus('error');
      setErrorMsg('⚠ Mobile Number is required.');
      return;
    }

  // Validate phone number (10 digits)
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(mobile)) {
    setStatus('error');
    setErrorMsg('Enter a valid mobile number.');
    return;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setStatus('error');
    setErrorMsg('⚠ Enter a valid email address. Example: name@gmail.com');
    return;
  }

  // Check if Service is selected
  if (!form.service.value) {
    setStatus('error');
    setErrorMsg('⚠ Please select a Service.');
    return;
  }

  // Check if Start Date is selected
  if (!startDate) {
    setStatus('error');
    setErrorMsg('⚠ Event Start Date is required.');
    return;
  }

  // Check if Start Date is not in the past
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (new Date(startDate) < today) {
    setStatus('error');
    setErrorMsg('⚠ Event Start Date cannot be in the past.');
    return;
  }

  // Check if End Date is selected
  if (selectedService === 'Wedding & Reception') {
  if (!endDate) {
    setStatus('error');
    setErrorMsg('⚠ Event End Date is required.');
    return;
  }

  // Validate end date not before start date
  if (new Date(endDate) < new Date(startDate)) {
    setStatus('error');
    setErrorMsg('Event end date cannot be before start date.');
    return;
  }
  }
    // Check if Event Location is empty
  if (!location) {
    setStatus('error');
    setErrorMsg('⚠ Event Location is required.');
    return;
  }

  // Check if Event Location has minimum 3 characters
  if (location.length < 3) {
    setStatus('error');
    setErrorMsg('⚠ Please enter a valid Event Location. Example: Chennai, Tamil Nadu');
    return;
  }

    setStatus('sending');
    setErrorMsg('');

    emailjs.sendForm(
      'service_oa7dem7',
      'template_0ze4u0l',
      form,
      'bzMhA5rMUWDug50i0'
    ).then(() => {
      emailjs.send(
        'service_oa7dem7',
        'template_io7stkf',
        {
          from_name:  form.from_name.value,
          from_email: form.from_email.value,  
          service:    form.service.value,
          start_date: form.start_date.value,
          end_date:   form.end_date ? form.end_date.value : '',
          event_location: form.event_location.value,
        },
        'bzMhA5rMUWDug50i0'
      );
      setStatus('sent');
      form.reset();
    }).catch(() => {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    });
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
           <input
            type="text"
            name="from_name"
            placeholder="Your name"
            style={s.field}
            onFocus={e => e.target.style.borderColor = 'var(--gold)'}
            onBlur={e => {
              e.target.style.borderColor = 'rgba(255,255,255,0.08)';
              validateField('from_name', e.target.value);
            }}
          />
          {errors.from_name && <span style={{ color: '#ff4d4d', fontSize: '0.75rem', marginTop: 4 }}>{errors.from_name}</span>}
          </div>
          <div style={s.group}>
            <input
            type="email"
            name="from_email"
            placeholder="your@email.com"
            style={s.field}
            onFocus={e => e.target.style.borderColor = 'var(--gold)'}
            onBlur={e => {
              e.target.style.borderColor = 'rgba(255,255,255,0.08)';
              validateField('from_email', e.target.value);
            }}
          />
          {errors.from_email && <span style={{ color: '#ff4d4d', fontSize: '0.75rem', marginTop: 4 }}>{errors.from_email}</span>}
          </div>
        </div>
        <div style={s.group}>
          <input
            type="tel"
            name="mobile"
            placeholder="98765 43210"
            style={s.field}
            onFocus={e => e.target.style.borderColor = 'var(--gold)'}
            onBlur={e => {
              e.target.style.borderColor = 'rgba(255,255,255,0.08)';
              validateField('mobile', e.target.value);
            }}
          />
          {errors.mobile && <span style={{ color: '#ff4d4d', fontSize: '0.75rem', marginTop: 4 }}>{errors.mobile}</span>}
       </div>
        <div style={s.group}>
          <label style={s.label2}>Service Required</label>
          <select
            name="service"
            style={{ ...s.field, appearance: 'none' }}
            onFocus={e => e.target.style.borderColor = 'var(--gold)'}
            onChange={e => setSelectedService(e.target.value)}
            onBlur={e => {
              e.target.style.borderColor = 'rgba(255,255,255,0.08)';
              validateField('service', e.target.value);
            }}
          >
            <option value="">Select a service…</option>
            {['Wedding & Reception','Portrait Sessions','Birthday & Traditional Events','Pre / Post Wedding','Kids / Couple Outdoor Shoot'].map(o => (
              <option key={o} style={{ background: 'var(--charcoal)' }}>{o}</option>
            ))}
          </select>
          {errors.service && <span style={{ color: '#ff4d4d', fontSize: '0.75rem', marginTop: 4 }}>{errors.service}</span>}
        </div>
        <div style={s.formRow}>
          <div style={s.group}>
            <label style={s.label2}>Event Start Date</label>
            <input
            type="date"
            name="start_date"
            style={s.field}
            onFocus={e => e.target.style.borderColor = 'var(--gold)'}
            onBlur={e => {
              e.target.style.borderColor = 'rgba(255,255,255,0.08)';
              validateField('start_date', e.target.value);
            }}
          />
          {errors.start_date && <span style={{ color: '#ff4d4d', fontSize: '0.75rem', marginTop: 4 }}>{errors.start_date}</span>}
          </div>
          {selectedService === 'Wedding & Reception' && (
          <div style={s.group}>
            <label style={s.label2}>Event End Date</label>
            <input
            type="date"
            name="end_date"
            style={s.field}
            onFocus={e => e.target.style.borderColor = 'var(--gold)'}
            onBlur={e => {
              e.target.style.borderColor = 'rgba(255,255,255,0.08)';
              validateField('end_date', e.target.value);
            }}
          />
          {errors.end_date && <span style={{ color: '#ff4d4d', fontSize: '0.75rem', marginTop: 4 }}>{errors.end_date}</span>}
          </div> )}
        </div>
        <div style={s.group}>
          <label style={s.label2}>Event Location</label>
          <input
          type="text"
          name="event_location"
          placeholder="City, State (e.g. Chennai, Tamil Nadu)"
          style={s.field}
          onFocus={e => e.target.style.borderColor = 'var(--gold)'}
          onBlur={e => {
            e.target.style.borderColor = 'rgba(255,255,255,0.08)';
            validateField('event_location', e.target.value);
          }}
        />
        {errors.event_location && <span style={{ color: '#ff4d4d', fontSize: '0.75rem', marginTop: 4 }}>{errors.event_location}</span>}
        </div>
        <div style={s.group}>
          <label style={s.label2}>Tell Us More</label>
          <textarea
            rows={5}
            name="message"
            placeholder="Describe your project, vision, or any specific requirements…"
            style={{ ...s.field, resize: 'none' }}
            onFocus={e => e.target.style.borderColor = 'var(--gold)'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
          />
          
        </div>
        {status === 'error' && errorMsg && (
          <p style={{ color: '#ff4d4d', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: 8 }}>
            ⚠ {errorMsg}
          </p>
        )}
        <button
          type="submit"
          style={{
            background: status === 'sending' ? '#a07830' : 'var(--gold)',
            color: 'var(--black)',
            border: 'none', padding: 18, fontFamily: 'var(--font-body)',
            fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase',
            marginTop: 8, transition: 'background 0.3s', fontWeight: 500,
          }}
          onMouseEnter={e => { if (status !== 'sent') e.currentTarget.style.background = 'var(--gold-light)'; }}
          onMouseLeave={e => { if (status !== 'sent') e.currentTarget.style.background = 'var(--gold)'; }}
        >
          {status === 'sending' ? 'Sending…' : 'Send Enquiry →'}
        </button>
        </form>
         {status === 'sent' && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(0,0,0,0.85)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(6px)',
        }}>
          <div style={{
            background: 'var(--charcoal)',
            border: '1px solid var(--gold)',
            padding: '60px 48px',
            textAlign: 'center',
            maxWidth: 480,
            width: '90%',
            animation: 'fadeUp 0.5s ease forwards',
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              background: 'var(--gold)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px',
              fontSize: '1.8rem',
            }}>
              ✓
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: '2rem',
              letterSpacing: '0.1em', color: 'var(--white)',
              marginBottom: 16,
            }}>
              Enquiry Sent!
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.95rem',
              lineHeight: 1.8, color: 'var(--grey)',
              marginBottom: 32,
            }}>
              Thanks for the enquiry!<br />
              We will contact you within <span style={{ color: 'var(--gold)', fontWeight: 500 }}>24 hours.</span>
            </p>
            <button
              onClick={() => setStatus('idle')}
              style={{
                background: 'var(--gold)', color: 'var(--black)',
                border: 'none', padding: '14px 40px',
                fontFamily: 'var(--font-body)', fontSize: '0.75rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                fontWeight: 500, cursor: 'none',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-light)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
}