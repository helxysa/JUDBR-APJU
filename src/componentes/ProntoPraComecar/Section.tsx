import Button from "../Button/Button";
import Link from "next/link";

export default function Section() {
  return (
    <div className=" py-12 md:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50 space-y-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center max-w-6xl mx-auto">
        <span className="text-judbr-main text-xs md:text-sm font-semibold border-2 border-judbr-main/20 rounded-full px-3 py-1 md:px-4 md:py-2 mb-2 sm:mb-4 bg-white shadow-sm hover:shadow-md transition-all duration-300">
            Vamos juntos
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-judbr-gray-dark pt-3 font-bold mt-2 sm:mt-4">
            Pronto pra <span className="text-judbr-main">começar?</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-judbr-gray-light mt-3 md:mt-4 pb-10">
            Fale com um de nossos consultores e comece a gerenciar o seu escritório de forma inteligente.
          </p>
          <div className="relative inline-block overflow-hidden group ">
              <Link
                href="https://app.judbr.com.br/auth/register/"
                target="_blank"
                className="inline-flex items-center justify-center bg-judbr-main text-gray-100 px-8 py-3 rounded-full transition-all duration-500 ease-in-out hover:bg-gray-800"
              >
                <span className="relative inline-block transition-all duration-500 ease-in-out group-hover:transform group-hover:-translate-y-full group-hover:opacity-0">
                  Fale com um consultor
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                  Fale com um consultor
                </span>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}