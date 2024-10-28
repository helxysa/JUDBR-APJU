'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function QuemSomos() {

    const [text, setText] = useState('');
  const fullText = '';
  const typingSpeed = 50; 

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);


  
    return (
      <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
        {/* Hero Section */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Header */}
          <div className="text-center mb-16 pt-6">
            <h1 className="text-4xl font-bold">
              <span className="text-judbr-main">Quem</span>
              <span className="text-judbr-gray-dark"> Somos</span>
            </h1>
            <div className="w-24 h-1 bg-judbr-main mx-auto mt-4 rounded-full" />
          </div>
          <div className=" pb-20 flex flex-col md:flex-row items-center justify-between gap-8 px-4 max-w-7xl mx-auto">
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image 
                        src="/images/moca sentada.png" 
                        alt="Quem Somos" 
                        width={1000} 
                        height={1000}
                        className="w-full max-w-md h-auto"
                    />
                </div>
            <div className="w-full md:w-1/2">
                    <p className="text-gray-700 text-xl md:text-2xl leading-relaxed text-left max-w-xl">
                        Nossa missão é tornar a vida dos <span className="text-judbr-main font-medium">advogados e paralegais mais fácil</span>. 
                        <br /><br />
                        Ajudamos os advogados a terem <span className="text-judbr-main font-medium">mais tempo para advogar</span> e menos tempo 
                        para gerenciar, com nosso software de gestão jurídica desenvolvido 
                        pensando em você e seu escritório.
                        <br /><br />
                        Estamos aqui para ouvir. 
                        Somos <span className="text-judbr-main font-medium">mais que uma empresa de tecnologia jurídica</span>, somos seu parceiro 
                        para o sucesso.
                    </p>
                </div>
            </div>
        
          
          <div className="mt-32 mb-24">
            <h2 className="text-4xl font-bold text-center mb-20">
              <span className="text-judbr-main">Nossa</span>   <span className="text-judbr-gray-dark">História</span>
              <div className="w-24 h-1 bg-judbr-main mx-auto mt-4 rounded-full" />
            </h2>
            
            <div className="relative max-w-6xl mx-auto px-4">
              {/* Linha horizontal */}
              <div className="absolute h-1 bg-gradient-to-r from-judbr-main/40 via-judbr-main to-judbr-main/40 w-full top-8 hidden md:block"></div>
              
              {/* Timeline items */}
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-16 md:space-y-0">
                {/* 2020 */}
                <div className="group flex flex-col items-center w-full md:w-1/4 relative">
                  <div className="w-6 h-6 bg-white border-4 border-judbr-main rounded-full mb-4 z-10 
                                group-hover:scale-150 group-hover:bg-judbr-main transition-all duration-300"></div>
                  <div className="p-6  transform group-hover:-translate-y-2 
                                transition-all duration-300 w-64">
                    <h3 className="text-2xl font-bold mb-2 text-judbr-main text-center">2020</h3>
                    <p className="text-center text-gray-600">
                      Nasce o JudBR com a missão de revolucionar a gestão jurídica
                    </p>
                  </div>
                </div>

                {/* 2021 */}
                <div className="group flex flex-col items-center w-full md:w-1/4 relative">
                  <div className="w-6 h-6 bg-white border-4 border-judbr-main rounded-full mb-4 z-10 
                                group-hover:scale-150 group-hover:bg-judbr-main transition-all duration-300"></div>
                  <div className=" p-6  transform group-hover:-translate-y-2 
                                transition-all duration-300 w-64">
                    <h3 className="text-2xl font-bold mb-2 text-judbr-main text-center">2021</h3>
                    <p className="text-center text-gray-600">
                      Expansão nacional e consolidação da plataforma
                    </p>
                  </div>
                </div>

                {/* 2022 */}
                <div className="group flex flex-col items-center w-full md:w-1/4 relative">
                  <div className="w-6 h-6  border-4 border-judbr-main rounded-full mb-4 z-10 
                                group-hover:scale-150 group-hover:bg-judbr-main transition-all duration-300"></div>
                  <div className=" p-6  transform group-hover:-translate-y-2 
                                transition-all duration-300 w-64">
                    <h3 className="text-2xl font-bold mb-2 text-judbr-main text-center">2022</h3>
                    <p className="text-center text-gray-600">
                      Mais de 1000 escritórios confiam em nossas soluções
                    </p>
                  </div>
                </div>

                {/* 2023 */}
                <div className="group flex flex-col items-center w-full md:w-1/4 relative">
                  <div className="w-6 h-6 bg-white border-4 border-judbr-main rounded-full mb-4 z-10 
                                group-hover:scale-150 group-hover:bg-judbr-main transition-all duration-300"></div>
                  <div className="e p-6 transform group-hover:-translate-y-2 
                                transition-all duration-300 w-64">
                    <h3 className="text-2xl font-bold mb-2 text-judbr-main text-center">2023</h3>
                    <p className="text-center text-gray-600">
                      Inovação contínua com novas funcionalidades
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CardQuemSomos />
          <Leadership />



        </main>

      </div>
      
    );
  }



  function CardQuemSomos() {
    return (
      <div className="mt-32 mb-24  py-12 rounded-3xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-judbr-main">Nossos</span> <span className="text-judbr-gray-dark">Valores</span>
          <div className="w-24 h-1 bg-judbr-main mx-auto mt-4 rounded-full" />
        </h2>
  
        {/* Container para os cards em linha */}
        <div className="flex flex-col md:flex-row justify-center gap-6 px-4 max-w-6xl mx-auto">
          {/* Inovação */}
          <div className="flex-1 flex border-2 border-judbr-main flex-col hover:shadow-lg hover:bg-white items-center text-center py-4 px-4 bg-gray-50 shadow-md rounded-lg transition-all duration-300">
            <div className="mb-2 text-judbr-main">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-judbr-gray-dark mb-1">Inovação</h3>
            <p className="text-gray-600 text-xs">Buscamos constantemente novas soluções para melhorar a experiência dos nossos clientes</p>
          </div>
  
          {/* Excelência */}
          <div className="flex-1 flex flex-col border-2 border-judbr-main hover:shadow-lg hover:bg-white items-center text-center py-4 px-4 bg-gray-50 shadow-md rounded-lg transition-all duration-300">
            <div className="mb-2 text-judbr-main">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-judbr-gray-dark mb-1">Excelência</h3>
            <p className="text-gray-600 text-xs">Comprometimento com a qualidade em tudo o que fazemos</p>
          </div>
          
          <div className="flex-1 flex flex-col border-2 border-judbr-main hover:shadow-lg hover:bg-white items-center text-center py-4 px-4 bg-gray-50 shadow-md rounded-lg transition-all duration-300">
            <div className="mb-2 text-judbr-main">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-judbr-gray-dark mb-1">Excelência</h3>
            <p className="text-gray-600 text-xs">Comprometimento com a qualidade em tudo o que fazemos</p>
          </div>

          <div className="flex-1 flex flex-col border-2 border-judbr-main hover:shadow-lg hover:bg-white items-center text-center py-4 px-4 bg-gray-50 shadow-md rounded-lg transition-all duration-300">
            <div className="mb-2 text-judbr-main">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-judbr-gray-dark mb-1">Excelência</h3>
            <p className="text-gray-600 text-xs">Comprometimento com a qualidade em tudo o que fazemos</p>
          </div>
  
          {/* Confiança */}
          <div className="flex-1 flex border-2 border-judbr-main flex-col hover:shadow-lg hover:bg-white items-center text-center py-4 px-4 bg-gray-50 shadow-md rounded-lg transition-all duration-300">
            <div className="mb-2 text-judbr-main">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-judbr-gray-dark mb-1">Confiança</h3>
            <p className="text-gray-600 text-xs">Construímos relacionamentos duradouros baseados em transparência e segurança</p>
          </div>
        </div>
        

        
      </div>
    )
  }


  function Leadership() {
    return (
      <div className="mt-32 mb-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-judbr-main">Nossa</span> <span className="text-judbr-gray-dark">Liderança</span>
          <div className="w-24 h-1 bg-judbr-main mx-auto mt-4 rounded-full " />
        </h2>
  
        <div className="flex flex-col md:flex-row justify-center gap-8 px-4 max-w-6xl mx-auto pt-10">
          {/* Card de Liderança 1 */}
          <div className="flex-1 bg-white rounded-xl overflow-visible shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                {/* Image container with light blue background */}
                <div className="bg-blue-50 pt-24 pb-20 rounded-t-xl">
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                    <div className=" p-4 rounded-full">
                        <Image 
                        src="/images/cara1.png" 
                        alt="João Silva" 
                        width={140} 
                        height={100}
                        className="rounded-full"
                        />
                    </div>
                    </div>
                </div>
                
                {/* Content section */}
                <div className="p-6 text-center">
                    <p className="text-sm text-judbr-main font-semibold uppercase tracking-wider mb-2">
                    CEO
                    </p>
                    <h3 className="text-xl font-bold text-judbr-gray-dark mb-2">
                    João Silva
                    </h3>
                </div>
                </div>
  
          {/* Card de Liderança 2 */}
          <div className="flex-1 bg-white rounded-xl overflow-visible shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                {/* Image container with light blue background */}
                <div className="bg-blue-50 pt-24 pb-20 rounded-t-xl">
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                    <div className=" p-4 rounded-full">
                        <Image 
                        src="/images/cara1.png" 
                        alt="João Silva" 
                        width={140} 
                        height={100}
                        className="rounded-full"
                        />
                    </div>
                    </div>
                </div>
                
                {/* Content section */}
                <div className="p-6 text-center">
                    <p className="text-sm text-judbr-main font-semibold uppercase tracking-wider mb-2">
                    CTO
                    </p>
                    <h3 className="text-xl font-bold text-judbr-gray-dark mb-2">
                    Pedro Santos
                    </h3>
                </div>
                </div>
  


                <div className="flex-1 bg-white rounded-xl overflow-visible shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                {/* Image container with light blue background */}
                <div className="bg-blue-50 pt-24 pb-20 rounded-t-xl">
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                    <div className=" p-4 rounded-full">
                        <Image 
                        src="/images/cara1.png" 
                        alt="João Silva" 
                        width={140} 
                        height={100}
                        className="rounded-full"
                        />
                    </div>
                    </div>
                </div>
                
                {/* Content section */}
                <div className="p-6 text-center">
                    <p className="text-sm text-judbr-main font-semibold uppercase tracking-wider mb-2">
                    CTO
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