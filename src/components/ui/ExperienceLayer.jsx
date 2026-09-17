import { useEffect } from "react";

// One observer drives section continuity and pauses decorative motion offscreen.
export default function ExperienceLayer() {
  useEffect(() => {
    const sections = document.querySelectorAll("main > section[id]");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle("is-in-view", entry.isIntersecting);
        if (entry.isIntersecting) entry.target.classList.add("has-entered");
      }
    }, { rootMargin: "0px 0px 80px 0px" });
    sections.forEach(section => observer.observe(section));
    const visibility = () => document.documentElement.classList.toggle("page-hidden", document.hidden);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      document.documentElement.classList.remove("page-hidden");
    };
  }, []);
  return null;
}
