import { useRef } from 'react';
import { motion as Motion, useInView, useReducedMotion } from 'framer-motion';

const resting = { opacity: 1, y: 0, rotate: 0, clipPath: 'inset(0)' };
const entries = {
  lift: { ...resting, opacity: [0, 1], y: [22, 0] },
  document: { ...resting, opacity: [0, 1], y: [12, 0], rotate: [-1, 0] },
  reveal: { ...resting, opacity: [0, 1], clipPath: ['inset(0 0 100% 0)', 'inset(0)'] },
};
export default function SceneReveal({ children, className = '', mode = 'lift', delay = 0 }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  // Observe an unmasked wrapper: a fully clipped target has no intersection area.
  const visible = useInView(ref, { once: true, amount: .01, margin: '0px 0px 80px 0px' });
  return <div className={className} ref={ref} data-scene=""><Motion.div data-motion=""
    initial={false}
    animate={visible && !reduced ? entries[mode] : resting}
    transition={{ duration: .65, delay, ease: [.22, 1, .36, 1] }}>{children}</Motion.div></div>;
}
