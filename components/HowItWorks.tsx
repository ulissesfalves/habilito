import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Crie seu perfil",
      description: "Preencha o formulário abaixo em menos de 5 minutos."
    },
    {
      number: "02",
      title: "Verificação rápida",
      description: "Validamos sua CNH e histórico para segurança de todos."
    },
    {
      number: "03",
      title: "Comece a lucrar",
      description: "Receba solicitações de alunos e comece a dar aulas."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Como funciona</h2>
          <p className="mt-4 text-lg text-slate-600">Simples, direto e sem burocracia desnecessária.</p>
        </div>
        
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white border-4 border-slate-50 text-2xl font-bold text-brand-600 shadow-sm mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};