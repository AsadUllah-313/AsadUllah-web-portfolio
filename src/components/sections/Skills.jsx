// ═══════════════════════════════════════════════════════════════════
// src/components/sections/Skills.jsx
//
// Skills section grouped by category with react-icons brand logos.
// Three columns: Frontend | Backend & Tools | Currently Learning.
// No fake percentage bars — uses proficiency badges instead.
//
// Reads skill data from: src/data/skills.js
// ═══════════════════════════════════════════════════════════════════

import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import { skills, levelColors } from "../../data/skills";

// ── Icon Imports ────────────────────────────────────────────────
// We import each icon family from react-icons and build a lookup map.
import {
  FaHtml5, FaCss3Alt, FaReact, FaFigma, FaJava, FaPython, FaGit,
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiPhp, SiMysql, SiNextdotjs,
  SiDjango, SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrain } from "react-icons/tb";
import { MdDevices } from "react-icons/md";

// Map from icon string name (in skills.js) → actual component
const iconMap = {
  FaHtml5, FaCss3Alt, FaReact, FaFigma, FaJava, FaPython, FaGit,
  SiJavascript, SiTailwindcss, SiPhp, SiMysql, SiNextdotjs,
  SiDjango, SiTypescript,
  TbBrandFramerMotion, TbBrain,
  MdDevices,
  // "SiBrain" from skills.js maps to TbBrain as a fallback
  SiBrain: TbBrain,
};

// ── Category metadata ───────────────────────────────────────────
const categories = [
  { key: "frontend", title: "Frontend" },
  { key: "backend",  title: "Backend & Tools" },
  { key: "learning", title: "Currently Learning" },
];

// ── Framer Motion Variants ──────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-5 bg-[var(--bg-subtle)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel label="Technical Expertise" heading="Skills & Technologies" center />
        </motion.div>

        {/* ── Three-Column Grid ───────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {categories.map((cat) => (
            <motion.div
              key={cat.key}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* Category heading */}
              <h3 className="font-display text-lg font-semibold text-[var(--fg)] mb-5 pb-3 border-b border-[var(--border)]">
                {cat.title}
              </h3>

              {/* Skill items */}
              <div className="space-y-2">
                {skills[cat.key]?.map((skill) => {
                  const IconComp = iconMap[skill.icon];
                  const colors = levelColors[skill.level] || levelColors.Learning;

                  return (
                    <motion.div
                      key={skill.name}
                      variants={item}
                      whileHover={{ x: 4, transition: { duration: 0.15 } }}
                      className="
                        flex items-center justify-between gap-3
                        px-4 py-3 rounded-xl
                        bg-[var(--card)] border border-[var(--border)]
                        hover:border-[var(--accent)]/30
                        transition-colors duration-200 cursor-default
                      "
                    >
                      {/* Icon + name */}
                      <div className="flex items-center gap-3">
                        {IconComp && (
                          <IconComp className="text-[var(--accent)] flex-shrink-0" size={20} />
                        )}
                        <span className="text-sm font-medium text-[var(--fg)]">
                          {skill.name}
                        </span>
                      </div>

                      {/* Proficiency badge */}
                      <span
                        className={`
                          text-xs font-medium px-2.5 py-1 rounded-full border
                          ${colors.bg} ${colors.text} ${colors.border}
                        `}
                      >
                        {skill.level}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
