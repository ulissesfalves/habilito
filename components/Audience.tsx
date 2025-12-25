import React from 'react';
import { BadgeCheck, Car } from 'lucide-react';

export const Audience: React.FC = () => {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Perfil do Parceiro Habilitô
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Buscamos motoristas experientes e instrutores que queiram atuar com <strong>prática assistida para pessoas já habilitadas</strong>.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 border border-slate-700">
                    <BadgeCheck className="h-6 w-6 text-brand-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Instrutores Profissionais</h3>
                  <p className="mt-2 text-slate-400 leading-relaxed">
                    Profissionais com experiência didática que buscam autonomia para oferecer mentorias práticas particulares (foco em perder o medo de dirigir).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 border border-slate-700">
                    <Car className="h-6 w-6 text-brand-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Motoristas Mentores</h3>
                  <p className="mt-2 text-slate-400 leading-relaxed">
                    Motoristas experientes (Uber/99/Particulares) com perfil paciente, dispostos a acompanhar recém-habilitados na prática do dia a dia.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6">Pré-requisitos para cadastro</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-brand-500"></div>
                <span className="text-slate-300">CNH definitiva ativa (Categoria B ou superior)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-brand-500"></div>
                <span className="text-slate-300">Veículo próprio em excelente estado de conservação</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-brand-500"></div>
                <span className="text-slate-300">Histórico de conduta e antecedentes criminais limpos</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-brand-500"></div>
                <span className="text-slate-300">Disponibilidade para atendimento em Curitiba/RMC</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};