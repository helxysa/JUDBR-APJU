'use client'

import { Animation } from "../../useIntersectionAnimation/Animation";

export default function Funcionalidades() {
    const itemRef = Animation<HTMLDivElement>();

  return (
    <div ref={itemRef} className="bg-white min-h-screen pt-5 md:pt-10 opacity-0 ">
      <main className="container mx-auto px-4 sm:px-6 lg:px-[140px] pt-5 md:pt-10 4xl:-pb-[500px] 3xl:-pb-[130px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Andamento de processos */}
          <div className="bg-[#f8f9ff] rounded-xl p-4 sm:p-6">
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

          {/* Dúvidas de clientes */}
          <div className="bg-[#f8f9ff] rounded-xl p-4 sm:p-6">
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
              <AIItem name="ChatGPT 4" conversations={256} />
              <AIItem name="ChatGPT 3" conversations={124} />
              <AIItem name="Coverso" conversations={64} />
              <AIItem name="Botman" conversations={32} />
              <AIItem name="ChatGPT 4.1" conversations={1024} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ProcessItem({ avatar, title, description, date, isNew = false }: Readonly<{ avatar: React.ReactNode; title: string; description: string; date: string; isNew?: boolean }>) {
  const itemRef = Animation<HTMLDivElement>();

  return (
    <div ref={itemRef} className="flex items-start space-x-2 md:space-x-3 sm:space-x-4 opacity-0">
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

function AIItem({ name, conversations }: Readonly<{ name: string; conversations: number }>) {
  const itemRef = Animation<HTMLDivElement>();

  return (
    <div ref={itemRef} className="flex items-center justify-between bg-white rounded-lg p-2 sm:p-3 opacity-0">
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm">
          AI
        </div>
        <span className="font-medium text-sm sm:text-base">{name}</span>
      </div>
      <span className="text-xs sm:text-sm text-gray-500">{conversations} conversations</span>
    </div>
  );
}
