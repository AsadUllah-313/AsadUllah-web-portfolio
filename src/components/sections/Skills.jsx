import AmbientLayer from "../ui/AmbientLayer";
import { useState } from "react";
import SectionLabel from "../ui/SectionLabel";
import SceneReveal from "../ui/SceneReveal";
import SystemMap from "../ui/SystemMap";
import { skills, levelColors } from "../../data/skills";
// ── Icon Imports ────────────────────────────────────────────────
// We import each icon family from react-icons and build a lookup map.
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGithub, FaPython, FaGit,
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiPhp, SiMysql, SiNextdotjs,
  SiDjango, SiExpress, SiPostgresql, SiVercel,
} from "react-icons/si";
import { TbApi, TbLock, TbCode, TbBrain } from "react-icons/tb";
import { MdDevices } from "react-icons/md";

// Map from icon string name (in skills.js) → actual component
const iconMap = {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGithub, FaPython, FaGit,
  SiJavascript, SiTailwindcss, SiPhp, SiMysql, SiNextdotjs,
  SiDjango, SiExpress, SiPostgresql, SiVercel,
  TbApi, TbLock, TbCode, TbBrain,
  MdDevices,
  // "SiBrain" from skills.js maps to TbBrain as a fallback
  SiBrain: TbBrain,
};

// ── Category metadata ───────────────────────────────────────────
const categories = [
  { key: "frontend", title: "Frontend" },
  { key: "backend", title: "Backend & APIs" },
  { key: "databases", title: "Databases" },
  { key: "ai", title: "AI / Generative AI" },
  { key: "engineering", title: "Engineering & Tools" },
];


export default function Skills() {
  const [selected, setSelected] = useState('frontend');
  const [showAll, setShowAll] = useState(false);
  return <section id="skills" className="py-24 px-5 bg-[var(--bg-subtle)]">
      <AmbientLayer variant="skills" /><div className="max-w-6xl mx-auto">
    <SectionLabel label="Technical Expertise" heading="Skills & Technologies" />
    <div className="engineering-composition">
      <SceneReveal mode="reveal" className="engineering-map">
        <SystemMap selected={selected} onSelect={setSelected} />
        <button className="engineering-foundation" aria-pressed={selected === 'engineering'} onClick={() => setSelected('engineering')}>05 / Engineering & Tools <span aria-hidden="true">↗</span></button>
        <p className="map-instruction">Select a layer to explore its technologies.</p>
        <button className="project-action" aria-expanded={showAll} onClick={() => setShowAll(!showAll)}>{showAll ? 'Show selected layer' : 'View all technologies'}</button>
      </SceneReveal>
      <div className="engineering-detail" id="engineering-detail">
        {categories.filter(cat => showAll || cat.key === selected).map(cat => <div key={cat.key} className="engineering-category">
          <h3 className="font-display text-2xl font-semibold mb-6">{cat.title}</h3>
          <div className="engineering-skills">{skills[cat.key].map(skill => {
            const Icon = iconMap[skill.icon];
            const colors = levelColors[skill.level] || levelColors.Applied;
            return <div className="skill-row" key={skill.name}><div>{Icon && <Icon size={20} aria-hidden="true" />}<span>{skill.name}</span></div><span className={colors.text}>{skill.level}</span></div>;
          })}</div>
        </div>)}
      </div>
    </div>
  </div></section>;
}
