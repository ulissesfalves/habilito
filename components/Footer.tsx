import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
             <span className="text-xl font-bold tracking-tight text-slate-900">Habilitô</span>
             <span className="h-1.5 w-1.5 rounded-full bg-brand-600"></span>
          </div>
          <p className="text-sm text-slate-500 text-center sm:text-right">
            &copy; {new Date().getFullYear()} Habilitô Curitiba. Todos os direitos reservados.
          </p>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-8">
          <p className="text-xs text-slate-400 text-center">
            A plataforma realiza verificação de antecedentes criminais e situação da CNH de todos os parceiros. 
            Respeitamos as leis de trânsito locais. Este serviço não substitui o processo de habilitação oficial do DETRAN, 
            servindo como reforço prático para habilitados.
          </p>
        </div>
      </div>
    </footer>
  );
};