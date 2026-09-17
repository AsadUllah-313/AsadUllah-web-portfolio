// ═══════════════════════════════════════════════════════════════════
// src/hooks/useMagneticButton.js
//
// Makes a button subtly follow the cursor when hovered —
// the "magnetic" premium interaction feel used on CTAs.
//
// Usage:
//   const { ref, onMouseMove, onMouseLeave } = useMagneticButton();
//   <button ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
//     Click Me
//   </button>
// ═══════════════════════════════════════════════════════════════════

import { useRef, useCallback } from "react";

export function useMagneticButton(strength = 0.25) {
  const ref = useRef(null);

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el || !window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Apply a subtle translation proportional to cursor offset
      el.style.transform = `translate(${Math.max(-4, Math.min(4, x * strength))}px, ${Math.max(-3, Math.min(3, y * strength))}px)`;
      el.style.transition = "transform 0.1s ease-out";
    },
    [strength]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    // Spring back to center smoothly
    el.style.transform = "translate(0, 0)";
    el.style.transition = "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)";
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
