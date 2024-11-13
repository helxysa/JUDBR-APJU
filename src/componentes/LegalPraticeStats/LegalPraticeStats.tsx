'use client'
import { Animation } from "../useIntersectionAnimation/Animation";
import { useState, useEffect } from 'react';

const stats = [
  { value: '8+', description: 'horas economizadas por semana em tarefas administrativas' },
  { value: '73%', description: 'redução em contas a receber no final do ano' },
  { value: '70%', description: 'pagamento mais rápido que a média da indústria' },
];

export default function LegalPracticeStats() {
  const itemRef = Animation<HTMLDivElement>();
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < parseFloat(stat.value)) {
            newCounts[index] += stat.value.includes('%') ? 1 : 0.1;
          } else {
            clearInterval(intervals[index]);
          }
          return newCounts;
        });
      }, 40);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section className="py-12 md:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 md:mb-20 animate-slide-up">
          <span className="text-judbr-main text-xs md:text-sm font-semibold border-2 border-judbr-main/20 rounded-full px-3 py-1 md:px-4 md:py-2 mb-2 sm:mb-4 bg-white shadow-sm hover:shadow-md transition-all duration-300">
            Estatísticas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-judbr-gray-dark pt-3 font-bold mt-2 sm:mt-4">
            <span className="text-judbr-gray-dark">Mais do que um </span>
            <span className="text-judbr-main">software jurídico</span>
          </h2>
        </div>

        <div ref={itemRef} className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-5
                transform hover:-translate-y-3 transition-all duration-500
                border-2 border-gray-100 hover:border-judbr-main/30
                hover:shadow-[0_25px_70px_rgba(8,_112,_184,_0.2)]
                group relative backdrop-blur-sm
                animate-fade-in-up
                max-w-[340px] mx-auto w-full
                flex flex-col items-center justify-center"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <p className="text-4xl font-bold text-judbr-main mb-4 group-hover:scale-110 transition-all duration-300">
                {isVisible
                  ? (stat.value.includes('+') 
                      ? counts[index].toFixed(0) + '+'
                      : counts[index].toFixed(0) + '%')
                  : '0'}
              </p>
              <div className="w-16 h-px bg-judbr-main/20 mb-4"></div>
              <p className="text-gray-600 text-center text-lg leading-relaxed group-hover:text-gray-700">
                {stat.description}
              </p>
              
              <div className="absolute inset-0 bg-gradient-to-b from-judbr-main/5 via-transparent to-transparent 
                rounded-2xl opacity-0 transition-opacity duration-300
                group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}