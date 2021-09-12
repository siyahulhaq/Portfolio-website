import { useEffect, useRef } from "react";

function useStarParalaxEffect() {
  const container = useRef<any>(null);
  useEffect(() => {
    const stars = [...container?.current?.children];
    const start = {
      x: 0,
      y: 0,
    };
    const onEnter = (e: any) => {
      start.x = e.clientX;
      start.y = e.clientY;
    };

    const onMove = (e: any) => {
      const diff = {
        x: start.x - e.clientX,
        y: start.y - e.clientY,
      };
      // eslint-disable-next-line no-plusplus
      for (let index = 0; index < stars.length; index++) {
        const star = stars[index];
        star.style.transform = `translate(${diff.x * 0.02 * -1}px, ${
          diff.y * 0.02 * -1
        }px)`;
      }
    };
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", onEnter);
    };
  }, []);
  return container;
}

export default useStarParalaxEffect;
