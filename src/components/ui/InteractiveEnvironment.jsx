import { useRef } from 'react';
import { motion as Motion, useMotionValue, useSpring, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function InteractiveEnvironment({ children }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 80, damping: 25 });
  const y = useSpring(pointerY, { stiffness: 80, damping: 25 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  function move(event) {
    if (!window.matchMedia('(min-width:1024px) and (hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left - bounds.width / 2) * .018);
    pointerY.set((event.clientY - bounds.top - bounds.height / 2) * .018);
  }
  return <div ref={ref} onPointerMove={move} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}>
    <Motion.div className="interactive-environment" style={reduced ? undefined : { x, y, scale }}>{children}</Motion.div>
  </div>;
}
