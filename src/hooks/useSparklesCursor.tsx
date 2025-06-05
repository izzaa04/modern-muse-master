
import { useEffect } from 'react';

export const useSparklesCursor = () => {
  useEffect(() => {
    const sparkles: HTMLElement[] = [];
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;

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
      // Update cursor position
      if (cursor) {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
      }

      // Create sparkles occasionally
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
