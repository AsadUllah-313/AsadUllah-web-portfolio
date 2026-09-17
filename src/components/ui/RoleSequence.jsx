import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const roles = ["AI-powered Applications", "Full-stack Products", "Generative AI Integration"];

export default function RoleSequence() {
  const ref = useRef(null);
  const visible = useInView(ref);
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!visible || reduced) return;
    const timer = setInterval(() => {
      if (!document.hidden) setIndex(current => (current + 1) % roles.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [visible, reduced]);
  return (
    <span ref={ref} className="role-sequence">
      <span className="sr-only">{roles.join(". ")}</span>
      {roles.map((role, i) => (
        <span key={role} aria-hidden="true" className={`role-word ${i === (reduced ? 0 : index) ? "is-active" : ""}`}>{role}</span>
      ))}
    </span>
  );
}
