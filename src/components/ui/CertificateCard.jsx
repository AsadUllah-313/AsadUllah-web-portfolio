// ═══════════════════════════════════════════════════════════════════
// src/components/ui/CertificateCard.jsx
//
// Card for each certificate in the Certifications section.
// Shows: title, issuer, date, and View / Download buttons.
//
// Props:
//   cert      — certificate object from src/data/certificates.js
//   onView    — function called when "View" button is clicked
//                (receives the cert object)
// ═══════════════════════════════════════════════════════════════════

import { motion } from "framer-motion";
import { Eye, Download, Award } from "lucide-react";

export default function CertificateCard({ cert, onView }) {
  // Robust path normalization helper
  const getCleanUrl = (file) => {
    if (!file) return "";
    let clean = file.replace(/^public\//, ""); // strip "public/" if present
    if (!clean.startsWith("/")) {
      clean = "/" + clean;
    }
    if (!clean.startsWith("/certificates/")) {
      clean = "/certificates" + clean;
    }
    return clean;
  };

  const imageUrl = getCleanUrl(cert.imageFile);
  const pdfUrl   = getCleanUrl(cert.pdfFile);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="
        flex-shrink-0 w-72 sm:w-80
        bg-[var(--card)] rounded-2xl overflow-hidden
        border border-[var(--border)] hover:border-[var(--accent)]/40
        transition-colors duration-300
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]
      "
    >
      {/* ── Certificate Preview Image ───────────────────────────── */}
      <div className="relative aspect-[4/3] bg-[var(--bg-subtle)] overflow-hidden">
        <img
          src={imageUrl}
          alt={`${cert.title} certificate preview`}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if image hasn't been added yet
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        {/* Placeholder shown when image fails to load */}
        <div
          className="w-full h-full hidden items-center justify-center flex-col gap-3 bg-gradient-to-br from-[var(--bg-subtle)] to-[var(--border)]"
          aria-hidden="true"
        >
          <Award size={40} className="text-[var(--accent)]" />
          <span className="text-xs text-[var(--fg-muted)] font-medium text-center px-4">
            Add image to public/certificates/
          </span>
        </div>

        {/* Issuer badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-black/50 backdrop-blur-sm text-white border border-white/10">
            {cert.issuer}
          </span>
        </div>
      </div>

      {/* ── Card Body ────────────────────────────────────────────── */}
      <div className="p-5">
        <p className="text-xs text-[var(--fg-muted)] mb-1">{cert.date}</p>
        <h3 className="font-display text-base font-bold text-[var(--fg)] leading-snug mb-2 line-clamp-2">
          {cert.title}
        </h3>
        {cert.description && (
          <p className="text-xs text-[var(--fg-muted)] leading-relaxed mb-4 line-clamp-2">
            {cert.description}
          </p>
        )}

        {/* ── Action Buttons ────────────────────────────────────── */}
        <div className="flex gap-2">
          {/* View — opens full preview in modal */}
          <button
            onClick={() => onView(cert)}
            className="
              flex-1 flex items-center justify-center gap-1.5
              px-3 py-2 rounded-lg text-sm font-medium
              bg-[var(--bg-subtle)] text-[var(--fg)]
              hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]
              border border-[var(--border)] hover:border-[var(--accent)]
              transition-all duration-200
            "
          >
            <Eye size={14} />
            View
          </button>

          {/* Download — triggers file download */}
          <a
            href={pdfUrl}
            download={cert.pdfFile}
            aria-label={`Download ${cert.title} certificate`}
            className="
              flex-1 flex items-center justify-center gap-1.5
              px-3 py-2 rounded-lg text-sm font-medium
              bg-[var(--bg-subtle)] text-[var(--fg)]
              hover:bg-[var(--fg)] hover:text-[var(--bg)]
              border border-[var(--border)] hover:border-[var(--fg)]
              transition-all duration-200
            "
          >
            <Download size={14} />
            Download
          </a>
        </div>
      </div>
    </motion.div>
  );
}
