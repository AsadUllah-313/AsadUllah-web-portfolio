// ═══════════════════════════════════════════════════════════════════
// src/components/ui/Button.jsx
//
// Reusable button component with magnetic cursor effect.
//
// Props:
//   variant  — "primary" | "outline" | "ghost"
//   size     — "sm" | "md" | "lg"
//   href     — renders as <a> tag if provided
//   magnetic — enables magnetic hover effect (default: false)
//   children — button content
//   ...rest  — any other HTML button/anchor props
// ═══════════════════════════════════════════════════════════════════

import { useMagneticButton } from "../../hooks/useMagneticButton";

const variants = {
  primary: `
    text-[var(--accent-fg)]
    hover:brightness-110 hover:shadow-[0_8px_28px_rgba(198,241,53,0.28)]
    font-semibold
  `,
  outline: `
    border border-[var(--border)] text-[var(--fg)]
    hover:border-[var(--accent)] hover:text-[var(--accent-text)]
    hover:bg-[var(--accent)]/5
    font-medium
  `,
  ghost: `
    text-[var(--fg-muted)] hover:text-[var(--fg)]
    hover:bg-[var(--card-hover)]
    font-medium
  `,
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  magnetic = false,
  className = "",
  children,
  ...rest
}) {
  const { ref, onMouseMove, onMouseLeave } = useMagneticButton(0.2);

  const base = `
    inline-flex items-center justify-center gap-2
    font-display transition-all duration-200
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]
    ${variants[variant]} ${sizes[size]} ${className}
  `;

  const magneticProps = magnetic
    ? { ref, onMouseMove, onMouseLeave }
    : {};

  // Render as <a> if href is provided, otherwise <button>
  const isPrimary = variant === "primary";
  const gradientStyle = isPrimary ? { background: "var(--btn-gradient)" } : undefined;

  if (href) {
    return (
      <a href={href} className={base} style={gradientStyle} {...magneticProps} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={base} style={gradientStyle} {...magneticProps} {...rest}>
      {children}
    </button>
  );
}
