// ═══════════════════════════════════════════════════════════════════
// src/components/sections/Experience.jsx
//
// Vertical timeline for work experience / internships.
// Reads data from: src/data/experience.js
//
// Each entry renders as a card alongside a vertical accent-colored
// connector line with a pulsing dot.
// ═══════════════════════════════════════════════════════════════════

import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import { experience } from "../../data/experience";
import { Briefcase, ExternalLink } from "lucide-react";

// Framer Motion variants
const lineGrow = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const cardFade = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-5 bg-[var(--bg)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel label="Work Experience" heading="Where I've Worked" />
        </motion.div>

        {/* ── Timeline ─────────────────────────────────────────── */}
        <div className="relative">
          {/* Vertical connector line */}
          <motion.div
            variants={lineGrow}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              absolute left-5 md:left-8 top-0 bottom-0 w-px
              bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent
              origin-top
            "
          />

          {/* Timeline entries */}
          <div className="space-y-10">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-14 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-3 md:left-6 top-6 w-5 h-5 rounded-full bg-[var(--bg)] border-2 border-[var(--accent)] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                </div>

                {/* Card */}
                <div
                  className="
                    p-6 rounded-xl
                    bg-[var(--card)] border border-[var(--border)]
                    hover:border-[var(--accent)]/30
                    transition-colors duration-200
                  "
                >
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display text-lg font-bold text-[var(--fg)]">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[var(--accent)] hover:underline flex items-center gap-1"
                          >
                            {exp.company}
                            <ExternalLink size={12} />
                          </a>
                        ) : (
                          <span className="text-sm text-[var(--accent)]">{exp.company}</span>
                        )}
                        {exp.location && (
                          <span className="text-xs text-[var(--fg-muted)]">• {exp.location}</span>
                        )}
                      </div>
                    </div>

                    {/* Period + type badge */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                        {exp.type}
                      </span>
                      <span className="text-sm text-[var(--fg-muted)]">{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  {exp.description && (
                    <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-4">
                      {exp.description}
                    </p>
                  )}

                  {/* Impact bullets */}
                  {exp.bullets && exp.bullets.length > 0 && (
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-[var(--fg-muted)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
