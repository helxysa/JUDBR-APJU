import Button from "../Button/Button";


export default function Section() {
  return (
    <div className=" py-12 md:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50 space-y-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center max-w-6xl mx-auto">
          <span className="text-judbr-main text-xs md:text-sm font-semibold  rounded-full px-3 py-1 md:px-4 md:py-2 mb-2 sm:mb-4 bg-white shadow-sm hover:shadow-md transition-all duration-300">
            Vamos juntos
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-judbr-gray-dark pt-3 font-bold mt-2 sm:mt-4">
            Pronto pra <span className="text-judbr-main">começar?</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-judbr-gray-light mt-3 md:mt-4">
            Fale com um de nossos consultores e comece a gerenciar o seu escritório de forma inteligente.
          </p>
          <Button
            href="/pages/Formulario"
            text="Fale com um consultor"
            className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base mt-4"
          />
        </div>
      </div>
    </div>
  );
}