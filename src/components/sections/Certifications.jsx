import AmbientLayer from "../ui/AmbientLayer";
import { useState, useCallback } from "react";
import SectionLabel from "../ui/SectionLabel";
import MotionStream from "../ui/MotionStream";
import CertificateCard from "../ui/CertificateCard";
import Modal from "../ui/Modal";
import { certificates } from "../../data/certificates";

export default function Certifications() {

  const [selectedCert, setSelectedCert] = useState(null);
  const closeModal = useCallback(() => setSelectedCert(null), []);

  return <section id="certifications" className="py-24 px-5 bg-[var(--bg)]">
      <AmbientLayer variant="certifications" />
    <div className="max-w-6xl mx-auto">
      <SectionLabel label="Continuous Learning" heading="Certifications" />
      <MotionStream label="Credential stream" speed={28}>
        {certificates.map((cert,index) => <CertificateCard key={cert.id} cert={cert} index={index} stream onView={setSelectedCert} />)}
      </MotionStream>
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
              {modalImageUrl && <div className="w-full bg-[var(--bg-subtle)] rounded-lg border border-[var(--border)] overflow-hidden flex items-center justify-center p-1.5 md:p-3">
                <img
                  src={modalImageUrl}
                  alt={`${selectedCert.title} certificate`}
                  className="max-h-[42vh] md:max-h-[48vh] w-auto object-contain rounded-md"
                  onError={(e) => {
                    e.target.parentElement.style.display = "none";
                  }}
                />
              </div>}

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
              {modalPdfUrl && <a
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
              </a>}
            </div>
          );
        })()}
      </Modal>

  </section>;
}
