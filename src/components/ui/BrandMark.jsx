export default function BrandMark({ full = false }) {
  return <span className={`brand-mark ${full ? 'brand-full' : ''}`} aria-label={full ? 'AsadUllah' : undefined}>
    <span className="brand-bracket" aria-hidden="true">&lt;</span>
    <span className="brand-word">{full ? 'AsadUllah' : 'AU'}</span>
    <span className="brand-bracket" aria-hidden="true">/&gt;</span>
  </span>;
}
