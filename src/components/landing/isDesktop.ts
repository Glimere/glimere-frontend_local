import { useState, useEffect } from 'react';

export default function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

  useEffect(() => {
    function handleResize() {
      setIsDesktop(windowWidth >= 768);
    }

    handleResize(); // Set the initial value

    if (typeof window !== "undefined") {
      window.addEventListener('resize', handleResize);

    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener('resize', handleResize);
      }
    }
  }, []);

  return isDesktop;
}
