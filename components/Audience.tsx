import React from 'react';
import { BadgeCheck, Car } from 'lucide-react';

export const Audience: React.FC = () => {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Quem estamos buscando
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              O Habilitô é para quem ama dirigir e sabe ensinar. Não exigimos que você tenha uma autoescola própria.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800">
                    <BadgeCheck className="h-6 w-6 text-brand-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Instrutores Credenciados</h3>
                  <p className="mt-1 text-slate-400">
                    Instrutores com licença ativa que desejam complementar renda ou buscar independência profissional fora das autoescolas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800">
                    <Car className="h-6 w-6 text-brand-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Motoristas Experientes (Uber/99)</h3>
                  <p className="mt-1 text-slate-400">
                    Motoristas de aplicativo ou profissionais com excelente histórico, paciência e didática para ajudar novos condutores a ganhar confiança.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-semibold mb-6">Requisitos Básicos</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-brand-500"></div>
                <span className="text-slate-300">CNH definitiva há pelo menos 5 anos</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-brand-500"></div>
                <span className="text-slate-300">Veículo próprio em bom estado (ou acesso a um)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-brand-500"></div>
                <span className="text-slate-300">Histórico de direção limpo e seguro</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-brand-500"></div>
                <span className="text-slate-300">Residir em Curitiba ou Região Metropolitana</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};