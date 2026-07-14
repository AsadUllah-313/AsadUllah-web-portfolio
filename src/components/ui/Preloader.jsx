// ═══════════════════════════════════════════════════════════════════
// src/components/ui/Preloader.jsx
//
// Elegant preloader component for first-impression experience.
// Midnight Editorial themed (always dark background, lime accent).
// Displays animated "AU" initials and a loading line.
// Respects prefers-reduced-motion media settings.
//
// Props:
//   onComplete — function called when loading completes and fade-out finishes
// ═══════════════════════════════════════════════════════════════════

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // ── Check prefers-reduced-motion ─────────────────────────────
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    // ── Preload Logic ────────────────────────────────────────────
    const startTime = Date.now();
    const minDuration = 1000; // 1s minimum display time for premium feel

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / minDuration) * 100, 100);

      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        // Once progress hits 100%, trigger exit animation
        setIsDone(true);
      }
    };

    // Begin progress tracking
    requestAnimationFrame(updateProgress);
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        // Notify parent to remove loader from DOM once exit animation is fully complete
        onComplete();
      }}
    >
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0b]"
        >
          {/* Main Logo Container */}
          <div className="flex flex-col items-center gap-6">
            {/* Pulsing initials */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
              animate={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 1, scale: 1, y: [0, -4, 0] }
              }
              transition={
                prefersReducedMotion
                  ? {}
                  : {
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.4 },
                      y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                    }
              }
              className="font-display text-4xl md:text-5xl font-bold text-[#f5f5f0] tracking-wider select-none"
            >
              <span className="text-[#c6f135]">&lt;</span>
              AU
              <span className="text-[#c6f135]"> /&gt;</span>
            </motion.div>

            {/* Premium Loader Line */}
            <div className="w-24 h-[2px] bg-[#1c1c1f] rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-[#c6f135]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0.1 }
                    : { ease: "linear" }
                }
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
