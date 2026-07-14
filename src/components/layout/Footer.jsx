// ═══════════════════════════════════════════════════════════════════
// src/components/layout/Footer.jsx
//
// Clean, minimal footer with social icons, copyright, and credit.
// ═══════════════════════════════════════════════════════════════════

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// ── Social links — update these with your real profile URLs ──────
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/AsadUllah-313",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    // TODO: Replace with your actual LinkedIn profile URL
    href: "https://linkedin.com/in/YOUR-LINKEDIN-SLUG",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:engrasadqurashi@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* ── Logo & tagline ────────────────────────────────── */}
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-bold text-[var(--fg)] mb-1">
              <span className="text-[var(--accent)]">&lt;</span>
              AU
              <span className="text-[var(--accent)]"> /&gt;</span>
            </p>
            <p className="text-sm text-[var(--fg-muted)]">
              Frontend Developer • React & Tailwind CSS
            </p>
          </div>

          {/* ── Social Icons ──────────────────────────────────── */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="
                  w-10 h-10 rounded-full flex items-center justify-center
                  border border-[var(--border)]
                  text-[var(--fg-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]
                  transition-colors duration-200
                "
              >
                <s.icon size={17} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── Divider + Copyright ─────────────────────────────── */}
        <div className="border-t border-[var(--border)] mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-[var(--fg-muted)]">
            © {new Date().getFullYear()} AsadUllah. All rights reserved.
          </p>
          <p className="text-xs text-[var(--fg-muted)]/60">
            Built with React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
