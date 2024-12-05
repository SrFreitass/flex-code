import { useEffect, useState } from 'react';

export function useScrollProgress(ref: React.RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;


      const startOffset = windowHeight * 0.3;
      const endOffset = windowHeight * 0.2;

      const visibleHeight = elementHeight - startOffset - endOffset;

      const scrolledDistance = windowHeight - rect.top - startOffset;

      let calculatedProgress = (scrolledDistance / visibleHeight) * 100;

      calculatedProgress = Math.max(0, Math.min(100, calculatedProgress));

      setProgress(calculatedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return progress;
}
