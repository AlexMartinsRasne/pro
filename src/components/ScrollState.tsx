'use client';

import { useEffect } from 'react';

export default function ScrollState() {
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const rightEdgeZone = 24;
    const root = document.documentElement;

    const setScrolling = () => {
      root.classList.add('is-scrolling');

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        root.classList.remove('is-scrolling');
      }, 250);
    };

    const setScrollbarHover = (event: MouseEvent) => {
      const isNearRightEdge = window.innerWidth - event.clientX <= rightEdgeZone;
      root.classList.toggle('is-scrollbar-hover', isNearRightEdge);
    };

    const clearScrollbarHover = () => {
      root.classList.remove('is-scrollbar-hover');
    };

    window.addEventListener('scroll', setScrolling, { passive: true });
    window.addEventListener('mousemove', setScrollbarHover, { passive: true });
    window.addEventListener('mouseleave', clearScrollbarHover);

    return () => {
      window.removeEventListener('scroll', setScrolling);
      window.removeEventListener('mousemove', setScrollbarHover);
      window.removeEventListener('mouseleave', clearScrollbarHover);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return null;
}
