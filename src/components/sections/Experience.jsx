import AmbientLayer from "../ui/AmbientLayer";
import { useRef } from 'react';
import { motion as Motion, useScroll, useReducedMotion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import SceneReveal from '../ui/SceneReveal';
import useScrollSteps from '../../hooks/useScrollSteps';
import { experience } from '../../data/experience';

export default function Experience() {
  const ref = useRef(null);
  const active = useScrollSteps(ref);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 65%'] });
  return <section id="experience" className="py-24 px-5 bg-[var(--bg)]">
      <AmbientLayer variant="experience" /><div className="max-w-6xl mx-auto">
    <SectionLabel label="Work Experience" heading="Where I've Worked" />
    <div className="career-timeline" ref={ref}>
      <Motion.div className="career-signal" aria-hidden="true" style={{ scaleY: reduced ? 1 : scrollYProgress }} />
      {experience.map((exp,index) => <article key={exp.id} data-step={index} className="career-entry" data-active={active === index} data-current={index === 0 || undefined}>
        <div className="career-node" aria-hidden="true" />
        <div className="career-period"><span className="chapter-kicker">{exp.period}</span><p>{exp.type}</p>{exp.location && <p>{exp.location}</p>}</div>
        <div className="career-content">
          <SceneReveal mode="reveal"><h3 className="font-display text-2xl md:text-3xl font-bold mb-2">{exp.role}</h3>
            {exp.companyUrl ? <a className="text-[var(--accent-text)]" href={exp.companyUrl} target="_blank" rel="noopener noreferrer">{exp.company} ↗</a> : <p className="text-[var(--accent-text)]">{exp.company}</p>}
            <p className="text-[var(--fg-muted)] leading-relaxed mt-6">{exp.description}</p>
          </SceneReveal>
          <ul className="career-responsibilities">{exp.bullets?.map((bullet,i) => <li key={bullet}><SceneReveal delay={i * .06}><span className="system-index" aria-hidden="true">0{i+1}</span><p>{bullet}</p></SceneReveal></li>)}</ul>
          <div className="product-stack">{(index === 0 ? ['React.js','Node.js','Express.js','PostgreSQL'] : ['React.js']).map(tech => <span key={tech}>{tech}</span>)}</div>
        </div>
      </article>)}
    </div>
  </div></section>;
}
