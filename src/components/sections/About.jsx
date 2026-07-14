// ═══════════════════════════════════════════════════════════════════
// src/components/sections/About.jsx
//
// Story-driven About section with narrative paragraphs and
// stat cards showing key milestones at a glance.
//
// Layout: text on the left, stat cards on the right (desktop).
//         Stacks vertically on mobile.
// ═══════════════════════════════════════════════════════════════════

import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import { Code2, Briefcase, GraduationCap } from "lucide-react";

// Quick stats — recruiters scan these first
const stats = [
  { icon: GraduationCap, value: "BS SE",    label: "Software Engineering" },
  { icon: Briefcase,     value: "1+",       label: "Internship Completed" },
  { icon: Code2,         value: "6+",       label: "Projects" },
];

// Framer Motion variants
const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-5 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeLeft}>
            <SectionLabel label="About Me" heading="My Story" />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* ── Narrative Text ──────────────────────────────────── */}
          <motion.div
            className="lg:col-span-3 space-y-5 text-[var(--fg-muted)] leading-relaxed"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p variants={fadeLeft}>
              I'm{" "}
              <strong className="text-[var(--fg)] font-semibold">AsadUllah</strong>,
              a BS Software Engineering student with a deep focus on
              frontend development. My journey started with curiosity about
              how websites work — and quickly turned into a passion for
              building them from scratch.
            </motion.p>

            <motion.p variants={fadeLeft}>
              During my internship at{" "}
              <strong className="text-[var(--fg)] font-semibold">DevelopersHub.co</strong>,
              I got hands-on experience shipping production React code,
              translating Figma designs into pixel-perfect interfaces, and
              working in a professional development workflow. That experience
              taught me the difference between writing code and building products.
            </motion.p>

            <motion.p variants={fadeLeft}>
              Today, I specialize in{" "}
              <span className="text-[var(--accent-text)] font-medium">React</span>,{" "}
              <span className="text-[var(--accent-text)] font-medium">Next.js</span>, and{" "}
              <span className="text-[var(--accent-text)] font-medium">Tailwind CSS</span>{" "}
              — and I'm actively exploring AI/ML and Django to grow into a
              full-stack engineer. My goal is to build software that feels
              effortless to use and is built on solid engineering principles.
            </motion.p>

            <motion.p variants={fadeLeft} className="text-sm text-[var(--fg-muted)]/70 italic">
              Currently looking for frontend developer roles where I can contribute to a product team and keep growing.
            </motion.p>
          </motion.div>

          {/* ── Stat Cards ──────────────────────────────────────── */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeRight}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="
                  flex items-center gap-4 p-5
                  bg-[var(--card)] rounded-xl border border-[var(--border)]
                  hover:border-[var(--accent)]/40
                  transition-colors duration-200
                "
              >
                <div className="w-11 h-11 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                  <stat.icon size={20} className="text-[var(--accent)]" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-[var(--fg)] leading-none">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--fg-muted)] mt-0.5">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
