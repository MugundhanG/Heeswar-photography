import portraits from '../images/portraits.webp';
import weddings from '../images/wedding.webp';
import birthday from '../images/birthday.webp';
import coupleoutdoor from '../images/coupleoutdoor.webp';
import events from '../images/events.webp';
import prewedding from '../images/prewedding.webp';
import reception from '../images/reception.webp';
import kidsoutdoor from '../images/kidsoutdoor.webp';
import postwedding from '../images/postwedding.webp';


const categories = [
  { label: 'Portraits',     img: portraits },
  { label: 'Weddings',      img: weddings },
  { label: 'birthday',    img: birthday },
  { label: 'coupleoutdoor',     img: coupleoutdoor },
  { label: 'events',  img: events },
  { label: 'postwedding',  img: postwedding },
  { label: 'prewedding',        img: prewedding },
  { label: 'reception',        img: reception },
  { label: 'kidsoutdoor',        img: kidsoutdoor },
  
];

const s = {
  strip: { background: 'var(--off-black)', padding: '60px 0', overflow: 'hidden' },
  inner: { display: 'flex', gap: 4, animation: 'galleryScroll 40s linear infinite', willChange: 'transform', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' },
  item: (i) => ({
    flexShrink: 0, width: 260, height: 340, position: 'relative', overflow: 'hidden',
    background: i % 2 === 0
      ? 'linear-gradient(145deg, #1a1208, #2a1d0d)'
      : 'linear-gradient(145deg, #0e0e0e, #1c1812)',
  }),
  label: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    padding: '24px 20px 16px',
    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)',
    fontSize: '0.65rem', letterSpacing: '0.2em',
    textTransform: 'uppercase', color: 'var(--white)',
    textShadow: '0 1px 6px rgba(0,0,0,1)',
    fontWeight: 500,
    fontFamily: 'var(--font-body)',
  },
};

export default function GalleryStrip() {
  const doubled = [...categories, ...categories, ...categories, ...categories];
  return (
    <div style={s.strip} aria-hidden="true">
      <div style={s.inner}>
        {doubled.map((cat, i) => (
  <div key={i} style={s.item(i)}>
    <img
      src={cat.img}
      alt={cat.label}
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
    />
    <div style={s.label}>{cat.label}</div>
  </div>
))}
      </div>
    </div>
  );
}
