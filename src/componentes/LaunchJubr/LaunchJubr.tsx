import Funcionalidades from "./Funcionalidades/Funcionalidades";

export default function LaunchJubr() {
  return (
    <div className="bg-white min-h-screen">
      <main className="container mx-auto px-20 py-10 pt-20 pb-16">
        <div className="text-center">
        <span className="text-judbr-main text-sm font-semibold border border-gray-200 rounded-full px-4 py-2 ">Gerencie seu escritório</span>
          <h1 className="text-4xl text-judbr-gray-dark sm:text-5xl font-bold mt-2 pt-5">
            Otimize a <span className="text-judbr-main">gestão do seu escritório</span> e <br />
            aumente sua produtividade
          </h1>
          <p className="text-lg sm:text-xl text-judbr-gray-light  mt-4 max-w-3xl mx-auto">
            Oferecemos uma <span className="text-judbr-main">solução completa</span> para o 
            <span className="text-judbr-main"> gerenciamento do seu escritório de advocacia</span>. 
            Aumente a <span className="text-judbr-main">eficiência</span> e <span className="text-judbr-main">satisfação dos clientes</span> com 
            nossa plataforma integrada disponível <span className="text-judbr-main">24 horas por dia, 7 dias por semana</span>.
          </p>
          
        </div>
      
  
        
      </main>
      <Funcionalidades />
      
    </div>
  )
}
