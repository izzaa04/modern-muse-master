
import { useEffect, useState } from 'react';

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="galaxy-bg" />
      <div 
        className="stars" 
        style={{
          transform: `translateY(${scrollY * 0.2}px)`
        }}
      />
    </>
  );
};

export default ParallaxBackground;
