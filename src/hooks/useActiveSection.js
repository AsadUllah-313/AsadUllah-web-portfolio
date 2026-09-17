import { useEffect, useState } from "react";

// Track the section crossing the reading band beneath the fixed navigation.
// IntersectionObserver also handles image/font reflow without per-scroll reads.
export function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const sections = [...document.querySelectorAll("main > section[id]")];
    let observer;
    const observe = () => {
      observer?.disconnect();
      const visible = new Set();
      const readingLine = Math.max(120, Math.min(window.innerHeight * 0.3, 220));
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const current = sections.filter(section => visible.has(section.id)).at(-1)?.id;
        if (current) setActive(previous => previous === current ? previous : current);
      }, { rootMargin: `-80px 0px -${Math.max(0, window.innerHeight - readingLine)}px 0px`, threshold: 0 });
      sections.forEach(section => observer.observe(section));
    };
    observe();
    window.addEventListener("resize", observe);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", observe);
    };
  }, []);
  return active;
}
