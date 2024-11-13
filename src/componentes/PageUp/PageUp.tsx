'use client'

import { useState, useEffect } from 'react';

export default function PageUp() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="relative">
            <svg className="w-16 h-16 transform -rotate-90">
              <circle
                className="text-gray-300"
                strokeWidth="2"
                stroke=""
                fill="transparent"
                r="30"
                cx="32"
                cy="32"
              />
              <circle
                className="text-judbr-main"
                strokeWidth="2"
                strokeDasharray={30 * 2 * Math.PI}
                strokeDashoffset={30 * 2 * Math.PI - (scrollProgress / 100) * 30 * 2 * Math.PI}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="32"
                cy="32"
              />
            </svg>
            <button 
              onClick={scrollToTop} 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-judbr-main text-white p-4 rounded-full shadow-lg hover:bg-judbr-main/80 transition-colors duration-300"
              aria-label="Voltar ao topo"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}