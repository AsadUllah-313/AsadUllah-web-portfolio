// ═══════════════════════════════════════════════════════════════════
// src/components/ui/ScrollProgress.jsx
//
// A 2px lime bar fixed at the very top of the viewport.
// Width grows from 0% to 100% as the user scrolls down the page.
// ═══════════════════════════════════════════════════════════════════

import { motion as Motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <Motion.div
      id="scroll-progress"
      style={{ scaleX: scrollYProgress, transformOrigin: "left", width: "100%" }}
      aria-hidden="true"
    />
  );
}
