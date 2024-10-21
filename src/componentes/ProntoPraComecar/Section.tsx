import Button from "../Button/Button";
export default function Section(){
 
    return (
        <div >
            <main className="container mx-auto px-20 py-10 pt-20 pb-16">
          <div className="text-center">
            <span className="text-judbr-main text-sm font-semibold border border-gray-200 rounded-full px-4 py-2">Vamos juntos</span>
            <h1 className="text-4xl text-judbr-gray-dark sm:text-5xl font-bold mt-2 pt-1">
              Pronto pra <span className="text-judbr-main">começar?</span>
            </h1>
            <p className="text-lg sm:text-xl text-judbr-gray-light mt-4 max-w-3xl mx-auto mb-5">
              Fale com um de nossos consultores e comece a gerenciar o seu escritório de forma inteligente.
            </p>
            <Button href="/pages/Formulario" text="Fale com um consultor" className="px-6 py-3 " />
          </div>
        </main>
        </div>
    )
}