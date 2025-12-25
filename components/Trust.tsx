import React from 'react';
import { Shield, Info, CheckCircle2, XCircle } from 'lucide-react';

export const Trust: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-5 mb-10 lg:mb-0">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Transparência e Segurança</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              O Habilitô é uma plataforma tecnológica facilitadora. Nosso objetivo é democratizar o acesso à prática de direção para pessoas já habilitadas, conectando-as a parceiros qualificados.
            </p>
            <div className="flex items-center gap-2 text-sm text-brand-700 font-medium bg-brand-50 p-4 rounded-lg border border-brand-100">
              <Shield className="h-5 w-5" />
              <span>Conformidade com a LGPD e Proteção de Dados</span>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-brand-700">
                <CheckCircle2 className="h-5 w-5" />
                <h3 className="font-semibold">O que somos</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5"></span>
                  Plataforma de conexão e agendamento
                </li>
                <li className="flex gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5"></span>
                  Ferramenta de gestão para instrutores
                </li>
                <li className="flex gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5"></span>
                  Apoio para aulas de aperfeiçoamento
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-slate-700">
                <XCircle className="h-5 w-5" />
                <h3 className="font-semibold">O que NÃO somos</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5"></span>
                  Centro de Formação de Condutores (CFC)
                </li>
                <li className="flex gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5"></span>
                  Emissores de certificação oficial
                </li>
                <li className="flex gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5"></span>
                  Validadores de carga horária legal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};