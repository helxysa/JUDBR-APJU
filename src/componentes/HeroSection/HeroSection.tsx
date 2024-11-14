'use client'

import { useState, useEffect } from 'react';
import Link from "next/link";
import Button from "../Button/Button";

export default function HeroSection() {
  const [text, setText] = useState('');
  const fullText = 'gerencie o sistema do seu escritório';
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
    <div className="bg-judbr-bg-dark max-h-screen 2xl:px-40 md:pb-40 pb-[40px] sm:pb-20">
      <main className="container mx-auto px-10 sm:px-6 md:px-6 4xl:px-[180px] 3xl:px-[120px] py-10 pt-20 lg:py-[170px] pb-16 lg:pb-0">
        <div className="flex flex-col lg:flex-row items-center justify-around">
          <div className="w-full lg:w-5/12">
            <h1 className="font-semibold mb-6 text-center lg:text-left">
              <span className="text-judbr-main text-4xl sm:text-3xl lg:text-5xl font-bold">
                Advogado,
              </span>
              <span className="text-judbr-gray-dark text-3xl sm:text-5xl lg:text-4xl block mt-3 mr-10">
                {text}
                <span className="inline-block w-3 h-3 bg-purple-600 rounded-full ml-1 animate-pulse"></span>
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-5 mb-10 justify-center lg:justify-start">
              <Button 
                href="https://app.judbr.com.br/auth/register/" 
                target="_blank" 
                text="Experimente Grátis" 
                className="px-3 py-3 w-full sm:w-auto"
              />
              <Link 
                href="/#precos" 
                className="bg-white text-judbr-main px-6 py-3 rounded-full border border-judbr-main hover:bg-gray-100 transition duration-300 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Acompanhamento de processos
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-gray-700 mt-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-8 sm:w-5">
                  <svg className="w-full h-full text-judbr-main" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium text-sm sm:text-base ml-2 sm:ml-3">Acessos aos arquivos</span>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-8 sm:w-5">
                  <svg className="w-full h-full text-judbr-main" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium text-sm sm:text-base ml-2 sm:ml-3">Agenda de compromissos</span>
              </div>

              <div className="flex items-center col-span-2 lg:col-span-1">
                <div className="flex-shrink-0 w-8 sm:w-5">
                  <svg className="w-full h-full text-judbr-main" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium text-sm sm:text-base ml-2 sm:ml-3">Gestão de prazos</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-5/12 relative mt-12 lg:mt-0">
          <video 
                  src="/video/jubr-gif.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-auto sm:max-w-[70%] md:max-w-[30%] lg:max-w-[160%] xl:1380:max-w-[100%] mx-auto rounded-xl shadow-lg animate-fade-in-up-2"
                > </video>
           <div className="absolute top-1/4 -left-20 bg-white p-4 rounded-xl shadow-lg hidden md:flex lg:flex items-center space-x-3 animate-fade-in-up-2 opacity-0 hover:transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-judbr-main" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-sm text-judbr-gray-dark font-semibold">Consultas de Processos</span>
          </div>
          <div className="absolute top-1/2 -right-20 bg-white p-4 rounded-xl shadow-lg hidden sm:flex items-center hidden md:flex lg:flex space-x-3 animate-fade-in-up opacity-0 hover:transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-judbr-main" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-judbr-gray-dark font-semibold">Atualização de processos</span>
          </div>
          <div className="absolute bottom-1/4 -left-20 bg-white p-4 rounded-xl shadow-lg hidden md:flex lg:flex items-center space-x-3 animate-fade-in-up opacity-0 hover:transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
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
