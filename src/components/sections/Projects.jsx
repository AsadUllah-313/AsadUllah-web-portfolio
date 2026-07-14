// ═══════════════════════════════════════════════════════════════════
// src/components/sections/Projects.jsx
//
// Projects section with an asymmetric card grid.
// Reads project data from: src/data/projects.js
//
// Layout:
//   - First two projects: full-width or 2-column on desktop
//   - Remaining: 2-column grid for visual variety
//   - "View All on GitHub" link at the bottom
// ═══════════════════════════════════════════════════════════════════

import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-5 bg-[var(--bg-subtle)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel label="Recent Work" heading="Featured Projects" center />
        </motion.div>

        {/* ── Asymmetric Grid ──────────────────────────────────── */}
        {/* First row: one card spanning wider for visual hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {projects.slice(0, 2).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Remaining projects: 3-column for asymmetry on large screens */}
        {projects.length > 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(2).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + 2} />
            ))}
          </div>
        )}

        {/* ── View All Link ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/AsadUllah-313"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              text-sm font-medium text-[var(--fg-muted)]
              hover:text-[var(--accent)] transition-colors duration-200
              group
            "
          >
            View all projects on GitHub
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
