// ═══════════════════════════════════════════════════════════════════
// src/components/ui/ThemeToggle.jsx
//
// Sun/Moon toggle button for switching dark/light mode.
// Receives isDark and toggleTheme props from the parent (Navbar).
// ═══════════════════════════════════════════════════════════════════

import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        relative w-9 h-9 rounded-full flex items-center justify-center
        border border-[var(--border)]
        bg-[var(--card)] hover:bg-[var(--card-hover)]
        text-[var(--fg-muted)] hover:text-[var(--fg)]
        transition-all duration-200
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]
      "
    >
      {/* Sun icon — shown in dark mode (click to switch to light) */}
      <span
        className={`absolute transition-all duration-300 ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"
        }`}
      >
        <Sun size={16} strokeWidth={2} />
      </span>

      {/* Moon icon — shown in light mode (click to switch to dark) */}
      <span
        className={`absolute transition-all duration-300 ${
          isDark ? "opacity-0 -rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
        }`}
      >
        <Moon size={16} strokeWidth={2} />
      </span>
    </button>
  );
}
