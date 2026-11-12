import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal — scroll-triggered animation wrapper.
 *
 * Props:
 *   delay      — ms delay before animation starts (default 0)
 *   direction  — 'up' | 'down' | 'left' | 'right' (default 'up')
 *   duration   — ms (default 700)
 *   distance   — px to travel (default 30)
 *   once       — animate only once? (default true)
 *   className  — extra classes forwarded to the wrapper div
 *   as         — HTML tag name, default 'div'
 */
export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 700,
  distance = 30,
  once = true,
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.05, rootMargin: '50px 0px 0px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const translateMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
  };

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0,0)' : translateMap[direction],
    transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
    willChange: 'opacity, transform',
  };

  return (
    <Tag ref={ref} style={style} className={className}>
      {children}
    </Tag>
  );
}
