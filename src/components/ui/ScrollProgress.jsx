// ═══════════════════════════════════════════════════════════════════
// src/components/ui/ScrollProgress.jsx
//
// A 2px lime bar fixed at the very top of the viewport.
// Width grows from 0% to 100% as the user scrolls down the page.
// ═══════════════════════════════════════════════════════════════════

import { useScrollProgress } from "../../hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      id="scroll-progress"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}
