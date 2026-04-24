import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    // Smooth scroll implementation using native CSS
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return null;
};

export default SmoothScroll;
