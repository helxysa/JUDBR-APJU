'use client'

import { useEffect, useRef } from "react";
import { Animation } from "../../useIntersectionAnimation/Animation";

export default function Funcionalidades() {
    const itemRef = Animation<HTMLDivElement>();

  return (
    <div ref={itemRef} className="bg-white min-h-screen pt-5 md:pt-10 opacity-0">
      <main className="container mx-auto px-4 sm:px-6 lg:px-[140px] pt-5 md:pt-10">
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
                avatar="/path-to-avatar1.jpg"
                title="Movimentação do tribunal"
                description="Anexo Juntado: Acórdão | Intimação. Ver documento"
                date="Hoje"
                isNew={true}
              />
              <ProcessItem
                avatar="/path-to-avatar2.jpg"
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

function ProcessItem({ avatar, title, description, date, isNew = false }: { avatar: string; title: string; description: string; date: string; isNew?: boolean }) {
    const itemRef = Animation<HTMLDivElement>();

  return (
    <div ref={itemRef} className="flex items-start space-x-2 md:space-x-3 sm:space-x-4 opacity-0">
      <img src={avatar} alt="" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
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

function AIItem({ name, conversations }: { name: string; conversations: number }) {
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