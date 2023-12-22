import { useEffect, useRef } from "react";

export function useDebouncedUpdate(value: Function, delay: number) {
    const timeoutRef = useRef<number>();
  
    useEffect(() => {
      timeoutRef.current = window.setTimeout(() => {
        value();
      }, delay);
  
      return () => {
        window.clearTimeout(timeoutRef.current);
      };
    }, [value, delay]);
  
    return timeoutRef;
  }