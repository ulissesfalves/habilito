import React from 'react';
import { Wallet, CalendarClock, Users, ShieldCheck } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Wallet className="h-6 w-6 text-brand-600" />,
      title: "Defina seus Valores",
      description: "Você define o valor da sua hora de mentoria. A plataforma conecta você a condutores que buscam prática."
    },
    {
      icon: <CalendarClock className="h-6 w-6 text-brand-600" />,
      title: "Flexibilidade Total",
      description: "Atenda nos horários que preferir. Ideal para conciliar com outras atividades ou rodar em apps."
    },
    {
      icon: <Users className="h-6 w-6 text-brand-600" />,
      title: "Público Qualificado",
      description: "Acesso a uma base de recém-habilitados (CNH B) que buscam aperfeiçoamento e prática assistida."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand-600" />,
      title: "Recebimento Seguro",
      description: "Sistema organizado para gestão dos seus atendimentos. Transparência financeira total."
    }
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">Por que o Habilitô?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Valorize sua habilidade ao volante
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-start lg:items-center lg:text-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50">
                  {benefit.icon}
                </div>
                <dt className="text-lg font-semibold leading-7 text-slate-900">
                  {benefit.title}
                </dt>
                <dd className="mt-1 text-base leading-7 text-slate-600">
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};