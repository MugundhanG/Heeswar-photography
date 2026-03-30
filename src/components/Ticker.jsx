const items = [
  'Portrait Photography', '✦', 'Wedding & Reception', '✦', 'Birthday Shoots', '✦', 'All traditional and corporate events', '✦',
  'Commercial Photography', '✦', ];

const s = {
  ticker: { background: 'var(--gold)', padding: '14px 0', overflow: 'hidden', whiteSpace: 'nowrap' },
  inner: { display: 'inline-flex', animation: 'ticker 20s linear infinite', willChange: 'transform' },
  item: {
    fontFamily: 'var(--font-display)', fontSize: '1rem',
    letterSpacing: '0.15em', color: 'var(--black)', padding: '0 48px',
  },
  sep: { opacity: 0.4 },
};

export default function Ticker() {
  const doubled = [...items, ...items, ...items];
  return (
    <div style={s.ticker} aria-hidden="true">
      <div style={s.inner}>
        {doubled.map((item, i) => (
          <span key={i} style={{ ...s.item, ...(item === '✦' ? s.sep : {}) }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
