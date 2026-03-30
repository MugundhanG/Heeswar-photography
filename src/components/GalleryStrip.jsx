const categories = ['Portraits', 'Weddings', 'Commercial', 'Editorial', 'Architecture', 'Events'];

const s = {
  strip: { background: 'var(--off-black)', padding: '60px 0', overflow: 'hidden' },
  inner: { display: 'flex', gap: 4, animation: 'galleryScroll 30s linear infinite' },
  item: (i) => ({
    flexShrink: 0, width: 260, height: 340, position: 'relative', overflow: 'hidden',
    background: i % 2 === 0
      ? 'linear-gradient(145deg, #1a1208, #2a1d0d)'
      : 'linear-gradient(145deg, #0e0e0e, #1c1812)',
  }),
  label: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    padding: 20,
    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
    fontSize: '0.65rem', letterSpacing: '0.2em',
    textTransform: 'uppercase', color: 'var(--gold)',
  },
};

export default function GalleryStrip() {
  const doubled = [...categories, ...categories];
  return (
    <div style={s.strip} aria-hidden="true">
      <div style={s.inner}>
        {doubled.map((cat, i) => (
          <div key={i} style={s.item(i)}>
            <div style={s.label}>{cat}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
