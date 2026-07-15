// ═══════════════════════════════════════════════════════════════════
// src/components/layout/Navbar.jsx
//
// Sticky navbar with glassmorphism blur effect on scroll.
// Contains: AU logo, nav links, theme toggle, Resume CTA button.
// Mobile: hamburger menu with slide-in panel.
// ═══════════════════════════════════════════════════════════════════

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

// Navigation links — update these if you add/remove sections
const navLinks = [
  { label: "About",          href: "#about" },
  { label: "Skills",         href: "#skills" },
  { label: "Experience",     href: "#experience" },
  { label: "Projects",       href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact",        href: "#contact" },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // ── Detect scroll to toggle glassmorphism background ──────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Lock body scroll when mobile menu is open ─────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled
          ? "bg-[var(--navbar-bg)] backdrop-blur-xl border-b border-[var(--border)] shadow-sm"
          : "bg-transparent border-b border-transparent"
        }
      `}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-5">

        {/* ── Logo / Initials ──────────────────────────────────── */}
        <a
          href="#home"
          className="font-display text-xl font-bold text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
          aria-label="Go to top"
        >
          <span className="text-[var(--accent)]">&lt;</span>
          AU
          <span className="text-[var(--accent)]"> /&gt;</span>
        </a>

        {/* ── Desktop Nav Links ────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="
                  px-3 py-2 text-sm font-medium rounded-lg
                  text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--card-hover)]
                  transition-colors duration-150
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Right Side: Theme Toggle + Resume Button ─────────── */}
        <div className="flex items-center gap-3">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

          {/* Resume CTA — prominent lime button */}
          <a
            href="/certificates/AsadUllah_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden md:inline-flex items-center gap-1.5
              px-4 py-2 text-sm font-semibold font-display rounded-lg
              bg-[var(--accent)] text-[var(--accent-fg)]
              hover:brightness-110 hover:shadow-lg hover:shadow-[var(--accent)]/20
              transition-all duration-200
            "
          >
            <FileText size={14} />
            Resume
          </a>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[var(--fg)] hover:bg-[var(--card-hover)] transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Overlay ────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="
                fixed top-0 right-0 bottom-0 w-72 z-50
                bg-[var(--bg)] border-l border-[var(--border)]
                flex flex-col p-6
              "
            >
              {/* Close button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--card-hover)] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile links */}
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="
                        block px-4 py-3 rounded-lg
                        text-base font-medium text-[var(--fg)]
                        hover:bg-[var(--card-hover)] hover:text-[var(--accent)]
                        transition-colors duration-150
                      "
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile resume button */}
              <a
                href="/certificates/AsadUllah_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-6 flex items-center justify-center gap-2
                  px-4 py-3 rounded-lg text-sm font-semibold font-display
                  bg-[var(--accent)] text-[var(--accent-fg)]
                  hover:brightness-110 transition-all duration-200
                "
                onClick={() => setMobileOpen(false)}
              >
                <FileText size={16} />
                View Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
