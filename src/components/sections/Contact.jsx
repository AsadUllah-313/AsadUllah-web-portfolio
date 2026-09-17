import AmbientLayer from "../ui/AmbientLayer";
// ═══════════════════════════════════════════════════════════════════
// src/components/sections/Contact.jsx
//
// Contact section — simple direct CTAs (no form/backend needed).
// Left side: availability message + social links.
// Right side: prominent "Email Me", LinkedIn, and GitHub buttons.
// ═══════════════════════════════════════════════════════════════════

import { useState } from "react";
import { motion as Motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";
import SystemField from "../ui/SystemField";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EMAIL = "engrasadqurashi@gmail.com";

// Framer variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  // Copy email to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="connection-finale py-24 px-5 bg-[var(--bg-subtle)]">
      <AmbientLayer variant="contact" />
      <SystemField />
      <svg className="connection-paths" viewBox="0 0 1000 240" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0 H180 L420 170 H500 M1000 0 H820 L580 170 H500 M250 0 V80 L500 170 M750 0 V80 L500 170 M500 170 V240" /><circle cx="500" cy="170" r="5" /></svg>
      <div className="relative z-10 max-w-5xl mx-auto">
        <Motion.div data-motion=""
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel label="Get In Touch" heading="Let's Work Together" center />
        </Motion.div>

        <Motion.div data-motion=""
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          className="connection-content"
        >
          {/* ── Left Column: Message ─────────────────────────── */}
          <Motion.div data-motion="" variants={fadeUp}>
            <div className="contact-card p-6 rounded-xl bg-[var(--card)] border border-[var(--border)]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-green-500">
                  Available for opportunities
                </span>
              </div>

              <p className="text-[var(--fg-muted)] leading-relaxed mb-6">
                I'm open to{" "}
                <strong className="text-[var(--fg)]">full-stack software engineering opportunities</strong>{" "}
                and freelance product development. Let's discuss your web application,
                AI-powered workflow, or the software your team needs to build.
              </p>

              {/* Email with copy button */}
              <div
                className="
                  flex items-center justify-between gap-3 p-3 rounded-lg
                  bg-[var(--bg-subtle)] border border-[var(--border)]
                "
              >
                <span className="text-sm text-[var(--fg)] font-mono truncate">
                  {EMAIL}
                </span>
                <button
                  onClick={handleCopy}
                  aria-label={copied ? "Email copied" : "Copy email address"}
                  aria-live="polite"
                  className="
                    flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium
                    bg-[var(--card)] border border-[var(--border)]
                    text-[var(--fg-muted)] hover:text-[var(--fg)]
                    transition-colors duration-150 flex-shrink-0
                  "
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-green-500" />
                      <span className="text-green-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </Motion.div>

          {/* ── Right Column: CTA Buttons ────────────────────── */}
          <Motion.div data-motion="" variants={fadeUp} className="flex flex-col gap-4 justify-center">
            {/* Email Me — primary CTA */}
            <Button
              href={`mailto:${EMAIL}?subject=Project%20Inquiry&body=Hi%20AsadUllah,%20I'd%20like%20to%20discuss...`}
              variant="primary"
              size="lg"
              magnetic
              className="w-full"
            >
              <Mail size={18} />
              Email Me
              <ArrowUpRight size={16} />
            </Button>

            {/* LinkedIn */}
            <Button
              href="https://linkedin.com/in/asad-ullah-410938367"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              magnetic
              className="w-full"
            >
              <FaLinkedin size={18} />
              Connect on LinkedIn
              <ArrowUpRight size={16} />
            </Button>

            {/* GitHub */}
            <Button
              href="https://github.com/AsadUllah-313"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              magnetic
              className="w-full"
            >
              <FaGithub size={18} />
              View GitHub Profile
              <ArrowUpRight size={16} />
            </Button>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
}
