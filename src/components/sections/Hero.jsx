// ═══════════════════════════════════════════════════════════════════
// src/components/sections/Hero.jsx
//
// Hero section — the first thing a recruiter sees.
// Features:
//   - Text scramble "decode" effect on the name (runs once)
//   - Rotating role text via react-simple-typewriter
//   - Staggered word-by-word entrance animation (Framer Motion)
//   - "View Resume" (primary) + "Contact Me" (outline) CTAs
//   - Social icons row
//   - Subtle noise texture overlay
//   - Scroll indicator at bottom
// ═══════════════════════════════════════════════════════════════════

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../ui/Button";

// ── Text Scramble Effect ────────────────────────────────────────
// Randomly shuffles characters and gradually reveals the real text.
// Used once on the hero name for a "coder personality" touch.
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

function useTextScramble(finalText, duration = 1200, delay = 300) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let frame;
    const start = Date.now() + delay;
    const len = finalText.length;

    const tick = () => {
      const now = Date.now();
      if (now < start) {
        // Still in delay period — show random chars at full length
        setDisplay(
          Array.from({ length: len }, () =>
            CHARS[Math.floor(Math.random() * CHARS.length)]
          ).join("")
        );
        frame = requestAnimationFrame(tick);
        return;
      }

      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const revealed = Math.floor(progress * len);

      const result = Array.from({ length: len }, (_, i) => {
        if (i < revealed) return finalText[i];
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join("");

      setDisplay(result);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(finalText);
        setDone(true);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [finalText, duration, delay]);

  return { display, done };
}

// ── Framer Motion Variants ──────────────────────────────────────
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const { display: nameText, done: scrambleDone } = useTextScramble("AsadUllah", 1000, 400);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-5"
    >
      {/* ── Background Layers ────────────────────────────────── */}
      {/* Warm ambient blob — amber in light mode, faint lime in dark */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none blur-[120px]"
        style={{ background: "var(--hero-glow)", transform: "translate(30%, -20%)" }}
        aria-hidden="true"
      />
      {/* Secondary subtle lime glow (both modes) */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none blur-[100px]"
        style={{ background: "rgba(198,241,53,0.04)", transform: "translate(-25%, 20%)" }}
        aria-hidden="true"
      />
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise pointer-events-none" />

      {/* ── Main Content ─────────────────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {/* Eyebrow label */}
        <motion.p
          variants={fadeUp}
          className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--fg-muted)] mb-6"
        >
          Frontend Developer &bull; React Specialist
        </motion.p>

        {/* Name with text scramble */}
        <motion.h1
          variants={fadeUp}
          className="font-display font-bold text-[var(--fg)] leading-[1.1] mb-4"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
        >
          {/* Show scramble text during animation, real text after */}
          <span className={scrambleDone ? "" : "font-mono"}>
            {nameText}
          </span>
        </motion.h1>

        {/* Rotating role text — uses accent-text for WCAG readability in light mode */}
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-[var(--accent-text)] font-display font-semibold mb-6 h-8"
        >
          <Typewriter
            words={[
              "Frontend Developer",
              "React Specialist",
              "UI Engineer",
              "Aspiring AI Engineer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </motion.p>

        {/* Value proposition */}
        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg text-[var(--fg-muted)] max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I build modern, performant web experiences that turn visitors into users.
          Specializing in React, Next.js & Tailwind CSS.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <Button
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            magnetic
          >
            View Resume
          </Button>
          <Button href="#contact" variant="outline" size="lg" magnetic>
            Contact Me
          </Button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: FaGithub, href: "https://github.com/AsadUllah-313", label: "GitHub" },
            // TODO: Replace with your real LinkedIn URL
            { icon: FaLinkedin, href: "https://linkedin.com/in/asad-ullah-410938367", label: "LinkedIn" },
            { icon: Mail, href: "mailto:engrasadqurashi@gmail.com", label: "Email" },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="
                w-10 h-10 rounded-full flex items-center justify-center
                border border-[var(--border)] text-[var(--fg-muted)]
                hover:text-[var(--accent)] hover:border-[var(--accent)]
                transition-colors duration-200
              "
            >
              <s.icon size={17} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-2 text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
