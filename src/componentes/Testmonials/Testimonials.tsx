'use client'
import { Animation } from "../useIntersectionAnimation/Animation";
const testimonials = [
  {
    quote: "Desde que começamos a usar o JudBR, nossa produtividade aumentou 30% e os clientes percebem a diferença",
    author: "Maria Silva",
    role: "Advogada",
    avatarColor: "#4A90E2",
  },
  {
    quote: "O JUDBR é como ter um funcionário em tempo integral por uma fração do custo. Não conseguiria administrar meu escritório de advocacia sem o JUDBR. O software é fácil de usar, o suporte é excelente e a empresa está sempre lançando novos recursos para tornar a gestão do meu escritório mais fácil e eficiente!",
    author: "Kathleen Amaral",
    role: "Escritório de Advocacia",
    avatarColor: "#50E3C2",
  },
  {
    quote: "O JUDBR revolucionou nossa prática jurídica. Economizamos horas preciosas todos os meses com a gestão de processos e prazos. Com apenas alguns cliques, temos acesso a todos os detalhes dos casos, intimações e decisões judiciais.",
    author: "João da Silva",
    role: "Advogado",
    avatarColor: "#F5A623",
  }
];

export default function Testimonials() {
    const itemRef = Animation<HTMLDivElement>();
  return (
    <section className="py-12 md:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 md:mb-20 animate-slide-up">
          <span className="text-judbr-main text-xs md:text-sm font-semibold border-2 border-judbr-main/20 rounded-full px-3 py-1 md:px-4 md:py-2 mb-2 sm:mb-4 bg-white shadow-sm hover:shadow-md transition-all duration-300">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-judbr-gray-dark pt-3 font-bold mt-2 sm:mt-4">
            <span className="text-judbr-main">Depoimentos </span>
            <span className="text-judbr-gray-dark">dos Nossos Clientes</span>
          </h2>
        </div>

        <div ref={itemRef} className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-5
                transform hover:-translate-y-3 transition-all duration-500
                border-2 border-gray-100 hover:border-judbr-main/30
                hover:shadow-[0_25px_70px_rgba(8,_112,_184,_0.2)]
                group relative backdrop-blur-sm
                animate-fade-in-up
                max-w-[340px] mx-auto w-full
                flex flex-col"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="relative flex-1 flex flex-col">
                <span className="absolute -top-6 -left-2 text-judbr-main/80 text-6xl md:text-7xl font-serif group-hover:text-judbr-main transition-all duration-500">"</span>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-500 pt-4">
                  {testimonial.quote}
                </p>
                
                <div className="flex flex-col items-center mt-auto pt-4">
                  <div className="mb-4 hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20" cy="20" r="20" fill={testimonial.avatarColor} />
                      <path d="M26.67 16.67C26.67 20.35 23.68 23.33 20 23.33C16.32 23.33 13.33 20.35 13.33 16.67C13.33 12.99 16.32 10 20 10C23.68 10 26.67 12.99 26.67 16.67Z" fill="white" />
                      <path d="M32.5 31.67C32.5 33.05 31.38 34.17 30 34.17H10C8.62 34.17 7.5 33.05 7.5 31.67C7.5 27.06 11.23 23.33 15.83 23.33H24.17C28.77 23.33 32.5 27.06 32.5 31.67Z" fill="white" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-judbr-gray-dark mb-2 group-hover:text-judbr-main transition-colors duration-500">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-500 text-sm font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
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