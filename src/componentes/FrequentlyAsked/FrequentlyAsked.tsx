'use client'

import { useState } from 'react'
import { Animation } from "../useIntersectionAnimation/Animation"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
    {
      question: "O que é software de gerenciamento de prática jurídica?",
      answer: "Software de gerenciamento de prática jurídica ou software de gerenciamento de prática legal é um tipo de software projetado especificamente para ajudar equipes jurídicas a gerenciar suas práticas e relacionamentos com clientes. Ele serve como um hub digital onde equipes jurídicas podem armazenar e organizar informações críticas de caso, contato e documento, permitindo que eles acessem e rastream as informações necessárias para lidar com casos de forma eficaz."
    },
    {
      question: "Como funciona o teste gratuito?",
      answer: "  Nosso teste gratuito permite que você experimente todas as funcionalidades do nosso software de gerenciamento de prática jurídica por 14 dias, sem compromisso. Durante este período, você terá acesso completo a todas as ferramentas e recursos, podendo avaliar como o sistema se adapta às necessidades do seu escritório. Para começar, basta se cadastrar em nosso site, fornecer algumas informações básicas e você estará pronto para explorar. Não é necessário fornecer dados de cartão de crédito para iniciar o teste. Ao final do período, você pode optar por assinar um plano ou simplesmente deixar a conta expirar sem custos adicionais."
    },
    {
      question: "O software é seguro?",
      answer: "Sim, o software é seguro e confiável. Nós nos preocupamos com a segurança dos dados dos nossos usuários. Todos os dados são armazenados de forma segura e não são compartilhados com terceiros."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim, você pode cancelar a qualquer momento. Não há necessidade de fornecer uma razão para cancelar. Você pode fazer isso acessando sua conta e selecionando a opção de cancelamento."
    },
    {
      question: "Há suporte técnico disponivel?",
      answer: "Sim, temos suporte técnico disponível para ajudar você com qualquer problema que possa surgir. Você pode entrar em contato com nosso suporte técnico através do e-mail suporte@judbr.com.br."
    },
    {
      question: "O que é o JUDBR?",
      answer: "O JUDBR é um software de gerenciamento de prática jurídica que ajuda equipes jurídicas a gerenciar suas práticas e relacionamentos com clientes. Ele serve como um hub digital onde equipes jurídicas podem armazenar e organizar informações críticas de caso, contato e documento, permitindo que eles acessem e rastream as informações necessárias para lidar com casos de forma eficaz..."
    },
  ];
  
export default function FrequentlyAsked() {
  const itemRef = Animation<HTMLDivElement>()

  return (
    <section className="py-12 md:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-judbr-main text-xs md:text-sm font-semibold border-2 border-judbr-main/20 rounded-full px-3 py-1 md:px-4 md:py-2 mb-2 sm:mb-4 bg-white shadow-sm hover:shadow-md transition-all duration-300">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-judbr-gray-dark pt-3 font-bold mt-2 sm:mt-4">
            <span className="text-judbr-main">Perguntas </span>
            <span className="text-judbr-gray-dark">Frequentes</span>
          </h2>
        </div>
        <div ref={itemRef} className="max-w-7xl mx-auto space-y-4 mt-8 md:mt-10 lg:mt-12">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div 
      onClick={toggleOpen}
      className="bg-white rounded-2xl p-5 transform hover:-translate-y-1 transition-all duration-500 border-2 border-gray-100 hover:border-judbr-main/30 hover:shadow-[0_25px_70px_rgba(8,_112,_184,_0.2)] group relative backdrop-blur-sm cursor-pointer"
    >
      <div className="flex justify-between items-center w-full">
        <span className="font-bold text-judbr-gray-dark text-lg md:text-xl">{question}</span>
        <span className={`ml-6 flex-shrink-0 text-judbr-main transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pt-4 text-gray-600 text-base md:text-lg leading-relaxed">
          {answer}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-judbr-main/5 via-transparent to-transparent rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  )
}