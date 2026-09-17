import AmbientLayer from "../ui/AmbientLayer";
import { useRef } from "react";
import SectionLabel from "../ui/SectionLabel";
import SceneReveal from "../ui/SceneReveal";
import SystemMap from "../ui/SystemMap";
import useScrollSteps from "../../hooks/useScrollSteps";
import { Code2, Briefcase, GraduationCap } from "lucide-react";
const stats = [
  { icon: GraduationCap, value: "BS SE",    label: "Software Engineering Student" },
  { icon: Briefcase,     value: "2",        label: "Internships · 1 Current, 1 Completed" },
  { icon: Code2,         value: "Full Stack", label: "Web Applications & AI Integration" },
];


const stages = ['Frontend foundation', 'Full-stack engineering', 'AI-powered applications'];
export default function About() {
  const storyRef = useRef(null);
  const active = useScrollSteps(storyRef);
  return <section id="about" className="py-24 px-5 bg-[var(--bg)]">
      <AmbientLayer variant="about" />
    <div className="max-w-6xl mx-auto">
      <div className="story-composition" ref={storyRef}>
        <div className="story-system">
          <SectionLabel label="About Me" heading="My Story" />
          <SystemMap selected={['frontend','backend','ai'][active]} stage={[0,2,3][active]} />
          <div className="story-position" aria-hidden="true">0{active + 1} / 03 <span>{stages[active]}</span></div>
        </div>
        <div className="story-chapters">
          <article data-step="0" className="story-chapter" data-active={active === 0}>
            <SceneReveal mode="reveal"><span className="chapter-kicker">01 / {stages[0]}</span><p>
              I'm{" "}
              <strong className="text-[var(--fg)] font-semibold">AsadUllah</strong>,
              a Software Engineering student building my career as a Full Stack Software Engineer.
              React was my starting point: building interfaces taught me to think about
              how people move through a product, not just how a page looks.
            </p></SceneReveal>
          </article>
<article data-step="1" className="story-chapter" data-active={active === 1}>
            <SceneReveal mode="reveal"><span className="chapter-kicker">02 / {stages[1]}</span><p>
              My frontend internship at DevelopersHub.co strengthened that foundation.
              Now, as a Full Stack Developer Intern at{" "}
              <strong className="text-[var(--fg)] font-semibold">LogXpert</strong>,
              I work across React interfaces, Node.js APIs, and PostgreSQL data workflows
              for a farm management system, connecting daily operations with role-based access and dashboards.
            </p></SceneReveal>
          </article>
<article data-step="2" className="story-chapter" data-active={active === 2}>
            <SceneReveal mode="reveal"><span className="chapter-kicker">03 / {stages[2]}</span><p>
              My work now spans{" "}
              <span className="text-[var(--accent-text)] font-medium">Next.js</span>,{" "}
              <span className="text-[var(--accent-text)] font-medium">Django</span>, and{" "}
              <span className="text-[var(--accent-text)] font-medium">Generative AI</span>.
              An ecommerce and customer-support project brings that direction together:
              voice conversations, image-based discovery, and custom-order workflows.
              I enjoy making complex, real-world tasks easier to complete through software.
            </p></SceneReveal>
          </article>
          <p className="text-sm italic text-[var(--fg-muted)]">
              Building toward AI engineering through practical full-stack product development.
            </p>
        </div>
      </div>
      <div className="story-facts">{stats.map(stat => <div key={stat.label} className="story-fact"><stat.icon size={20} aria-hidden="true" /><div><strong>{stat.value}</strong><p>{stat.label}</p></div></div>)}</div>
    </div>
  </section>;
}
