import { useEffect, useState } from 'react';

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };

    // Initial calculation
    updateScrollProgress();

    // Add scroll event listener
    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <div 
        className="h-full bg-blue-500 transition-all duration-150 ease-out"
        style={{ 
          width: `${scrollProgress}%`,
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
        }}
      />
    </div>
  );
};

export default ScrollProgressIndicator; 