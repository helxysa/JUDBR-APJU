'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function CTA() {
  const [displayText, setDisplayText] = useState(' |')
  const words = ['Tempo! ', 'Qualidade! ', 'Praticidade!']
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeEffect = () => {
      const currentWord = words[wordIndex]

      if (isDeleting) {
        setDisplayText(currentWord.substring(0, charIndex - 1) + ' |')
        setCharIndex(prev => prev - 1)

        if (charIndex === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      } else {
        setDisplayText(currentWord.substring(0, charIndex + 1) + ' |')
        setCharIndex(prev => prev + 1)

        if (charIndex === currentWord.length) {
          setIsDeleting(true)
        }
      }
    }

    const timer = setTimeout(typeEffect, 100)
    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, wordIndex])

  return (
    <section className="py-12 md:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        
      <div className="max-w-7xl mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 md:mb-20 animate-slide-up">
          <span className="text-judbr-main text-xs md:text-sm font-semibold border-2 border-judbr-main/20 rounded-full px-3 py-1 md:px-4 md:py-2 mb-2 sm:mb-4 bg-white shadow-sm hover:shadow-md transition-all duration-300">
            Faça seu teste gratuito
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-judbr-gray-dark pt-3 font-bold mt-2 sm:mt-4">
          <span className="text-judbr-gray-dark">Pronto para </span>
          <span className="text-judbr-gray-dark"> simplificar</span>
          <span className="text-judbr-gray-dark"> sua</span>
            <span className="text-judbr-main"> prática jurídica?</span>
          </h2>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8 flex flex-col md:flex-row items-center md:items-start text-center md:text-left tracking-wider">
          <span className="mb-1 md:mb-0">Sabemos que você precisa de</span>
          <span className="inline-block h-[2em] md:h-[1em] overflow-hidden md:ml-2">
            <span className="inline-block text-judbr-main">
              {displayText}
            </span>
          </span>
        </h2>
        <p className="text-sm text-gray-800 sm:text-base md:text-[18px] lg:text-[19px] text-judbr-gray mb-10 md:mb-10 text-center md:text-left tracking-wider">
          O nosso Time de Especialistas, alinhados à Tecnologia, trabalha duro para apoiá-lo no exercício da Advocacia. A percepção de que a advocacia estava ficando defasada em relação à inovação e tecnologia, nos inspirou a desenvolver diversas soluções para apoiar você na gestão de seu escritório. 
        </p>
        <div className="flex space-x-4 justify-center md:justify-start mb-8 md:mb-12">
        <SocialIcon icon="facebook" />
      
          <SocialIcon icon="instagram" />
          <SocialIcon icon="linkedin" />
        </div>
      </div>

      <div className="container mx-auto text-center text-black">
      <div className="relative inline-block overflow-hidden group ">
              <Link
                href="https://app.judbr.com.br/auth/register/"
                target="_blank"
                className="inline-flex items-center justify-center bg-judbr-main text-gray-100 px-8 py-3 rounded-full transition-all duration-500 ease-in-out hover:bg-gray-800"
              >
                <span className="relative inline-block transition-all duration-500 ease-in-out group-hover:transform group-hover:-translate-y-full group-hover:opacity-0">
                  Comece seu teste gratuito
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                  Comece seu teste gratuito
                </span>
              </Link>
            </div>
      </div>
      </div>
    </section>
  )
}

function SocialIcon({ icon }: { readonly icon: string }) {
  const icons: { [key: string]: React.ReactNode } = {
    instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    facebook: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
      </svg>
    ),
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
      </svg>
    ),
    twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      </svg>
    ),
  }

  return (
    <div>
      {icons[icon]}
    </div>
  )
}