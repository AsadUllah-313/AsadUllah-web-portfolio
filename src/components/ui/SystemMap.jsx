import { useState } from "react";

const layers = [
  { key: 'frontend', title: 'Interface', stack: 'React.js / Next.js' },
  { key: 'backend', title: 'Services', stack: 'Django / Node.js / APIs' },
  { key: 'databases', title: 'Data', stack: 'PostgreSQL / MySQL' },
  { key: 'ai', title: 'Intelligence', stack: 'Generative AI' },
];
const connections = [
  { from: 'frontend', to: 'backend', path: 'M100 100 H300' },
  { from: 'backend', to: 'databases', path: 'M300 100 V200 H100 V300' },
  { from: 'backend', to: 'ai', path: 'M300 100 V300' },
  { from: 'ai', to: 'frontend', path: 'M300 300 H200 V100 H100' },
];

export default function SystemMap({ selected, onSelect, stage = 3 }) {
  const [local, setLocal] = useState('frontend');
  const [preview, setPreview] = useState(null);
  const active = selected || local;
  const traced = preview || active;
  const interactive = !selected || !!onSelect;
  const Node = interactive ? 'button' : 'div';
  return <div className="architecture" data-layer={active}>
    <div className="architecture-caption"><span>APPLICATION ARCHITECTURE</span><span aria-hidden="true">↗</span></div>
    <svg className="architecture-paths" viewBox="0 0 400 400" aria-hidden="true">
      {connections.map(link => <path key={link.from + link.to} d={link.path} data-connected={link.from === traced || link.to === traced} />)}
      <path className="architecture-signal" d="M100 100 H300 V300 H100 V100" />
    </svg>
    <div className="architecture-nodes">
      {layers.map((layer, index) => <Node type={interactive ? 'button' : undefined} key={layer.key}
        className="architecture-node" aria-pressed={interactive ? active === layer.key : undefined} data-selected={active === layer.key}
        data-present={index <= stage || undefined}
        data-related={connections.some(link => (link.from === traced && link.to === layer.key) || (link.to === traced && link.from === layer.key))}
        onPointerEnter={interactive ? () => setPreview(layer.key) : undefined}
        onPointerLeave={interactive ? () => setPreview(null) : undefined}
        onFocus={interactive ? () => setPreview(layer.key) : undefined}
        onBlur={interactive ? () => setPreview(null) : undefined}
        onClick={() => { setLocal(layer.key); onSelect?.(layer.key); }}>
        <span className="system-index">0{index + 1} /</span>
        <strong>{layer.title}</strong><span>{layer.stack}</span>
      </Node>)}
    </div>
    <div className="architecture-foundation">Interfaces → services → data → intelligent experiences</div>
  </div>;
}
