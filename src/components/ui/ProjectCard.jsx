import { motion as Motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const cardVariants = {
  initial: { opacity: 0, y: 18 },
  visible: (index) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
  hover: { y: -4, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
};
const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.035, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProjectCard({ project, index, stream = false }) {
  return (
    <Motion.article
      data-motion=""
      data-featured={index < 2 || undefined}
      custom={index}
      initial={stream ? false : "initial"}
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "0px 0px 40px 0px", amount: 0.12 }}
      variants={cardVariants}
      className="project-card group relative flex flex-col bg-[var(--card)] rounded-2xl overflow-hidden border border-[var(--border)] transition-colors duration-300"
    >
      <div className="relative overflow-hidden aspect-video bg-[var(--bg-subtle)]">
        <span className="project-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        {project.image && (
          <Motion.img data-motion=""
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            variants={imageVariants}
            onError={(event) => {
              event.target.style.display = "none";
              event.target.nextSibling.style.display = "flex";
            }}
          />
        )}
        <div
          className="w-full h-full items-center justify-center bg-gradient-to-br from-[var(--bg-subtle)] to-[var(--border)]"
          style={{ display: project.image ? "none" : "flex" }}
          aria-hidden="true"
        >
          <span className="font-display text-4xl font-bold text-[var(--border)] select-none">{project.name.slice(0, 2).toUpperCase()}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-lg font-bold text-[var(--fg)] group-hover:text-[var(--accent-text)] transition-colors duration-200">{project.name}</h3>
          <ArrowUpRight size={18} aria-hidden="true" className="text-[var(--fg-muted)] flex-shrink-0 mt-0.5" />
        </div>
        {stream ? <details className="stream-description"><summary>Project details</summary><p>{project.description}</p></details> : <p className="text-[var(--fg-muted)] text-sm leading-relaxed mb-4 flex-1">{project.description}</p>}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map(tech => (
            <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-[var(--bg-subtle)] text-[var(--fg-muted)] border border-[var(--border)] inline-block">{tech}</span>
          ))}
        </div>
        {(project.githubUrl || project.liveUrl) && (
          <div className="project-actions">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repo for ${project.name}`} className="project-action">
                <FaGithub size={14} aria-hidden="true" /> Code
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live demo for ${project.name}`} className="project-action">
                <ExternalLink size={14} aria-hidden="true" /> Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </Motion.article>
  );
}
