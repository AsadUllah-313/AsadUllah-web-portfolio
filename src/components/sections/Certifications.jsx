// ═══════════════════════════════════════════════════════════════════
// src/components/sections/Certifications.jsx
//
// Horizontally scrollable certificate gallery.
// Each certificate has View (opens modal) and Download buttons.
// Reads data from: src/data/certificates.js
// ═══════════════════════════════════════════════════════════════════

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import CertificateCard from "../ui/CertificateCard";
import Modal from "../ui/Modal";
import { certificates } from "../../data/certificates";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Certifications() {
  // ── Modal state ───────────────────────────────────────────────
  const [selectedCert, setSelectedCert] = useState(null);
  const scrollRef = useRef(null);

  const openModal = (cert) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  // ── Scroll gallery left / right ───────────────────────────────
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = 320; // card width + gap
    container.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="certifications" className="py-24 px-5 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel label="Continuous Learning" heading="Certifications" />
          </motion.div>

          {/* Scroll arrows (desktop) */}
          <div className="hidden sm:flex items-center gap-2 mb-14">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll certificates left"
              className="
                w-9 h-9 rounded-full flex items-center justify-center
                border border-[var(--border)] text-[var(--fg-muted)]
                hover:border-[var(--accent)] hover:text-[var(--accent)]
                transition-colors duration-150
              "
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll certificates right"
              className="
                w-9 h-9 rounded-full flex items-center justify-center
                border border-[var(--border)] text-[var(--fg-muted)]
                hover:border-[var(--accent)] hover:text-[var(--accent)]
                transition-colors duration-150
              "
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ── Horizontally Scrollable Gallery ────────────────── */}
        <div
          ref={scrollRef}
          className="
            flex gap-5 overflow-x-auto pb-4
            snap-x snap-mandatory
            scrollbar-hide
          "
          style={{
            scrollbarWidth: "none",       /* Firefox */
            msOverflowStyle: "none",      /* IE/Edge */
          }}
        >
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} onView={openModal} />
          ))}
        </div>

        {/* Hint for mobile users */}
        <p className="sm:hidden text-center text-xs text-[var(--fg-muted)] mt-3">
          ← Swipe to see more →
        </p>
      </div>

      {/* ── Certificate Preview Modal ────────────────────────── */}
      <Modal
        isOpen={!!selectedCert}
        onClose={closeModal}
        title={selectedCert?.title}
      >
        {selectedCert && (() => {
          const getCleanUrl = (file) => {
            if (!file) return "";
            let clean = file.replace(/^public\//, "");
            if (!clean.startsWith("/")) {
              clean = "/" + clean;
            }
            if (!clean.startsWith("/certificates/")) {
              clean = "/certificates" + clean;
            }
            return clean;
          };

          const modalImageUrl = getCleanUrl(selectedCert.imageFile);
          const modalPdfUrl   = getCleanUrl(selectedCert.pdfFile);

          return (
            <div className="space-y-4 flex flex-col">
              {/* Full certificate image container with restricted max height */}
              <div className="w-full bg-[var(--bg-subtle)] rounded-lg border border-[var(--border)] overflow-hidden flex items-center justify-center p-1.5 md:p-3">
                <img
                  src={modalImageUrl}
                  alt={`${selectedCert.title} certificate`}
                  className="max-h-[42vh] md:max-h-[48vh] w-auto object-contain rounded-md"
                  onError={(e) => {
                    e.target.parentElement.style.display = "none";
                  }}
                />
              </div>

              {/* Certificate info */}
              <div>
                <p className="text-sm text-[var(--fg-muted)]">
                  <strong className="text-[var(--fg)]">Issuer:</strong> {selectedCert.issuer}
                </p>
                <p className="text-sm text-[var(--fg-muted)]">
                  <strong className="text-[var(--fg)]">Date:</strong> {selectedCert.date}
                </p>
                {selectedCert.description && (
                  <p className="text-sm text-[var(--fg-muted)] mt-2">
                    {selectedCert.description}
                  </p>
                )}
              </div>

              {/* Download button inside modal */}
              <a
                href={modalPdfUrl}
                download={selectedCert.pdfFile}
                className="
                  inline-flex items-center gap-2
                  px-5 py-2.5 rounded-lg text-sm font-semibold
                  bg-[var(--accent)] text-[var(--accent-fg)]
                  hover:brightness-110 transition-all duration-200
                "
              >
                Download Certificate
              </a>
            </div>
          );
        })()}
      </Modal>
    </section>
  );
}
