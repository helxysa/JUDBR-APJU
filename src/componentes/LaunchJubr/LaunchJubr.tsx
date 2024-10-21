import Funcionalidades from "./Funcionalidades/Funcionalidades";

export default function LaunchJubr() {
  return (
    <div className="bg-white min-h-screen  ">
      <main className="container mx-auto px-4 sm:px-20 py-6 sm:py-10 pt-10 sm:pt-20 pb-8 sm:pb-16 ">
        <div className="text-center">
          <span className="text-judbr-main text-xs sm:text-sm font-semibold border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-2">
            Gerencie seu escritório
          </span>
          <h1 className="text-3xl sm:text-4xl text-judbr-gray-dark sm:text-5xl font-bold mt-2 pt-3 sm:pt-5">
            Otimize a <span className="text-judbr-main">gestão do seu escritório</span> e <br className="hidden sm:inline" />
            aumente sua produtividade
          </h1>
          <p className="text-base sm:text-lg sm:text-xl text-judbr-gray-light mt-3 sm:mt-4 max-w-3xl mx-auto">
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
  )
}