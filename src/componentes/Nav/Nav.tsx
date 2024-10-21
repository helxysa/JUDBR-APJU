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
        <div className="container mx-auto px-4 py-3 flex items-center justify-around">
          <Link href="/" className="text-judbr-main font-bold text-xl">
            <img
              src="/images/judbr2.png.png"
              alt="Logo"
              width={130}
              height={120}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
          <Link
              href="/#precos"
              className="text-judbr-main hover:text-gray-200"
            >
              Preços
            </Link>
            <div className="relative group">
              <Link
                href="/solucoes"
                className="text-judbr-main hover:text-gray-200 flex items-center"
              >
                Soluções
              </Link>
            </div>
            <Link
              href="/recursos"
              className="text-judbr-main hover:text-gray-200"
            >
              Recursos
            </Link>
            <Link
              href="/sobre-nos"
              className="text-judbr-main hover:text-gray-200"
            >
              Quem somos
            </Link>
            <Link
              href="/contato"
              className="text-judbr-main hover:text-gray-200"
            >
              Contato
            </Link>
          </div>

          {/* Desktop CTA and Login */}

          <div className="relative inline-block overflow-hidden group">
            <Link
              href="/pages/Formulario"
              className="inline-flex items-center justify-center bg-judbr-main text-gray-100 px-4 py-2 rounded-full transition-all duration-500 ease-in-out hover:bg-gray-600"
            >
              <span className="relative inline-block transition-all duration-500 ease-in-out group-hover:transform group-hover:-translate-y-full group-hover:opacity-0">
                Experimente Grátis
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                Experimente Grátis
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-judbr-main focus:outline-none"
            aria-label="Menu"
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

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-50 bg-judbr-main transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex flex-col h-full w-full">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <Link href="/" className="text-white font-bold text-xl">
                <Image
                  src="/images/judbr2.png.png"
                  alt="Logo"
                  width={100}
                  height={90}
                />
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
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
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-grow overflow-y-auto">
              <div className="px-4 py-2 space-y-1">
                <Link
                  href="/precos"
                  className="block text-white hover:text-gray-200 py-2 border-b border-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Preços
                </Link>
                <div>
                  <Link
                    href="/solucoes"
                    className="flex items-center justify-between w-full text-white hover:text-gray-200 py-2 border-b border-white"
                  >
                    Soluções
                  </Link>
                </div>
                <Link
                  href="/recursos"
                  className="block text-white hover:text-gray-200 py-2 border-b border-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Recursos
                </Link>
                <Link
                  href="/sobre-nos"
                  className="block text-white hover:text-gray-200 py-2 border-b border-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Quem somos
                </Link>
                <Link
                  href="/contato"
                  className="block text-white hover:text-gray-200 py-2 border-b border-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contato
                </Link>
              </div>
            </div>
            <div className="mt-auto p-4 space-y-4">
              <Link
                href="/pages/Formulario"
                className="block bg-secondary text-judbr-main px-4 py-2 rounded-full text-center hover:bg-secondary-dark transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experimente Grátis
              </Link>
              <Link
                href="https://app.judbr.com.br/auth/login/"
                target="_blank"
                className="block text-white hover:text-gray-200 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
