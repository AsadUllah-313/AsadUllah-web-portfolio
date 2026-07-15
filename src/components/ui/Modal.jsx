// ═══════════════════════════════════════════════════════════════════
// src/components/ui/Modal.jsx
//
// Accessible lightbox modal for certificate previews.
//
// Accessibility features:
//   - role="dialog" + aria-modal="true" + aria-labelledby
//   - Focus trap: Tab/Shift+Tab cycle within the modal only
//   - Escape key closes the modal
//   - First focusable element receives focus on open
//   - Returns focus to the trigger element on close
//
// Props:
//   isOpen      — boolean, controls visibility
//   onClose     — function called when modal should close
//   title       — shown in aria-labelledby (accessible name)
//   children    — modal content
// ═══════════════════════════════════════════════════════════════════

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

// Selectors for all naturally focusable elements
const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

export default function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);
  const previouslyFocused = useRef(null);

  // ── Trap focus inside modal when open ──────────────────────────
  useEffect(() => {
    if (!isOpen) return;

    // Remember which element was focused before modal opened
    previouslyFocused.current = document.activeElement;

    // Move focus into the modal
    const firstFocusable = modalRef.current?.querySelectorAll(FOCUSABLE)?.[0];
    firstFocusable?.focus();

    // Handle Tab / Shift+Tab + Escape
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      const focusable = Array.from(
        modalRef.current?.querySelectorAll(FOCUSABLE) ?? []
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        // Shift+Tab: if focus is on first element, wrap to last
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Tab: if focus is on last element, wrap to first
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Prevent background scroll while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      // Return focus to the element that opened the modal
      previouslyFocused.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    // ── Backdrop: full-screen scrollable overlay ─────────────────
    // Using overflow-y-auto + min-h-full inner wrapper is the correct
    // Tailwind pattern — modal is perfectly centered when short,
    // and scrollable (not clipped) when content is tall.
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Inner centering wrapper — min-h-screen ensures true 100vh centering */}
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* ── Dialog ─────────────────────────────────────────── */}
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="
            relative w-full max-w-2xl
            bg-[var(--card)] rounded-2xl shadow-2xl
            border border-[var(--border)]
            animate-[fadeSlideUp_0.2s_ease-out]
            my-4
          "
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="
              absolute top-4 right-4 z-10
              w-9 h-9 rounded-full flex items-center justify-center
              bg-[var(--bg-subtle)] hover:bg-[var(--card-hover)]
              text-[var(--fg-muted)] hover:text-[var(--fg)]
              transition-colors duration-150
            "
          >
            <X size={18} />
          </button>

          {/* Modal heading */}
          {title && (
            <div className="px-6 pt-6 pb-4 border-b border-[var(--border)]">
              <h3
                id="modal-title"
                className="font-display text-xl font-bold text-[var(--fg)] pr-10"
              >
                {title}
              </h3>
            </div>
          )}

          {/* Modal body */}
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
