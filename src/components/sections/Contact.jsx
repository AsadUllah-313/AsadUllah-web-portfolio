// ═══════════════════════════════════════════════════════════════════
// src/components/sections/Contact.jsx
//
// Contact section — simple direct CTAs (no form/backend needed).
// Left side: availability message + social links.
// Right side: prominent "Email Me", LinkedIn, and GitHub buttons.
// ═══════════════════════════════════════════════════════════════════

import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";
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
    <section id="contact" className="py-24 px-5 bg-[var(--bg-subtle)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel label="Get In Touch" heading="Let's Work Together" center />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
        >
          {/* ── Left Column: Message ─────────────────────────── */}
          <motion.div variants={fadeUp}>
            <div className="p-6 rounded-xl bg-[var(--card)] border border-[var(--border)]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-green-500">
                  Available for opportunities
                </span>
              </div>

              <p className="text-[var(--fg-muted)] leading-relaxed mb-6">
                I'm currently looking for{" "}
                <strong className="text-[var(--fg)]">frontend developer roles</strong>{" "}
                and open to freelance projects. Whether you have a role, a project idea,
                or just want to connect — I'd love to hear from you.
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
          </motion.div>

          {/* ── Right Column: CTA Buttons ────────────────────── */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4 justify-center">
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
