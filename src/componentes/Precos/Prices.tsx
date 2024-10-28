'use client'
import  Button  from "../Button/Button";
import { Animation } from "../useIntersectionAnimation/Animation";

export default function Prices() {
    return (
      <div className=" min-h-screen   max-w-screen-2xl mx-auto  4xl:max-w-screen-3xl " id="precos">
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
       <PricingComparison />
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
      <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col justify-between sm:max-w-[300px] md:max-w-[320px] mx-auto ${highlighted ? 'border-2 border-purple-200' : ''}`}>

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




import React, { useState } from 'react';

const features = [
  { name: 'Contact & Matter Management', category: 'ALWAYS INCLUDED' },
  { name: 'Billable Time & Expense Tracking', category: 'ALWAYS INCLUDED' },
  { name: 'World Class Support', category: 'ALWAYS INCLUDED' },
  { name: 'Secure Client Portal', category: 'ALWAYS INCLUDED' },
  { name: 'iPhone, iPad & Android App', category: 'ALWAYS INCLUDED' },
  { name: 'Internal Chat', category: 'ADVANCED FEATURES' },
  { name: 'Real-Time Notifications', category: 'ADVANCED FEATURES' },
  { name: 'Daily Agenda Email', category: 'ADVANCED FEATURES' },
  { name: 'Custom Security Roles', category: 'ADVANCED FEATURES' },
  { name: 'Custom Fields', category: 'ADVANCED FEATURES' },
  { name: 'Native eSignature', category: 'ADVANCED FEATURES' },
  { name: 'Native 2-Way Business Texting', category: 'ADVANCED FEATURES' },
  { name: 'Text Message Event & Reminder Alerts', category: 'ADVANCED FEATURES' },
];

const plans = [
  { 
    name: 'ADVOGADO',
    monthlyPrice: 49,
    annualPrice: 470,
    monthlyFeatures: [
      'Contact & Matter Management',
      'Billable Time & Expense Tracking',
      'World Class Support',
      'Secure Client Portal',
      'iPhone, iPad & Android App',
    ],
    annualFeatures: [
      'Contact & Matter Management',
      'Billable Time & Expense Tracking',
      'World Class Support',
      'Secure Client Portal',
      'iPhone, iPad & Android App',
      'Internal Chat',
      'Real-Time Notifications',
    ]
  },
  { 
    name: 'ESCRITORIO',
    monthlyPrice: 69,
    annualPrice: 662,
    monthlyFeatures: [
      'Contact & Matter Management',
      'Billable Time & Expense Tracking',
      'World Class Support',
      'Secure Client Portal',
      'iPhone, iPad & Android App',
      'Internal Chat',
      'Real-Time Notifications',
    ],
    annualFeatures: [
      'Contact & Matter Management',
      'Billable Time & Expense Tracking',
      'World Class Support',
      'Secure Client Portal',
      'iPhone, iPad & Android App',
      'Internal Chat',
      'Real-Time Notifications',
      'Custom Security Roles',
      'Custom Fields',
    ]
  },
  { 
    name: 'BANCA',
    monthlyPrice: 89,
    annualPrice: 854,
    monthlyFeatures: [
      'Contact & Matter Management',
      'Billable Time & Expense Tracking',
      'World Class Support',
      'Secure Client Portal',
      'iPhone, iPad & Android App',
      'Internal Chat',
      'Real-Time Notifications',
      'Custom Security Roles',
      'Custom Fields',
    ],
    annualFeatures: [
      'Contact & Matter Management',
      'Billable Time & Expense Tracking',
      'World Class Support',
      'Secure Client Portal',
      'iPhone, iPad & Android App',
      'Internal Chat',
      'Real-Time Notifications',
      'Custom Security Roles',
      'Custom Fields',
      'Native eSignature',
      'Native 2-Way Business Texting',
      'Text Message Event & Reminder Alerts',
    ]
  },
];

function PricingComparison() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="container mx-auto md:px-6 md:py-5 px-1 py-8 max-w-5xl">
      <h1 className="text-2xl sm:text-3xl text-judbr-gray-dark font-bold text-center mb-6 sm:mb-8" id='compare-judbr-plans'>
        Compare os planos do JUDBR
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-800 uppercase bg-white border-b">
            <tr>
              <th scope="col" className="px-2 sm:px-6 py-2 sm:py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:text-[2px]">
                    <span className={`md:text-sm text-xs ${!isAnnual ? 'font-bold' : ''}`}>Mensal</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        value="" 
                        className="sr-only peer" 
                        checked={isAnnual} 
                        onChange={() => setIsAnnual(!isAnnual)} 
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
                    </label>
                    <span className={`text-sm ${isAnnual ? 'font-bold' : ''}`}>
                      Anual <span className="text-green-500 text-xs">(20% off)</span>
                    </span>
                  </div>
                </div>
              </th>
              {plans.map((plan, index) => (
                <th 
                  key={index} 
                  scope="col" 
                  className={`px-2 sm:px-6 py-2 sm:py-3 text-center relative ${plan.name === 'BANCA' ? 'bg-gray-50' : ''}`}
                >
                  {plan.name === 'BANCA' && (
                    <div className="absolute top-0 left-0 right-0 bg-[#24B364] text-white text-xs font-semibold py-1">
                      POPULAR
                    </div>
                  )}
                  <div className={`${plan.name === 'BANCA' ? 'mt-6' : ''}`}>
                    {plan.name}
                    <div className="text-lg sm:text-2xl font-bold text-gray-800">
                      R${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </div>
                    <div className="text-xs">por usuário/mês</div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, featureIndex) => (
              <React.Fragment key={`feature-${featureIndex}`}>
                {feature.category !== features[featureIndex - 1]?.category && (
                  <tr key={`category-${feature.category}`} className="bg-gray-50 border-t border-b">
                    <td colSpan={plans.length + 1} className="px-2 sm:px-6 py-4 font-bold text-gray-700">
                      {feature.category}
                    </td>
                  </tr>
                )}
                <tr className="bg-white border-b">
                  <th scope="row" className="px-2 sm:px-6 py-2 sm:py-4 font-medium text-gray-800 whitespace-normal sm:whitespace-nowrap">
                    {feature.name}
                  </th>
                  {plans.map((plan, planIndex) => (
                    <td 
                      key={`plan-${planIndex}`} 
                      className={`px-2 sm:px-6 py-2 sm:py-4 text-center ${plan.name === 'BANCA' ? 'bg-gray-50' : ''}`}
                    >
                      {(isAnnual ? plan.annualFeatures : plan.monthlyFeatures).includes(feature.name) ? (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#24B364] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                  ))}
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}