'use client'

import { Animation } from "../useIntersectionAnimation/Animation";
import Button from "../Button/Button";

export default function LaunchJubr() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50" id="solucoes">
      <div className="w-full max-w-screen-2xl 4xl:max-w-screen-3xl mx-auto pb-16 md:pb-16">
        <main className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
          <div className="text-center pt-10">
          <span className="text-judbr-main text-xs md:text-sm font-semibold border-2 border-judbr-main/20 rounded-full px-3 py-1 md:px-4 md:py-2 mb-2 sm:mb-4 bg-white shadow-sm hover:shadow-md transition-all duration-300">
            Gerencie seu escritório
          </span>
            <h1 className="text-2xl  pt-4 sm:text-3xl md:text-4xl lg:text-5xl text-judbr-gray-dark font-bold mt-2 sm:mt-4">
              Otimize a <span className="text-judbr-main">gestão do seu escritório</span> e <br className="hidden sm:inline" />
              aumente sua produtividade
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-judbr-gray-light mt-3 sm:mt-4 max-w-3xl mx-auto">
              Oferecemos uma <span className="text-judbr-main">solução completa</span> para o{" "}
              <span className="text-judbr-main">gerenciamento do seu escritório de advocacia</span>.{" "}
              Aumente a <span className="text-judbr-main">eficiência</span> e{" "}
              <span className="text-judbr-main">satisfação dos clientes</span> com nossa plataforma 
              integrada disponível <span className="text-judbr-main">24 horas por dia, 7 dias por semana</span>.
            </p>
          </div>
        </main>
        <Funcionalidades />
      </div>
    </div>
  )
}

function Funcionalidades() {
  const itemRef = Animation<HTMLDivElement>();

  return (
    <div ref={itemRef} className="w-full opacity-0 transform translate-y-4 transition-all duration-700 ease-out">
      <main className="container mx-auto px-4 sm:px-6 lg:px-[140px] pt-10">
        <div className="rounded-xl p-6 lg:p-[70px] bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
              <h3 className="text-judbr-main font-semibold mb-2 text-lg">
                Funcionalidades
              </h3>
              <h2 className="text-1xl sm:text-2xl lg:text-5xl font-bold text-judbr-gray-dark mb-4 leading-tight">
                Gerencie o sistema do seu escritório
              </h2>
              <p className="text-base sm:text-lg text-judbr-gray-dark mb-8 max-w-xl">
                Desenvolvemos os recursos essenciais para atender os seus
                clientes e melhorar o seu serviço.
              </p>
              <Button href="https://app.judbr.com.br/auth/register/" target="_blank" text="Experimente Gratis" className=" px-8 py-3" />
            </div>

            <div className="w-full lg:w-5/12 mt-8 lg:mt-0">
              <div className="space-y-6">
                <FeatureItem
                  icon={<PhoneIcon />}
                  text="Aplicativo Android e iOS"
                />
                <FeatureItem
                  icon={<AIIcon />}
                  text="Inteligência artificial para dúvidas de clientes"
                />
                <FeatureItem
                  icon={<UpdateIcon />}
                  text="Atualização de processos"
                />
                <FeatureItem
                  icon={<BrandingIcon />}
                  text="Totalmente personalizado com sua marca"
                />
              </div>
            </div>
          </div>
        </div>
        
      </main>
      <AndamentoProcessos />
    </div>
  );
}

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center space-x-4 rounded-lg p-2 hover:bg-white/60 transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-md">
      <div className="w-10 h-10 backdrop-blur-sm rounded-full flex items-center justify-center text-judbr-main flex-shrink-0">
        {icon}
      </div>
      <span className="text-gray-800 text-xm font-medium">{text}</span>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      ></path>
    </svg>
  );
}

function AIIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      ></path>
    </svg>
  );
}

function UpdateIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      ></path>
    </svg>
  );
}

function BrandingIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      ></path>
    </svg>
  );
}

function AndamentoProcessos() {
  const leftColumnRef = Animation<HTMLDivElement>();
  const rightColumnRef = Animation<HTMLDivElement>();

  return (
    <div className="w-full pt-2 md:pt-10">
      <main className="container mx-auto px-2 sm:px-6 lg:px-[140px] pt-2 md:pt-10 pb-8 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
          <div 
            ref={leftColumnRef} 
            className="rounded-xl p-3 sm:p-6 bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 transform translate-y-4"
          >
            <h3 className="text-judbr-main font-semibold mb-2 text-base sm:text-lg">
              Andamento de processos
            </h3>
            <h2 className="text-xl sm:text-2xl font-bold text-judbr-gray-dark mb-3 sm:mb-4">
              Acompanhamento intuitivo
            </h2>
            <p className="text-sm sm:text-base text-judbr-gray-dark mb-4 sm:mb-6">
              Seu cliente irá acompanhar o processo de maneira intuitiva e em tempo real.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <ProcessItem
                avatar={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 text-judbr-main">
                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                  </svg>
                }
                title="Movimentação do tribunal"
                description="Anexo Juntado: Acórdão | Intimação. Ver documento"
                date="Hoje"
                isNew={true}
              />
              <ProcessItem
                avatar={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 text-judbr-main">
                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                  </svg>
                }
                title="Movimentação do tribunal"
                description="Audiência de instrução realizada (02/02/2023 15:30)"
                date="19 Nov"
              />
            </div>
          </div>

          <div 
            ref={rightColumnRef} 
            className="rounded-xl p-3 sm:p-6 bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 transform translate-y-4"
          >
            <h3 className="text-judbr-main font-semibold mb-2 text-base sm:text-lg">
              Dúvidas de clientes
            </h3>
            <h2 className="text-xl sm:text-2xl font-bold text-judbr-gray-dark mb-3 sm:mb-4">
              Inteligência Artificial
            </h2>
            <p className="text-sm sm:text-base text-judbr-gray-dark mb-4 sm:mb-6">
              O seu cliente poderá entender cada atualização, por meio de uma IA que explica cada acontecimento.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <AIItem 
                name="Audiência Marcada" 
                conversations="Explicação sobre procedimentos e documentos necessários"
              />
              <AIItem 
                name="Novo Documento" 
                conversations="Interpretação de termos jurídicos em linguagem simples"
              />
              <AIItem 
                name="Prazo Processual" 
                conversations="Esclarecimentos sobre prazos e próximos passos"
              />
              <AIItem 
                name="Decisão Judicial" 
                conversations="Análise do impacto da decisão no processo"
              />
              <AIItem 
                name="Custas Processuais" 
                conversations="Explicação sobre valores e formas de pagamento"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ProcessItem({ avatar, title, description, date, isNew = false }: Readonly<{ avatar: React.ReactNode; title: string; description: string; date: string; isNew?: boolean }>) {
  return (
    <div className="flex items-start space-x-2 md:space-x-3 sm:space-x-4 transition-all duration-300">
      <div className="w-8 h-8 sm:w-10 sm:h-10">{avatar}</div>
      <div className="flex-1">
        <div className="flex items-center flex-wrap">
          <h4 className="font-medium text-gray-800 text-sm sm:text-base">{title}</h4>
          {isNew && (
            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
              New
            </span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{date}</p>
      </div>
    </div>
  );
}

function AIItem({ name, conversations }: Readonly<{ name: string; conversations: string }>) {
  return (
    <div className="flex items-center justify-between rounded-lg p-2 sm:p-3 hover:bg-white/60 transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-md">
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-judbr-main rounded-full flex items-center justify-center text-white text-xs sm:text-sm shadow-inner">
          AI
        </div>
        <span className="font-medium text-sm sm:text-base">{name}</span>
      </div>
      <span className="text-xs sm:text-sm text-gray-500">{conversations}</span>
    </div>
  );
}


