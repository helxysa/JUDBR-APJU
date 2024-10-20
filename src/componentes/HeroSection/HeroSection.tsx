export default function HeroSection() {
  return (
        <div className="bg-[#f8f9ff] min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-20 py-10 pt-20 lg:pt-40 pb-16 lg:pb-0">
        <div className="flex flex-col lg:flex-row items-center justify-around">
    
          {/* Left side: Text content */}
          <div className="w-full lg:w-5/12  lg:">
            <h1 className="font-semibold mb-4 text-center lg:text-left">
              <span className="text-judbr-main text-3xl sm:text-4xl lg:text-5xl">Advogado,</span>
              <span className="text-judbr-gray-dark text-4xl sm:text-5xl lg:text-6xl block mt-2">
                gerencie o sistema do seu escritório
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-judbr-gray-dark mb-6 text-center lg:text-left">
              Permita que seus clientes acompanhem o status dos seus processos diretamente do sistema do seu escritório.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <button className="bg-judbr-main text-white px-6 py-3 rounded-full hover:bg-judbr-dark transition duration-300 text-sm sm:text-base w-full sm:w-auto">
                Quero lançar meu sistema
              </button>
              <button className="bg-white text-judbr-main px-6 py-3 rounded-full border border-judbr-main hover:bg-gray-100 transition duration-300 text-sm sm:text-base w-full sm:w-auto">
                Ver planos e preços
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center justify-center lg:justify-start">
                <svg className="w-5 h-5 text-judbr-main inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sistema Web e Mobile</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <svg className="w-5 h-5 text-judbr-main inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Com sua marca</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <svg className="w-5 h-5 text-judbr-main inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Acompanhamento de processo</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <svg className="w-5 h-5 text-judbr-main inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Integrado ao ChatGPT</span>
              </div>
            </div>
          </div>
          
          {/* Right side: Image */}
          <div className="w-full lg:w-5/12 relative mt-12 lg:mt-0">
          <video 
                  src="/video/pratice-panther.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-auto md:max-w-[150%] lg:max-w-[160%] xl:1380:max-w-[100%] mx-auto rounded-lg animate-fade-in-up"
                > </video>
            <div className="absolute top-1/4 -left-4 bg-white p-3 rounded-lg shadow-md hidden sm:flex items-center space-x-2 animate-fade-in-up" style={{ animationDelay: '0.10s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-judbr-main" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-sm text-judbr-gray-dark font-semibold">Consultas de Processos</span>
          </div>
          <div className="absolute top-1/2 -right-4 bg-white p-3 rounded-lg shadow-md hidden sm:flex items-center space-x-2 animate-fade-in-up" style={{ animationDelay: '0.20s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-judbr-main" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-judbr-gray-dark font-semibold">Atualização de processos</span>
          </div>
          <div className="absolute bottom-1/4 -left-4 bg-white p-3 rounded-lg shadow-md hidden sm:flex items-center space-x-2 animate-fade-in-up" style={{ animationDelay: '0.30s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-judbr-main" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-judbr-gray-dark font-semibold">Processos</span>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}
