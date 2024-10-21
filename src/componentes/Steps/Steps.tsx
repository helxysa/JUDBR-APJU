'use client'
import React from 'react';
import { Animation } from '../useIntersectionAnimation/Animation'

interface Step {
  passo: string;
  titulo: string;
  descricao: string;
}

const steps: Step[] = [
  {
    passo: "PASSO 1",
    titulo: "Escolha um plano",
    descricao: "Escolha um plano de acordo com sua quantidade de processos."
  },
  {
    passo: "PASSO 2",
    titulo: "Desenvolvimento",
    descricao: "Desenvolvemos o seu aplicativo com sua marca e do seu painel administrativo."
  },
  {
    passo: "PASSO 3",
    titulo: "Publicação",
    descricao: "Após a publicação, podemos importar os seus processos e auxiliamos em sua campanha para seus clientes baixarem o app"
  }
];

const ArrowIcon = () => {
  return (
    <div className='hidden md:block mx-2 lg:mx-4 rounded-full bg-[#F4F7FE] p-2 lg:p-3 animate-fade-right'>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

//3XL - Monitor Medio
// 4xl Monitor Grande
//LG: Notebook em geral
//m: Tablet 
//sm: Mobile

export default function Steps() {
  const itemRef = Animation<HTMLDivElement>();

  return (
    <div className="bg-white min-h-screen  4xl:-mb-[700px]  border-b border-gray-200 ">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 lg:py-12 xl:py-16 3xl:-pb-[230px]">
        <div ref={itemRef} className="text-center opacity-0 max-w-4xl mx-auto">
          <span className="text-judbr-main text-xs md:text-sm font-semibold border border-gray-200 rounded-full px-3 py-1 md:px-4 md:py-2">
            Como Funciona
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-judbr-gray-dark font-bold mt-2 pt-2 md:pt-3">
            Veja como funciona <span className="text-judbr-main">nosso processo</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-judbr-gray-light mt-3 md:mt-4">
            Como funciona o gerenciamento do seu escritório com a Judbr
          </p>
        </div>
        <StepContent />
      </main>
    </div>
  );
}

function StepContent() {
  const itemRef = Animation<HTMLDivElement>();
  return (
    <div ref={itemRef} className='opacity-0 mt-8 md:mt-10 lg:mt-12'>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-7 3xl:space-x-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex-1 text-center px-2 md:px-3 lg:px-4 max-w-xs">
              <div className="bg-purple-100 text-purple-600 text-xs md:text-sm font-semibold rounded-full px-2 py-1 md:px-3 md:py-1 inline-block mb-3">
                {step.passo}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{step.titulo}</h3>
              <p className="text-sm md:text-base text-gray-600">{step.descricao}</p>
            </div>
            {index < steps.length - 1 && <ArrowIcon />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}