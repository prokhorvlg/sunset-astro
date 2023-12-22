import { useState, useEffect } from "react";

// useIsVisible: contains on screen visibility state using intersection observer
// Currently mostly used for the map 
export function useIsVisible(ref: React.RefObject<HTMLElement>) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      if (!ref.current) return

      const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      );
  
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }