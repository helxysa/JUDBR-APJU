import  Button  from "../Button/Button";

export default function Prices() {
    return (
      <div className="bg-white min-h-screen">
        <main className="container mx-auto px-20 py-10 pt-20 pb-16">
          <div className="text-center">
            <span className="text-judbr-main text-sm font-semibold border border-gray-200 rounded-full px-4 py-2">Nossos planos</span>
            <h1 className="text-4xl text-judbr-gray-dark sm:text-5xl font-bold mt-2 pt-1">
              Planos <span className="text-judbr-main">flexíveis</span> para sua necessidade
            </h1>
            <p className="text-lg sm:text-xl text-judbr-gray-light mt-4 max-w-3xl mx-auto">
              Independentemente do seu tamanho, nossos planos são 
              adaptáveis a realidade atual do seu escritório.
            </p>
            <button className="bg-judbr-main text-white font-semibold py-2 px-6 rounded-full mt-6">
              Mensalidades
            </button>
          </div>
          <PricesWithCustom />
        </main>
      </div>
    )
  }

  export function PricesWithCustom() {
    return (
      <div className="bg-white min-h-screen">
        <main className="container mx-auto px-4 sm:px-6 lg:px-20 py-10 pt-20 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
            {/* Iniciante Plan */}
            <PriceCard
              title="Iniciante"
              price="160"
              description="Para advogados que estão iniciando a sua jornada digital."
              features={[
                "Até 300 processos",
                "Aplicativo na Apple Store e Google Play",
                "Auxílio na divulgação do app",
                "Suporte via whatsapp"
              ]}
            />
            
            {/* Basic Plan */}
            <PriceCard
              title="Basic"
              price="300"
              description="Para profissionais que já possuem uma base maior de clientes."
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
              title="Plus"
              price="590"
              description="Para escritórios e profissionais com grande base de clientes."
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
  function PriceCard({ title, price, description, features, highlighted = false }: { title: string, price: string, description: string, features: string[], highlighted?: boolean }) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-4 sm:p-6 flex flex-col h-full ${highlighted ? 'border-2 border-judbr-main' : ''}`}>
        <div className="flex flex-col h-full">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-judbr-gray-dark">{title}</h3>
          <p className="text-judbr-gray-dark mb-3 text-sm sm:text-base flex-grow">{description}</p>
          <p className="text-3xl sm:text-4xl font-semibold text-[#252525] mb-4">
            {price && (
              <>
                <span className="text-xl sm:text-2xl align-top">R$</span>
                {price}
              </>
            )}
          </p>
          <div className="mb-6 flex justify-center">
            <Button
              href="#"
              text="Contratar"
              className="px-4 sm:px-9 border border-judbr-main"
              textColor={
                highlighted 
                  ? { default: '', hover: '' }
                  : { default: 'text-black', hover: '' }
              }
              bgColors={
                highlighted 
                  ? { default: '', hover: '' }
                  : { default: 'bg-white', hover: '' }
              }
            />
          </div>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm sm:text-base text-judbr-gray-dark">
                <svg className="w-4 h-4 mr-2 text-judbr-gray-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }