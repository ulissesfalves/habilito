import React from 'react';
import { Wallet, CalendarClock, Users, ShieldCheck } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Wallet className="h-6 w-6 text-brand-600" />,
      title: "Ganhos Reais",
      description: "Receba um valor justo por aula dada. Sem as margens altas das autoescolas tradicionais."
    },
    {
      icon: <CalendarClock className="h-6 w-6 text-brand-600" />,
      title: "Flexibilidade Total",
      description: "Você decide quando quer dar aulas. Manhãs, noites ou finais de semana. Você é o chefe."
    },
    {
      icon: <Users className="h-6 w-6 text-brand-600" />,
      title: "Alunos Garantidos",
      description: "Nossa plataforma traz os alunos até você. Foque em ensinar, nós cuidamos do marketing."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand-600" />,
      title: "Pagamento Seguro",
      description: "Receba diretamente em sua conta semanalmente. Transparência total nos ganhos."
    }
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">Por que o Habilitô?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Sua habilidade ao volante vale muito
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