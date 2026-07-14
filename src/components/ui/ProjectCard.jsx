// ═══════════════════════════════════════════════════════════════════
// src/components/ui/ProjectCard.jsx
//
// Card component for the Projects section.
// Refined with high-end, responsive animations:
//   - Subtle scale-up (1.025x) & shadow lift on hover
//   - Border/glow transition in accent color (rgba(198, 241, 53, 0.4))
//   - Staggered entrance animation for tech stack tags on hover
//   - Slow, elegant image zoom (1.06x) triggered on card hover
//   - Premium "shine sweep" light effect across the card on hover
// ═══════════════════════════════════════════════════════════════════

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// ── Motion Variants ─────────────────────────────────────────────
const cardVariants = {
  initial: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  hover: {
    y: -6,
    scale: 1.025,
    borderColor: "rgba(198, 241, 53, 0.4)",
    boxShadow: "0 0 24px rgba(198, 241, 53, 0.12), var(--shadow-lg)",
    transition: {
      duration: 0.3,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const imageVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.06,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const tagContainerVariants = {
  initial: {},
  hover: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const tagVariants = {
  initial: { opacity: 0.5, y: 4 },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      custom={index}
      initial="initial"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-80px" }}
      variants={cardVariants}
      className="
        group relative flex flex-col
        bg-[var(--card)] rounded-2xl overflow-hidden
        border border-[var(--border)]
        transition-colors duration-300
      "
    >
      {/* ── Shine Sweep Effect (Subtle & Premium) ────────────────── */}
      <div
        className="
          absolute inset-0 w-[200%] h-full
          bg-gradient-to-r from-transparent via-white/10 to-transparent
          -skew-x-20 -translate-x-[150%]
          transition-transform duration-1000 ease-out
          group-hover:translate-x-[100%]
          pointer-events-none z-20
        "
        aria-hidden="true"
      />

      {/* ── Image / Preview Area ─────────────────────────────────── */}
      <div className="relative overflow-hidden aspect-video bg-[var(--bg-subtle)] z-10">
        {project.image ? (
          <motion.img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="w-full h-full object-cover"
            variants={imageVariants}
          />
        ) : (
          /* Placeholder gradient when no image is provided */
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--bg-subtle)] to-[var(--border)]">
            <span className="font-display text-4xl font-bold text-[var(--border)] select-none">
              {project.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        {/* Hover overlay with external links */}
        <motion.div
          className="
            absolute inset-0
            bg-black/65 backdrop-blur-[2px]
            flex items-end justify-start p-5 gap-3
            z-20
          "
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repo for ${project.name}`}
              className="
                flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                bg-white text-black text-sm font-semibold
                hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]
                transition-all duration-150
              "
            >
              <FaGithub size={14} />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${project.name}`}
              className="
                flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                bg-[var(--accent)] text-[var(--accent-fg)] text-sm font-semibold
                hover:brightness-110 transition-all duration-150
              "
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </motion.div>
      </div>

      {/* ── Card Content ─────────────────────────────────────────── */}
      <div className="p-6 flex flex-col flex-1 z-10">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-lg font-bold text-[var(--fg)] group-hover:text-[var(--accent-text)] transition-colors duration-200">
            {project.name}
          </h3>
          {/* External link icon — shown on hover */}
          <ArrowUpRight
            size={18}
            className="text-[var(--fg-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0 mt-0.5"
          />
        </div>

        <p className="text-[var(--fg-muted)] text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* ── Tech Stack Tags (Staggered Animation on hover) ───────── */}
        <motion.div
          variants={tagContainerVariants}
          className="flex flex-wrap gap-1.5"
        >
          {project.stack.map((tech) => (
            <motion.span
              key={tech}
              variants={tagVariants}
              className="
                px-2.5 py-1 text-xs font-medium rounded-md
                bg-[var(--bg-subtle)] text-[var(--fg-muted)]
                border border-[var(--border)]
                inline-block
              "
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.article>
  );
}
