// Repeated architectural traces connect scenes; only two transform animations run.
export default function AmbientLayer({ variant = 'flow' }) {
  return <div className={`ambient-layer ambient-${variant}`} aria-hidden="true">
    <div className="ambient-grid" /><div className="ambient-light" />
    <svg className="ambient-paths" viewBox="0 0 1200 700" preserveAspectRatio="none">
      <path d="M0 120 H160 L250 210 H520 L600 290 H1000 L1080 370 H1200 M0 570 H240 L330 480 H720 L800 400 H1200" />
      <path className="ambient-flow" d="M0 120 H160 L250 210 H520 L600 290 H1000 L1080 370 H1200" />
      <g>{[[160,120],[520,210],[1000,290],[330,480],[720,480]].map(([x,y]) => <circle key={x} cx={x} cy={y} r="3" />)}</g>
    </svg>
    <span className="ambient-sweep" />
  </div>;
}
