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
        <div className='hidden md:block mx-4 rounded-full bg-[#F4F7FE] p-4 animate-fade-right' >
      <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      </div>
    );
  };
export default function Steps() {
   const itemRef = Animation<HTMLDivElement>();

  return (
    <div  className="bg-white min-h-screen border-b border-gray-200">
      <main className="container mx-auto px-4 sm:px-6 lg:px-20 py-10 pt-20 pb-16">
        <div ref={itemRef} className="text-center opacity-0">
          <span className="text-judbr-main text-sm font-semibold border border-gray-200 rounded-full px-4 py-2">
            Nossos planos
          </span>
          <h1 className="text-4xl text-judbr-gray-dark sm:text-5xl font-bold mt-2 pt-3">
            Planos <span className="text-judbr-main">flexíveis</span> para sua necessidade
          </h1>
          <p className="text-lg sm:text-xl text-judbr-gray-light mt-4 max-w-3xl mx-auto">
            Independentemente do seu tamanho, nossos planos são 
            adaptáveis a realidade atual do seu escritório.
          </p>
        </div>
        <StepContent />
      </main>
    </div>
  );
}


function StepContent(){
    const itemRef = Animation<HTMLDivElement>();
    return (
        <div ref={itemRef} className='opacity-0'>
              <div  className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 mt-12 ">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex-1 text-center px-4">
                <div className="bg-purple-100 text-purple-600 font-semibold rounded-full  px-3 py-1 inline-block mb-4">
                  {step.passo}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.titulo}</h3>
                <p className="text-gray-600">{step.descricao}</p>
              </div>
              {index < steps.length - 1 && (
                
                  <ArrowIcon />
                
              )}
            </React.Fragment>
          ))}
        </div>
        </div>
    )
}