import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top  = e.clientY + 'px';
      }
    };

    const animateRing = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + 'px';
        ringRef.current.style.top  = ry.current + 'px';
      }
      rafRef.current = requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animateRing);

    const interactables = document.querySelectorAll('a, button, input, select, textarea');
    const enter = () => {
      if (cursorRef.current) { cursorRef.current.style.width = '6px'; cursorRef.current.style.height = '6px'; }
      if (ringRef.current)   { ringRef.current.style.width = '52px'; ringRef.current.style.height = '52px'; ringRef.current.style.opacity = '0.8'; }
    };
    const leave = () => {
      if (cursorRef.current) { cursorRef.current.style.width = '10px'; cursorRef.current.style.height = '10px'; }
      if (ringRef.current)   { ringRef.current.style.width = '36px'; ringRef.current.style.height = '36px'; ringRef.current.style.opacity = '0.5'; }
    };
    interactables.forEach(el => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave); });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      interactables.forEach(el => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave); });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} style={styles.cursor} />
      <div ref={ringRef}   style={styles.ring}   />
    </>
  );
}

const styles = {
  cursor: {
    position: 'fixed', width: 10, height: 10,
    background: 'var(--gold)', borderRadius: '50%',
    pointerEvents: 'none', zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.3s ease, height 0.3s ease',
  },
  ring: {
    position: 'fixed', width: 36, height: 36,
    border: '1px solid var(--gold)', borderRadius: '50%',
    pointerEvents: 'none', zIndex: 9998,
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease',
    opacity: 0.5,
  },
};
