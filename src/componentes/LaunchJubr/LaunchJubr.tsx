import Funcionalidades from "./Funcionalidades/Funcionalidades";

export default function LaunchJubr() {
  return (
    <div className=" min-h-screen  4xl:max-h-screen 4xl:mb-[420px]  w-full max-w-screen-2xl 4xl:max-w-screen-3xl mx-auto">
      <main className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
        <div className="text-center">
          <span className="text-judbr-main text-xs sm:text-sm font-semibold border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-2 inline-block mb-2 sm:mb-4">
            Gerencie seu escritório
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-judbr-gray-dark font-bold mt-2 sm:mt-4">
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
  )
}