import Button from "../Button/Button";

export default function Section() {
  return (
    <div className="bg-white  max-w-screen-xl mx-auto pt-10 border-t border-gray-300 pb-10">
      <main className="container mx-auto px-4 sm:px-20 py-8 sm:py-10 sm:pt-20 sm:pb-16 ">
        <div className="text-center">
          <span className="inline-block text-judbr-main text-xs sm:text-sm font-semibold border border-gray-200 rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-3 sm:mb-0">
            Vamos juntos
          </span>
          <h1 className="text-3xl sm:text-4xl text-judbr-gray-dark md:text-5xl font-bold mt-2 pt-1">
            Pronto pra <span className="text-judbr-main">começar?</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-judbr-gray-light mt-3 sm:mt-4 max-w-3xl mx-auto mb-5">
            Fale com um de nossos consultores e comece a gerenciar o seu escritório de forma inteligente.
          </p>
          <Button
            href="/pages/Formulario"
            text="Fale com um consultor"
            className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
          />
        </div>
      </main>
    </div>
  );
}