"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white text-xm">
    <nav className="bg-white fixed top-0 w-full z-50 border-b border-gray-100">
      <div className="container mx-auto  px-1 4xl:px-[290px] 3xl:px-[350px] 2xl:px-[90px] 1xl:px-[60px] md:px-[70px] ">
        <div className="py-3 flex items-center justify-between">
          <Link href="/" className="text-judbr-main font-bold text-xl">
            <Image
              src="/images/judbr2.png.png"
              alt="Logo"
              width={100}
              height={120}
              className="w-auto h-8 hidden md:block md:h-auto"
            />
            <Image
              src="/images/judbr2.png.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-auto h-4 md:hidden"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
            <Link
              href="/"
              className="text-judbr-main hover:text-gray-200 text-sm lg:text-base"
            >
              Inicio
            </Link>
            <div className="relative group">
              <Link
                href="#solucoes"
                className="text-judbr-main hover:text-gray-200 flex items-center"
              >
                Soluções
              </Link>
            </div>
           
            <Link
              href="/#precos"
              className="text-judbr-main hover:text-gray-200"
            >
              Planos e Preços
            </Link>
            <Link
              href="#quem-somos"
              className="text-judbr-main hover:text-gray-200"
            >
              Quem Somos
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <div className="relative inline-block overflow-hidden group">
              <Link
                href="https://app.judbr.com.br/auth/register/"
                target="_blank"
                className="inline-flex items-center justify-center bg-judbr-main text-gray-100 px-4 py-2 rounded-full transition-all duration-500 ease-in-out hover:bg-gray-800"
              >
                <span className="relative inline-block transition-all duration-500 ease-in-out group-hover:transform group-hover:-translate-y-full group-hover:opacity-0">
                  Experimente Grátis
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                  Experimente Grátis
                </span>
              </Link>
            </div>
            <Link
              href="https://app.judbr.com.br/auth/login/"
              target="_blank"
              className="text-judbr-main hover:text-gray-200"
            >
              Entrar
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-judbr-main hover:bg-gray-100 rounded-lg"
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-judbr-main transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <div className="flex items-center gap-2">
              <div className="w-[60px]">
                <Image
                  src="/images/judbr-white.png"
                  alt="Logo Judbr"
                  width={90}
                  height={90}
                  className="w-full h-auto brightness-0 invert"
                />
              </div>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="px-4 py-2">
              <Link
                href="/"
                className="block text-white py-3 border-b border-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="#solucoes"
                className="block text-white py-3 border-b border-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Soluções
              </Link>
              <Link
                href="#precos"
                className="block text-white py-3 border-b border-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Preços
              </Link>
              <Link
                href="#quem-somos"
                className="block text-white py-3 border-b border-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Quem Somos
              </Link>
            </div>
          </div>

  
          <div className="p-4 border-t border-white/20">
            <Link
              href="https://app.judbr.com.br/auth/register/"
              target="_blank"
              className="block w-full bg-white text-judbr-main text-center py-3 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experimente Grátis
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
);
}