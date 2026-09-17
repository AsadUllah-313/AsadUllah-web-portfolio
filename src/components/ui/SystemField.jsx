// A small, decorative architecture motif. No canvas, loops, or fabricated metadata.
export default function SystemField() {
  return (
    <div className="system-field" aria-hidden="true">
      <div className="system-grid" />
      <svg className="system-circuit" viewBox="0 0 1200 680" fill="none" preserveAspectRatio="xMidYMid slice">
        <g className="circuit-lines">
          <path d="M0 180H150L220 250V440L290 510H390" />
          <path d="M1200 160H1040L980 220V400L910 470H810" />
          <path d="M0 540H100L150 490V360M1200 540H1100L1050 490V340" />
          <path d="M310 0V90L370 150M870 680V590L810 530" />
        </g>
        <g className="circuit-nodes">
          {[[150,180],[220,250],[220,440],[390,510],[1040,160],[980,220],[980,400],[810,470],[150,360],[1050,340]].map(([cx,cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" />
          ))}
        </g>
      </svg>
      <span className="system-signal system-signal-left" />
      <span className="system-signal system-signal-right" />
    </div>
  );
}
