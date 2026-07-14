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
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      {/* Eyebrow label */}
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent-text)] mb-3">
        {label}
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
