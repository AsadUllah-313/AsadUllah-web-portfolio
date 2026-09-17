// ═══════════════════════════════════════════════════════════════════
// src/components/ui/SectionLabel.jsx
//
// Reusable eyebrow label + h2 heading combo used at the top of
// every section. Keeps heading styles consistent across the site.
//
// Props:
//   label   — small uppercase label above the heading (e.g. "About Me")
//   heading — main section heading (e.g. "My Story")
//   center  — if true, centers the text (default: false = left-aligned)
// ═══════════════════════════════════════════════════════════════════

export default function SectionLabel({ label, heading, center = false }) {
  return (
    <div className={`section-heading mb-14 ${center ? "text-center" : ""}`}>
      {/* Eyebrow label */}
      <p className="section-eyebrow text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent-text)] mb-3">
        <span className="chapter-number" aria-hidden="true">{({"About Me":"01", "Technical Expertise":"02", "Work Experience":"03", "Recent Work":"04", "Continuous Learning":"05", "Get In Touch":"06"})[label]} / </span>{label}
      </p>

      {/* Section heading */}
      <h2
        className="
          font-display text-3xl md:text-4xl lg:text-5xl font-bold
          text-[var(--fg)] leading-tight
        "
      >
        {heading}
      </h2>
    </div>
  );
}
