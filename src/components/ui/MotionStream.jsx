import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Pause, Play, List } from 'lucide-react';

// Two equal groups form a seamless, compositor-driven loop. The accessible
// original remains available in browse mode; the visual copy is pointer-only.
export default function MotionStream({ label, children, speed = 32 }) {
  const ref = useRef(null);
  const group = useRef(null);
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [browse, setBrowse] = useState(false);
  const staticMode = browse || reduced;
  useEffect(() => {
    const root = ref.current;
    const measure = () => root.style.setProperty('--stream-duration', `${group.current.getBoundingClientRect().width / speed}s`);
    const resize = new ResizeObserver(measure);
    resize.observe(group.current);
    const observer = new IntersectionObserver(([entry]) => root.dataset.visible = String(entry.isIntersecting));
    observer.observe(root);
    // Prime the whole strip shortly before entry, so an incoming card never
    // has to wait for the browser's horizontal lazy-loading threshold.
    const preload = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      root.querySelectorAll('img').forEach(img => { img.loading = 'eager'; });
      preload.disconnect();
    }, { rootMargin: '400px' });
    preload.observe(root);
    root.querySelectorAll('[data-copy] a, [data-copy] button, [data-copy] summary').forEach(el => el.tabIndex = -1);
    return () => { resize.disconnect(); observer.disconnect(); preload.disconnect(); };
  }, [speed, children]);
  const keyboardBrowse = event => {
    if (!event.target.matches(':focus-visible') || !event.target.closest('.stream-track')) return;
    setBrowse(true);
    requestAnimationFrame(() => event.target.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'instant' }));
  };
  return <div className="motion-stream" ref={ref} data-paused={paused} data-browse={staticMode} onFocusCapture={keyboardBrowse}>
    <div className="stream-toolbar"><span><i aria-hidden="true" />{label}</span><div>
      {!reduced && <button type="button" aria-label={`${paused ? 'Resume' : 'Pause'} ${label}`} onClick={() => setPaused(!paused)}>{paused ? <Play size={13} /> : <Pause size={13} />}{paused ? 'Resume' : 'Pause'}</button>}
      <button type="button" aria-pressed={!!staticMode} onClick={() => setBrowse(!browse)}><List size={14} />{staticMode ? 'Browse mode' : 'Browse cards'}</button>
    </div></div>
    <div className="stream-viewport" onTouchStart={() => setPaused(true)}>
      <div className="stream-track">
        <div className="stream-group" ref={group}>{children}</div>
        <div className="stream-group" data-copy="" aria-hidden="true">{children}</div>
      </div>
    </div>
    <p className="stream-hint"><span className="stream-desktop-hint">Hover to pause · Browse cards to scroll at your own pace</span><span className="stream-touch-hint">Touch to pause · Browse cards to swipe through the collection</span></p>
  </div>;
}
