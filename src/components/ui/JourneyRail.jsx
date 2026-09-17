const chapters = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
export default function JourneyRail({ active }) {
  return <nav className="journey-rail" aria-label="Page chapters">{chapters.map((chapter,index) => <a key={chapter} href={`#${chapter}`} aria-label={`Chapter ${index}: ${chapter}`} aria-current={active === chapter ? 'location' : undefined}>{String(index).padStart(2,'0')}</a>)}</nav>;
}
