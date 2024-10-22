'use client'
import  Button  from "../Button/Button";
import { Animation } from "../useIntersectionAnimation/Animation";

export default function Prices() {
    return (
      <div className="bg-white min-h-screen   max-w-screen-2xl mx-auto  4xl:max-w-screen-3xl">
        <main className="container mx-auto px-4 sm:px-20 py-6 sm:py-10 pt-10 sm:pt-20 pb-8 sm:pb-16 3xl:mb-[20px]  ">
          <div className="text-center">
            <span className="text-judbr-main text-xs sm:text-sm font-semibold border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-2">
              Nossos Planos
            </span>
            <h1 className="text-3xl sm:text-4xl text-judbr-gray-dark sm:text-5xl font-bold mt-2 pt-3 sm:pt-5">
              Planos <span className="text-judbr-main">flexiveis</span><br className="hidden sm:inline" />
              pra sua necessidade
            </h1>
            <p className="text-base sm:text-lg sm:text-xl text-judbr-gray-light mt-3 sm:mt-4 max-w-3xl mx-auto">
              Independente do tamanho do seu escritório, temos um plano perfeito para você.
            </p>
            <Button href="https://app.judbr.com.br/auth/register/" target="_blank" text="Mensalidade" className="px-8 py-3 mt-4" />
          </div>
        </main>
        <PricesWithCustom />
      </div>
    )
  }

  export function PricesWithCustom() {
    const itemRef = Animation<HTMLDivElement>();

    return (
      <div ref={itemRef} className='opacity-0 ' >
        <main className="container mx-auto px-4 sm:px-6 lg:px-20 py-10 pt-20 pb-16 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
            {/* Iniciante Plan */}
            <PriceCard
              title="Advogado"
              price="160"
              description="Para quem trabalha por conta própria"
              features={[
                "Até 300 processos",
                "Aplicativo na Apple Store e Google Play",
                "Auxílio na divulgação do app",
                "Suporte via whatsapp"
              ]}
            />
            
            {/* Basic Plan */}
            <PriceCard
              title="Escritório"
              price="300"
              description="Para escritórios de pequeno e médio porte"
              features={[
                "Até 1000 processos",
                "Aplicativo na Apple Store e Google Play",
                "Auxílio na divulgação do app",
                "Suporte via whatsapp"
              ]}
              highlighted={true}
            />
            
            {/* Plus Plan */}
            <PriceCard
              title="Banca"
              price="590"
              description="Para grandes escritórios com múltiplas unidades."
              features={[
                "Até 2000 processos",
                "Aplicativo na Apple Store e Google Play",
                "Auxílio na divulgação do app",
                "Suporte via whatsapp"
              ]}
            />
            
            {/* Customizado Plan */}
            <PriceCard
              title="Customizado"
              price="?"
              description="Solução personalizada para grandes escritórios e demandas específicas."
              features={[
                "Funcionalidades sob medida para seu escritório",
                "Fluxos de trabalho personalizados",
                "Suporte dedicado",
                "Você define o preço"
              ]}
            />
          </div>
        </main>
      </div>
    )
  }
 
  function PriceCard({ title, price, description, features, highlighted = false }: { 
    readonly title: string, 
    readonly price: string, 
    readonly description: string, 
    readonly features: readonly string[], 
    readonly highlighted?: boolean 
  }) {
    return (
      <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col justify-between ${highlighted ? 'border-2 border-purple-200' : ''}`}>
        <div className="">
          <h3 className="text-lg font-semibold mb-2 text-judbr-gray-dark">{title}</h3>
          <p className="text-sm text-judbr-gray-light mb-4">{description}</p>
          <div className="mb-6">
            <span className="text-2xl font-bold text-judbr-gray-dark align-top">R$</span>
            <span className="text-5xl font-bold text-judbr-gray-dark">{price}</span>
            <span className="text-judbr-gray-light">/mês</span>
          </div>
        </div>
        <Button
          href="#"
          text="Contratar"
          className="w-full py-2 px-4 transition duration-300"
          bgColors={
            highlighted
              ? { default: 'bg-judbr-main', hover: 'hover:bg-judbr-gray-dark' }
              : { default: 'bg-[#F4F7FE]', hover: 'hover:bg-judbr-gray-dark' }
          }
          textColor={
            highlighted
              ? { default: 'text-white', hover: 'hover:text-white' }
              : { default: 'text-judbr-gray-dark', hover: 'hover:text-white' }
          }
        />
        <ul className="mt-6 space-y-2">
          {features.map((feature, index) => (
            <li key={`${title}-${feature}-${index}`} className="flex items-center text-sm text-judbr-gray-dark">
              <svg className="w-4 h-4 mr-2 text-judbr-gray-light" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    )
  }