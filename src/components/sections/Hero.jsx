import AmbientLayer from "../ui/AmbientLayer";
// ═══════════════════════════════════════════════════════════════════
// src/components/sections/Hero.jsx
//
// Hero section — the first thing a recruiter sees.
// Staged entrance with a restrained architecture field and crossfading roles.

import { motion as Motion } from "framer-motion";
import InteractiveEnvironment from "../ui/InteractiveEnvironment";
import SystemMap from "../ui/SystemMap";
import RoleSequence from "../ui/RoleSequence";
import SystemField from "../ui/SystemField";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../ui/Button";

// ── Framer Motion Variants ──────────────────────────────────────
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
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

  return (
    <section
      id="home"
      className="hero-section journey-hero relative px-5"
    >
      <AmbientLayer variant="hero" />
      <SystemField />
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

      <div className="hero-stage">
      {/* ── Main Content ─────────────────────────────────────── */}
      <Motion.div data-motion=""
        variants={container}
        initial="hidden"
        animate="show"
        className="hero-identity relative z-10"
      >
        {/* Eyebrow label */}
        <Motion.p data-motion=""
          variants={fadeUp}
          className="text-sm font-medium tracking-[0.2em] uppercase text-[var(--fg-muted)] mb-6"
        >
          Full Stack AI Engineer
        </Motion.p>

        {/* Primary identity enters before supporting details */}
        <Motion.h1 data-motion=""
          variants={fadeUp}
          className="font-display font-bold text-[var(--fg)] leading-[1.1] mb-4"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
        >
          AsadUllah
        </Motion.h1>

        {/* Rotating role text — uses accent-text for WCAG readability in light mode */}
        <Motion.p data-motion=""
          variants={fadeUp}
          className="text-lg md:text-xl text-[var(--accent-text)] font-display font-semibold mb-6 min-h-8"
        >
          <RoleSequence />
        </Motion.p>

        {/* Value proposition */}
        <Motion.p data-motion=""
          variants={fadeUp}
          className="text-base md:text-lg text-[var(--fg-muted)] max-w-xl mb-10 leading-relaxed"
        >
          I connect interfaces, data, and AI to build software for real workflows.
          React, Next.js, Python, Django, and Node.js — from REST APIs to usable products.
        </Motion.p>

        {/* CTA Buttons */}
        <Motion.div data-motion=""
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center hero-align gap-3 mb-12"
        >
          <Button
            href="/certificates/AsadUllah_Resume.pdf"
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
        </Motion.div>

        {/* Social Icons */}
        <Motion.div data-motion=""
          variants={fadeUp}
          className="flex items-center hero-align gap-4"
        >
          {[
            { icon: FaGithub, href: "https://github.com/AsadUllah-313", label: "GitHub" },
            // TODO: Replace with your real LinkedIn URL
            { icon: FaLinkedin, href: "https://linkedin.com/in/asad-ullah-410938367", label: "LinkedIn" },
            { icon: Mail, href: "mailto:engrasadqurashi@gmail.com", label: "Email" },
          ].map((s) => (
            <Motion.a data-motion=""
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="
                w-10 h-10 rounded-full flex items-center justify-center
                border border-[var(--border)] text-[var(--fg-muted)]
                hover:text-[var(--accent)] hover:border-[var(--accent)]
                transition-colors duration-200
              "
            >
              <s.icon size={17} />
            </Motion.a>
          ))}
        </Motion.div>
      </Motion.div>

      <div className="hero-system"><InteractiveEnvironment><SystemMap /></InteractiveEnvironment><a href="#skills" className="system-explore">Explore the engineering layers <span aria-hidden="true">↗</span></a></div>
      </div>
      {/* ── Scroll Indicator ─────────────────────────────────── */}
      <Motion.div data-motion=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="hero-scroll"
      >
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-2 text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <Motion.div data-motion="" className="scroll-cue">
            <ArrowDown size={16} />
          </Motion.div>
        </a>
      </Motion.div>
    </section>
  );
}
