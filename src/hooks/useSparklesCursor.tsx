
import { useEffect } from 'react';

export const useSparklesCursor = () => {
  useEffect(() => {
    const sparkles: HTMLElement[] = [];

    const createSparkle = (x: number, y: number) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle-cursor';
      sparkle.style.left = x - 10 + 'px';
      sparkle.style.top = y - 10 + 'px';
      
      document.body.appendChild(sparkle);
      sparkles.push(sparkle);

      setTimeout(() => {
        sparkle.remove();
        const index = sparkles.indexOf(sparkle);
        if (index > -1) {
          sparkles.splice(index, 1);
        }
      }, 600);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.8) {
        createSparkle(e.clientX, e.clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      sparkles.forEach(sparkle => sparkle.remove());
    };
  }, []);
};
