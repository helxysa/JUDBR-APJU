import { useEffect, useRef, RefObject } from 'react';


interface IntersectionAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    initialClass?: string;
    animationClass?: string;
  }
  
  export function Animation<T extends HTMLElement>({
    threshold = 0,
    rootMargin = '20px',
    initialClass = 'opacity-0',
    animationClass = 'animate-fade-in-up-2'
  }: IntersectionAnimationOptions = {}): RefObject<T> {
    const ref = useRef<T>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(initialClass);
            entry.target.classList.add(animationClass);
            observer.unobserve(entry.target);
          }
        },
        { threshold, rootMargin }
      );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, initialClass, animationClass]);

  return ref;
}