import React from 'react';
import { Button } from './ui/Button';
import { CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700 ring-1 ring-inset ring-brand-600/20 mb-6">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-brand-600 animate-pulse"></span>
                Agora em Curitiba
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Transforme sua direção em <span className="text-brand-600">renda extra</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Conectamos alunos a instrutores e motoristas experientes. Defina seus horários, ensine sem burocracia e receba por aula em Curitiba.
            </p>
            <div className="mt-8 flex items-center gap-x-6 sm:justify-center lg:justify-start">
              <Button onClick={onCtaClick} className="text-lg px-8 py-4">
                Começar a Ensinar
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500 sm:justify-center lg:justify-start">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-brand-600" />
                <span>Sem taxa de adesão</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-brand-600" />
                <span>Pagamento seguro</span>
              </div>
            </div>
          </div>
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-xl lg:max-w-md overflow-hidden">
               <img 
                className="w-full object-cover h-[400px]" 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop" 
                alt="Motorista dirigindo em Curitiba" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-medium">Liberdade para ensinar</p>
                  <p className="text-slate-200 text-sm">Faça sua própria agenda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};