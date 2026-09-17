import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import BrandMark from './BrandMark';

// A short brand introduction, not a fabricated loading percentage. The actual
// app renders immediately underneath. Keyboard/pointer interaction dismisses it.
export default function Preloader() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(() => {
    try { return !sessionStorage.getItem('portfolio-introduced'); } catch { return true; }
  });
  useEffect(() => {
    if (!visible) return;
    const dismiss = () => setVisible(false);
    const timer = setTimeout(dismiss, 1000);
    try { sessionStorage.setItem('portfolio-introduced', 'true'); } catch { /* storage is optional */ }
    window.addEventListener('keydown', dismiss, { once: true });
    window.addEventListener('pointerdown', dismiss, { once: true });
    return () => { clearTimeout(timer); window.removeEventListener('keydown', dismiss); window.removeEventListener('pointerdown', dismiss); };
  }, [visible]);
  if (!visible || reduced) return null;
  return <div className="brand-intro" aria-hidden="true"><div className="brand-intro-grid" /><BrandMark full /><span className="brand-intro-line" /></div>;
}
