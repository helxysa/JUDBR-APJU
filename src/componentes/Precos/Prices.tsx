'use client'
import  Button  from "../Button/Button";
import { Animation } from "../useIntersectionAnimation/Animation";
import Link from "next/link";

export default function Prices() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-24 overflow-hidden w-full" id="precos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-judbr-main text-xs md:text-sm font-semibold border-2 border-judbr-main/20 rounded-full px-3 py-1 md:px-4 md:py-2 mb-2 sm:mb-4 bg-white shadow-sm hover:shadow-md transition-all duration-300">
            Nossos Planos
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-judbr-gray-dark pt-3 font-bold mt-2 sm:mt-4">
            Planos <span className="text-judbr-main">flexiveis</span><br className="hidden sm:inline" />
            pra sua necessidade
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-judbr-gray-light mt-3 md:mt-4 pb-10">
            Independente do tamanho do seu escritório, temos um plano perfeito para você.
          </p>
         <div>
         <div className="relative inline-block overflow-hidden group  ">
              <Link
                href="https://app.judbr.com.br/auth/register/"
                target="_blank"
                className="inline-flex items-center justify-center bg-judbr-main text-gray-100 px-8 py-3 rounded-full transition-all duration-500 ease-in-out hover:bg-gray-800"
              >
                <span className="relative inline-block transition-all duration-500 ease-in-out group-hover:transform group-hover:-translate-y-full group-hover:opacity-0">
                  Mensalidade
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                  Mensalidade
                </span>
              </Link>
            </div>
         </div>
        </div>
      </div>
      <PricesWithCustom />
      <PricingComparison />
    </div>
  )
}

  export function PricesWithCustom() {
    const itemRef = Animation<HTMLDivElement>();

    return (
      <div ref={itemRef} className='opacity-0'>
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-20 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-7xl mx-auto">
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
      <div className={`
        bg-white rounded-2xl p-8
        transform hover:-translate-y-3 transition-all duration-500
        border-2 ${highlighted ? 'border-judbr-main/30' : 'border-gray-100'} hover:border-judbr-main/30
        hover:shadow-[0_25px_70px_rgba(8,_112,_184,_0.2)]
        group relative backdrop-blur-sm
        animate-fade-in-up
        max-w-[340px] mx-auto w-full
        flex flex-col
        min-h-[520px]
      `}>
        <div className="mb-auto">
          <h3 className="text-lg font-semibold mb-2 text-judbr-gray-dark group-hover:text-judbr-main transition-colors duration-500">{title}</h3>
          <p className="text-sm text-judbr-gray-light mb-4 group-hover:text-gray-700 transition-colors duration-500">{description}</p>
          <div className="mb-6 mt-10">
            <span className="text-2xl font-bold text-judbr-gray-dark align-top">R$</span>
            <span className="text-5xl font-bold text-judbr-gray-dark">{price}</span>
            <span className="text-judbr-gray-light">/mês</span>
          </div>
        </div>

        <button 
          className={`
            w-full py-2 rounded-full font-medium text-base
            transition-all duration-300 mb-8
            ${highlighted 
              ? 'bg-judbr-main text-white group-hover:bg-gray-800' 
              : 'bg-[#F4F7FE] text-judbr-gray-dark group-hover:bg-gray-800 group-hover:text-white'
            }
          `}
        >
          Contratar
        </button>

        <ul className="space-y-4 mt-10">
          {features.map((feature, index) => (
            <li key={`${title}-${feature}-${index}`} className="flex items-center text-sm text-judbr-gray-dark group-hover:text-gray-700 transition-colors duration-500">
              <svg className="w-4 h-4 mr-2 text-judbr-main" fill="currentColor" viewBox="0 0 20 20">
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-judbr-gray-dark font-bold mb-4" id='compare-judbr-plans'>
          Compare os <span className="text-judbr-main">planos</span> disponíveis
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-judbr-gray-light mb-8">
          Encontre a solução ideal para seu escritório
        </p>

        <div className="inline-flex items-center justify-center bg-gray-50 p-1.5 rounded-lg shadow-sm">
          <button 
            className={`px-6 py-2.5 text-sm rounded-md transition-all duration-300 ${!isAnnual 
              ? 'bg-white text-gray-800 shadow-sm font-medium' 
              : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setIsAnnual(false)}
          >
            Mensal
          </button>
          <button 
            className={`px-6 py-2.5 text-sm rounded-md transition-all duration-300 ${isAnnual 
              ? 'bg-white text-gray-800 shadow-sm font-medium' 
              : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setIsAnnual(true)}
          >
            Anual <span className="text-emerald-600 text-xs ml-1">(20% off)</span>
          </button>
        </div>
      </div>

      <div className="hidden md:block overflow-hidden border border-gray-200 rounded-xl shadow-sm">
        <table className="w-full text-sm divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-5 text-left text-gray-600">
                Recursos
              </th>
              {plans.map((plan, index) => (
                <th 
                  key={index} 
                  scope="col" 
                  className={`px-6 py-5 text-center relative ${
                    plan.name === 'BANCA' ? 'bg-gray-50' : ''
                  }`}
                >
                  {plan.name === 'BANCA' && (
                    <div className="absolute  left-1/4">
                      <span className="bg-emerald-500 text-white text-[10px] font-xl px-10 py-1 rounded-r-full rounded-l-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  <div className={`${plan.name === 'BANCA' ? 'mt-8' : 'mt-2'}`}>
                    <div className="font-medium text-gray-800">
                      {plan.name}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mt-3">
                      R${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </div>
                    <div className="text-gray-500 text-xs mt-1">por usuário/mês</div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {features.map((feature, featureIndex) => (
              <React.Fragment key={`feature-${featureIndex}`}>
                {feature.category !== features[featureIndex - 1]?.category && (
                  <tr>
                    <td colSpan={plans.length + 1} className="px-6 py-3 bg-gray-50 text-xs font-semibold text-gray-700">
                      {feature.category}
                    </td>
                  </tr>
                )}
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <th scope="row" className="px-6 py-4 text-sm font-medium text-gray-700 text-left">
                    {feature.name}
                  </th>
                  {plans.map((plan, planIndex) => (
                    <td 
                      key={`plan-${planIndex}`} 
                      className={`px-6 py-4 text-center ${
                        plan.name === 'BANCA' ? 'bg-gray-50' : ''
                      }`}
                    >
                      {(isAnnual ? plan.annualFeatures : plan.monthlyFeatures).includes(feature.name) ? (
                        <svg className="w-5 h-5 text-emerald-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-6">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`border bg-white p-6 rounded-xl shadow-sm ${
              plan.name === 'BANCA' ? 'border-emerald-200 relative' : 'border-gray-200'
            }`}
          >
            {plan.name === 'BANCA' && (
              <div className="absolute -top-3 right-4">
                <span className="bg-emerald-500 text-white text-[10px] font-medium px-4 py-1 rounded-r-full rounded-l-full">
                  POPULAR
                </span>
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-lg font-medium text-gray-800">{plan.name}</h3>
              <div className="text-3xl font-bold text-gray-900 mt-3">
                R${isAnnual ? plan.annualPrice : plan.monthlyPrice}
              </div>
              <div className="text-gray-500 text-sm mt-1">por usuário/mês</div>
            </div>

            <div className="space-y-4">
              {features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center">
                  {(isAnnual ? plan.annualFeatures : plan.monthlyFeatures).includes(feature.name) ? (
                    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  ) : (
                    <span className="w-5 h-5 flex-shrink-0 text-gray-400">—</span>
                  )}
                  <span className="ml-3 text-sm text-gray-700">{feature.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
