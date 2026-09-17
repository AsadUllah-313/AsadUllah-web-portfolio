import { useEffect, useState } from "react";

// A viewport reading band activates chapters without per-frame React updates.
export default function useScrollSteps(ref) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = [...root.querySelectorAll('[data-step]')];
    let observer;
    const observe = () => {
      observer?.disconnect();
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.step));
        });
      }, { rootMargin: `-${Math.round(innerHeight * .25)}px 0px -${Math.round(innerHeight * .45)}px 0px`, threshold: 0 });
      items.forEach(item => observer.observe(item));
    };
    observe();
    window.addEventListener('resize', observe);
    const focus = event => {
      const item = event.target.closest('[data-step]');
      if (item) setActive(Number(item.dataset.step));
    };
    root.addEventListener('focusin', focus);
    return () => { observer.disconnect(); root.removeEventListener('focusin', focus); window.removeEventListener('resize', observe); };
  }, [ref]);
  return active;
}
