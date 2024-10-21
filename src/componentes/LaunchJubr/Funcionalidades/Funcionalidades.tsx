'use client'

import Button from "../../Button/Button";
import AndamentoProcessos from "../AndamentodeProcessos/AndamentoProcessos";
import { Animation } from "../../useIntersectionAnimation/Animation";

export default function Funcionalidades() {
const itemRef = Animation<HTMLDivElement>();

  return (
    <div ref={itemRef} className="bg-white min-h-screen pt-10 opacity-0  border-b border-gray-200 ">
      <main className="container mx-auto px-4 sm:px-6 lg:px-[140px] pt-10">
        <div className="bg-[#f8f9ff] rounded-1xl p-6 lg:p-[70px] rounded-xl ">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left side content */}
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

            {/* Right side: Features */}
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
    const itemRef = Animation<HTMLDivElement>();

  return (
    <div ref={itemRef} className="flex items-center space-x-4 bg-white rounded-lg p-2 opacity-0">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-judbr-main flex-shrink-0">
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
