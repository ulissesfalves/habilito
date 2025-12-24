import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-brand-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <blockquote className="text-xl font-medium text-slate-900 sm:text-2xl leading-relaxed">
            "Sou motorista de app há 4 anos em Curitiba. Com o Habilitô, consigo preencher os horários de menor movimento dando aulas. A renda é melhor e o desgaste do carro é bem menor."
          </blockquote>
          <div className="mt-6">
            <div className="font-semibold text-slate-900">Carlos Mendes</div>
            <div className="text-sm text-slate-600">Parceiro Habilitô no Água Verde</div>
          </div>
        </div>
      </div>
    </section>
  );
};