import AmbientLayer from "../ui/AmbientLayer";
import { useRef, useState, useCallback } from 'react';
import SectionLabel from '../ui/SectionLabel';
import SceneReveal from '../ui/SceneReveal';
import MotionStream from '../ui/MotionStream';
import ProjectCard from '../ui/ProjectCard';
import Modal from '../ui/Modal';
import useScrollSteps from '../../hooks/useScrollSteps';
import { projects } from '../../data/projects';
import { ArrowUpRight } from 'lucide-react';

const capabilities = [
  ['Voice-to-voice support', 'Image-based product discovery', 'Product & size suggestions', 'Custom-order confirmation', 'AI-generated previews for approval', 'Customization pricing & catalog workflows', 'Automated restock emails'],
  ['Animal registration', 'Worker management', 'Role-based access control', 'Per-animal yield, cost & status', 'Operational dashboards', 'Stakeholder-specific workflows'],
];

function ProjectLinks({ project }) {
  return <div className="project-actions">
    {project.githubUrl && <a className="project-action" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repo for ${project.name}`}>Code <ArrowUpRight size={14} /></a>}
    {project.liveUrl && <a className="project-action" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live demo for ${project.name}`}>Live Demo <ArrowUpRight size={14} /></a>}
  </div>;
}

export default function Projects() {
  const ref = useRef(null);
  const active = useScrollSteps(ref);
  const [detail, setDetail] = useState(null);
  const close = useCallback(() => setDetail(null), []);
  const flagship = projects.slice(0, 2);
  return <section id="projects" className="py-24 px-5 bg-[var(--bg-subtle)]">
      <AmbientLayer variant="projects" />
    <div className="max-w-6xl mx-auto">
      <SectionLabel label="Recent Work" heading="Featured Projects" />
      <div className="product-showcase" ref={ref}>
        <div className="product-stage">
          <div className="product-stage-meta"><span>SELECTED SYSTEMS</span><span>0{active + 1} / 02</span></div>
          <div className="product-screen">
            {flagship.map((project, index) => <button type="button" key={project.id} className="product-screen-layer" data-active={active === index} tabIndex={active === index ? 0 : -1} aria-hidden={active !== index} aria-label={`Explore ${project.name}`} onClick={() => setDetail(index)}>
              <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" decoding="async" />
              <span>Explore system <ArrowUpRight size={16} /></span>
            </button>)}
          </div>
          <nav aria-label="Flagship projects" className="product-selector">{flagship.map((project, index) => <a key={project.id} href={`#project-${project.id}`} aria-current={active === index ? 'step' : undefined}><span>0{index+1}</span>{project.name}</a>)}</nav>
        </div>
        <div className="product-narratives">{flagship.map((project, index) => <article key={project.id} id={`project-${project.id}`} data-step={index} className="product-chapter" data-active={active === index}>
          <SceneReveal mode="reveal">
            <span className="chapter-kicker">PROJECT 0{index + 1}</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">{project.name}</h3>
            <button className="mobile-product-screen" aria-label={`Explore ${project.name}`} onClick={() => setDetail(index)}><img src={project.image} alt={`${project.name} screenshot`} loading="lazy" /></button>
            <p className="text-[var(--fg-muted)] leading-relaxed">{project.description}</p>
            <div className="product-stack">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>
            <button className="system-explore" onClick={() => setDetail(index)}>Explore capabilities <ArrowUpRight size={16} /></button>
            <ProjectLinks project={project} />
          </SceneReveal>
        </article>)}</div>
      </div>
      <div className="collection-heading"><span className="chapter-kicker">CONTINUED EXPLORATION</span><h3 className="font-display text-2xl font-semibold">More work</h3></div>
      <MotionStream label="Project stream">{projects.slice(2).map((project,index) => <ProjectCard key={project.id} project={project} index={index+2} stream />)}</MotionStream>
      <a className="system-explore mt-12" href="https://github.com/AsadUllah-313" target="_blank" rel="noopener noreferrer">View all projects on GitHub <ArrowUpRight size={16} /></a>
    </div>
    <Modal isOpen={detail !== null} onClose={close} title={detail !== null ? flagship[detail].name : ''}>
      {detail !== null && <div className="project-detail">
        <img src={flagship[detail].image} alt={`${flagship[detail].name} screenshot`} />
        <div className="product-stack">{flagship[detail].stack.map(tech => <span key={tech}>{tech}</span>)}</div>
        <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{flagship[detail].description}</p>
        <h4 className="chapter-kicker mt-6">KEY CAPABILITIES</h4>
        <ul className="capability-list">{capabilities[detail].map(feature => <li key={feature}>{feature}</li>)}</ul>
        <ProjectLinks project={flagship[detail]} />
      </div>}
    </Modal>
  </section>;
}
