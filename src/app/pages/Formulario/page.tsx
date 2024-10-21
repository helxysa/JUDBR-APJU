import React from 'react';

export default function Formulario() {
  return (
    <div>
      <main className="container mx-auto px-4 sm:px-20 py-10 pt-20 pb-16 mt-20 ">
        <div className="text-center">
          <span className="text-judbr-main text-sm font-semibold border border-gray-200 rounded-full px-4 py-2">Formulário</span>
          <h1 className="text-4xl text-judbr-gray-dark sm:text-5xl font-bold mt-2 pt-1">
            Entre em <span className="text-judbr-main">contato</span>
          </h1>
          <p className="text-lg sm:text-xl text-judbr-gray-light mt-4 max-w-3xl mx-auto mb-5">
          Estamos aqui para ajudar você a transformar seu escritório jurídico
          com nossas soluções inovadoras. Entre em contato e saiba mais!          </p>
        </div>
        <HomeFormulario />
      </main>
    </div>
  )
}

function HomeFormulario() {
    return (
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-2xl overflow-hidden mt-20 pb-10 md:pb-0 md:max-w-5xl md:mx-auto">
        <div className="md:w-1/2 p-8 flex flex-col justify-center items-center md:items-start bg-white">
          <div className="w-full p-4 md:p-8 flex justify-center items-center bg-white  ">
            <img src="/images/judbr-preto.png" alt="JudBR" className="sm:h-40" />
          </div>
          
          <p className="text-base sm:text-lg mb-6 text-gray-600 text-center md:text-left max-w-md">
            
          </p>
          <div className="mb-4 text-center md:text-left md:self-start">
            <h3 className="font-bold text-judbr-main">Contato</h3>
            <p className="text-gray-700">(12) 3456-7890</p>
          </div>
          <div className="text-center md:text-left md:self-start">
            <h3 className="font-bold text-judbr-main">Suporte</h3>
            <p className="text-gray-700">contato@judbr.com</p>
          </div>
        </div>
        <div className="md:w-1/2 p-4 md:p-8 bg-white">
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="nome" className="block text-left mb-2 text-gray-700">Seu nome completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome aqui"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-judbr-main"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left mb-2 text-gray-700">Seu e-mail*</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail aqui"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-judbr-main"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mensagem" className="block text-left mb-2 text-gray-700">Sua mensagem*</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Escreva sua mensagem aqui"
                className="w-full p-2 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-judbr-main"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-judbr-main text-white py-2 px-4 rounded-full hover:bg-judbr-main-dark transition duration-300"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    );
  }