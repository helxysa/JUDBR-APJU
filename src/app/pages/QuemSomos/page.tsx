'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {Animation} from '../../../componentes/useIntersectionAnimation/Animation';

export default function QuemSomos() {



  const itemRef = Animation<HTMLDivElement>();


    return (
      
      <div className=" py-12 md:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50 space-y-12" id="quem-somos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center max-w-6xl mx-auto">
          <main  className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div  className="text-center max-w-4xl mx-auto animate-fade-in mb-12 md:mb-20">
              
            <span className="text-judbr-main text-xs md:text-sm font-semibold border-2 border-judbr-main/20 rounded-full px-3 py-1 md:px-4 md:py-2 mb-2 sm:mb-4 bg-white shadow-sm hover:shadow-md transition-all duration-300">
            Quem somos
          </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-judbr-gray-dark font-bold mt-4 px-4">
                Conheça a{" "}
                <span className="text-judbr-main">nossa história</span>
              </h1>
              <div className="w-[280px] sm:w-[500px] h-1 bg-gradient-to-r from-judbr-main/20 via-judbr-main to-judbr-main/20 mx-auto mt-4 rounded-full" />
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-judbr-gray-light mt-6 max-w-2xl mx-auto px-4">
                Somos uma empresa focada em trazer soluções tecnológicas para escritórios de advocacia
              </p>
            </div>
            <Teste />
            <NossaHistoria />
            <CardQuemSomos />
            <Leadership />



          </main>
          </div>
        </div>
      </div>
  );
}

function Teste(){
  const itemRef = Animation<HTMLDivElement>();
  return (
    <div ref={itemRef}>
        <div className="pb-12 md:pb-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-4 md:px-6 max-w-7xl mx-auto">
  <div className="w-full md:w-1/2 group" >
    <div className="relative rounded-2xl overflow-hidden 
      transform transition-all duration-500 
      hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.2)]
      hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-t from-judbr-main/20 to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      <Image 
        src="/images/moca sentada.png" 
        alt="Quem Somos" 
        width={1000} 
        height={1000}
        className="w-full h-auto rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
        priority
      />
    </div>
  </div>

  <div className="w-full md:w-1/2 space-y-6 md:space-y-8 mt-8 md:mt-0">
    <div className="space-y-4 md:space-y-6">
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700">
        Nossa missão é tornar a vida dos{" "}
        <span className="text-judbr-main font-medium relative inline-block
         after:content-[''] after:absolute after:w-full after:h-2 
         after:bg-judbr-main/10 after:-bottom-1 after:left-0 after:-z-10
         hover:after:bg-judbr-main/20 after:transition-all after:duration-300">
          advogados e paralegais mais fácil
        </span>
      </p>

      <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700">
        Ajudamos os advogados a terem{" "}
        <span className="text-judbr-main font-medium relative inline-block
         after:content-[''] after:absolute after:w-full after:h-2 
         after:bg-judbr-main/10 after:-bottom-1 after:left-0 after:-z-10
         hover:after:bg-judbr-main/20 after:transition-all after:duration-300">
          mais tempo para advogar
        </span>{" "}
        e menos tempo para gerenciar, com nosso software de gestão jurídica desenvolvido pensando em você e seu escritório.
      </p>

      <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700">
        Estamos aqui para ouvir. Somos{" "}
        <span className="text-judbr-main font-medium relative inline-block
         after:content-[''] after:absolute after:w-full after:h-2 
         after:bg-judbr-main/10 after:-bottom-1 after:left-0 after:-z-10
         hover:after:bg-judbr-main/20 after:transition-all after:duration-300">
          mais que uma empresa de tecnologia jurídica
        </span>,{" "}
        somos seu parceiro para o sucesso.
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

function NossaHistoria() {
  const titleRef = Animation<HTMLDivElement>();
  const card2020Ref = Animation<HTMLDivElement>();
  const card2021Ref = Animation<HTMLDivElement>();
  const card2022Ref = Animation<HTMLDivElement>();
  const card2023Ref = Animation<HTMLDivElement>();

  const timelineItems = [
    {
      ref: card2020Ref,
      year: "2020",
      text: "Nasce o JudBR com a missão de revolucionar a gestão jurídica",
      side: "left"
    },
    {
      ref: card2021Ref,
      year: "2021",
      text: "Expansão nacional e consolidação da plataforma",
      side: "right"
    },
    {
      ref: card2022Ref,
      year: "2022",
      text: "Mais de 1000 escritórios confiam em nossas soluções",
      side: "left"
    },
    {
      ref: card2023Ref,
      year: "2023",
      text: "Inovação contínua com novas funcionalidades",
      side: "right"
    }
  ] as const;

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div ref={titleRef} className="text-center mb-12 md:mb-16 opacity-0">
        <h2 className="text-2xl md:text-4xl font-bold">
          <span className="text-judbr-main">Nossa </span> 
          <span className="text-judbr-gray-dark">História</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-judbr-main/20 via-judbr-main to-judbr-main/20 mx-auto mt-4 rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-judbr-main/20 via-judbr-main to-judbr-main/20"></div>

          <div className="space-y-12 md:space-y-24">
            {timelineItems.map((item) => (
              <div key={item.year} ref={item.ref} className="relative opacity-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="pl-12 md:pl-0 md:w-5/12">
                    {item.side === "left" && (
                      <TimelineCard year={item.year} text={item.text} />
                    )}
                  </div>

                  <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2">
                    <div className="w-8 h-8 bg-judbr-main rounded-full border-4 border-white shadow-lg hover:scale-125 transition-transform duration-300 hover:shadow-judbr-main/30"></div>
                  </div>

                  <div className="pl-12 md:pl-0 md:w-5/12">
                    {item.side === "right" && (
                      <TimelineCard year={item.year} text={item.text} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineCard({ year, text }: { year: string; text: string }) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg 
                transform transition-all duration-500
                hover:-translate-y-2
                border-2 border-gray-100 hover:border-judbr-main/30
                hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.15)]
                group">
      <span className="text-judbr-main font-bold text-lg md:text-xl block mb-2 
                    group-hover:scale-105 transition-transform duration-300">
        {year}
      </span>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed group-hover:text-gray-700">
        {text}
      </p>
      
      <div className="absolute inset-0 bg-gradient-to-b from-judbr-main/5 to-transparent 
                    rounded-xl md:rounded-2xl opacity-0 transition-opacity duration-300
                    group-hover:opacity-100"></div>
    </div>
  );
}

  function CardQuemSomos() {
    const itemRef = Animation<HTMLDivElement>();

    return (
      <div ref={itemRef} className="mt-8 md:mt-16 mb-8 md:mb-16 py-4 md:py-8 rounded-2xl md:rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-20">
          <span className="text-judbr-main">Nossos</span> <span className="text-judbr-gray-dark">Valores</span>
          <div className="w-24 h-1 bg-gradient-to-r from-judbr-main/20 via-judbr-main to-judbr-main/20 mx-auto mt-4 rounded-full" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex-1 group relative bg-white rounded-2xl p-10
                      transform hover:-translate-y-4 transition-all duration-500
                      border-2 border-gray-100 hover:border-judbr-main/30
                      hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.15)]
                      before:absolute before:inset-0 before:bg-gradient-to-b before:from-judbr-main/5 before:to-transparent before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-500
                      hover:before:opacity-100">
            <div className="relative">
              <div className="mb-8 text-judbr-main/80 group-hover:text-judbr-main transition-all duration-500 transform group-hover:scale-110">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-judbr-gray-dark mb-6 text-center group-hover:text-judbr-main transition-colors duration-500">
                Inovação
              </h3>
              <p className="text-gray-600 text-center text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                Buscamos constantemente novas soluções para melhorar a experiência dos nossos clientes
              </p>
            </div>
          </div>

          <div className="flex-1 group relative bg-white rounded-2xl p-10
                      transform hover:-translate-y-4 transition-all duration-500
                      border-2 border-gray-100 hover:border-judbr-main/30
                      hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.15)]
                      before:absolute before:inset-0 before:bg-gradient-to-b before:from-judbr-main/5 before:to-transparent before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-500
                      hover:before:opacity-100">
            <div className="relative">
              <div className="mb-8 text-judbr-main/80 group-hover:text-judbr-main transition-all duration-500 transform group-hover:scale-110">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-judbr-gray-dark mb-6 text-center group-hover:text-judbr-main transition-colors duration-500">
                Excelência
              </h3>
              <p className="text-gray-600 text-center text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                Comprometimento com a qualidade em tudo o que fazemos
              </p>
            </div>
          </div>

          <div className="flex-1 group relative bg-white rounded-2xl p-10
                      transform hover:-translate-y-4 transition-all duration-500
                      border-2 border-gray-100 hover:border-judbr-main/30
                      hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.15)]
                      before:absolute before:inset-0 before:bg-gradient-to-b before:from-judbr-main/5 before:to-transparent before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-500
                      hover:before:opacity-100">
            <div className="relative">
              <div className="mb-8 text-judbr-main/80 group-hover:text-judbr-main transition-all duration-500 transform group-hover:scale-110">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-judbr-gray-dark mb-6 text-center group-hover:text-judbr-main transition-colors duration-500">
                Integridade
              </h3>
              <p className="text-gray-600 text-center text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                Atuamos com transparência e ética em todas as nossas relações
              </p>
            </div>
          </div>

          <div className="flex-1 group relative bg-white rounded-2xl p-10
                      transform hover:-translate-y-4 transition-all duration-500
                      border-2 border-gray-100 hover:border-judbr-main/30
                      hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.15)]
                      before:absolute before:inset-0 before:bg-gradient-to-b before:from-judbr-main/5 before:to-transparent before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-500
                      hover:before:opacity-100">
            <div className="relative">
              <div className="mb-8 text-judbr-main/80 group-hover:text-judbr-main transition-all duration-500 transform group-hover:scale-110">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-judbr-gray-dark mb-6 text-center group-hover:text-judbr-main transition-colors duration-500">
                Foco no Cliente
              </h3>
              <p className="text-gray-600 text-center text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                Priorizamos a satisfação e o sucesso dos nossos clientes em cada decisão
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }


  function Leadership() {
    const itemRef = Animation<HTMLDivElement>();
    return (
      <div ref={itemRef} className="mt-8 md:mt-16 mb-8 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-20">
          <span className="text-judbr-main">Nossa</span> <span className="text-judbr-gray-dark">Liderança</span>
          <div className="w-24 h-1 bg-gradient-to-r from-judbr-main/20 via-judbr-main to-judbr-main/20 mx-auto mt-4 rounded-full" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-12 md:gap-8 px-4 max-w-6xl mx-auto pt-10">
          <div className="flex-1 bg-white rounded-xl overflow-visible 
                      shadow-lg hover:shadow-2xl transition-all duration-300 
                      relative transform hover:-translate-y-2">
            <div className="bg-gradient-to-b from-blue-50 to-white pt-24 pb-20 rounded-t-xl">
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2
                          hover:scale-105 transition-transform duration-300">
                <div className="p-4 rounded-full bg-white shadow-lg">
                  <Image 
                    src="/images/cara1.png" 
                    alt="João Silva" 
                    width={140} 
                    height={140}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm text-judbr-main font-semibold uppercase tracking-wider mb-2">
                CEO
              </p>
              <h3 className="text-xl font-bold text-judbr-gray-dark mb-2">
                João Silva
              </h3>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-xl overflow-visible 
                      shadow-lg hover:shadow-2xl transition-all duration-300 
                      relative transform hover:-translate-y-2">
            <div className="bg-gradient-to-b from-blue-50 to-white pt-24 pb-20 rounded-t-xl">
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2
                          hover:scale-105 transition-transform duration-300">
                <div className="p-4 rounded-full bg-white shadow-lg">
                  <Image 
                    src="/images/cara1.png" 
                    alt="Pedro Santos" 
                    width={140} 
                    height={140}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm text-judbr-main font-semibold uppercase tracking-wider mb-2">
                CTO
              </p>
              <h3 className="text-xl font-bold text-judbr-gray-dark mb-2">
                Pedro Santos
              </h3>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-xl overflow-visible 
                      shadow-lg hover:shadow-2xl transition-all duration-300 
                      relative transform hover:-translate-y-2">
            <div className="bg-gradient-to-b from-blue-50 to-white pt-24 pb-20 rounded-t-xl">
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2
                          hover:scale-105 transition-transform duration-300">
                <div className="p-4 rounded-full bg-white shadow-lg">
                  <Image 
                    src="/images/cara1.png" 
                    alt="Pedro Oliveira" 
                    width={140} 
                    height={140}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm text-judbr-main font-semibold uppercase tracking-wider mb-2">
                COO
              </p>
              <h3 className="text-xl font-bold text-judbr-gray-dark mb-2">
                Pedro Oliveira
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }