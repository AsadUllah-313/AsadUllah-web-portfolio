// ═══════════════════════════════════════════════════════════════════
// src/hooks/useTheme.js
//
// Custom hook to manage dark/light theme toggling.
// - Reads saved preference from localStorage on first load
// - Applies/removes 'dark' class on <html> element
// - Persists choice in localStorage for next visit
//
// The initial theme flash is prevented by the inline script in
// index.html that runs before React loads.
// ═══════════════════════════════════════════════════════════════════

import { useState, useEffect, useCallback } from "react";

export function useTheme() {
  // Initialize state from what the inline script already applied to <html>
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  // Sync isDark state → <html> class + localStorage whenever it changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Toggle function — call this from any component
  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return { isDark, toggleTheme };
}
