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
            &copy; {new Date().getFullYear()} Habilitô Tecnologia. Todos os direitos reservados.
          </p>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-8">
          <p className="text-xs text-slate-400 text-justify leading-relaxed">
            <strong>Aviso Legal:</strong> O Habilitô é uma plataforma de tecnologia que conecta prestadores de serviços independentes a condutores já habilitados.
            <strong> Não somos um Centro de Formação de Condutores (CFC/Autoescola).</strong> As atividades realizadas por meio da plataforma
            <strong> não configuram aulas de formação ou instrução oficial para obtenção de Carteira Nacional de Habilitação (CNH). </strong>
            Os serviços destinam-se exclusivamente a pessoas que possuem CNH válida e buscam aperfeiçoamento, prática assistida ou ganho de confiança na condução de veículos.
            O Habilitô não realiza aulas teóricas ou práticas para obtenção de CNH, nem valida carga horária oficial exigida por órgãos de trânsito.
            Toda a atividade realizada por meio da plataforma deve respeitar integralmente o Código de Trânsito Brasileiro (CTB).
            A plataforma poderá, futuramente, adotar modelos de cobrança para manutenção de anúncios, funcionalidades ou serviços.
            O Habilitô poderá, a seu critério, suspender, modificar ou encerrar a plataforma, total ou parcialmente, a qualquer tempo,
            especialmente durante a fase beta, observadas as obrigações legais aplicáveis.
          </p>
        </div>
      </div>
    </footer>
  );
};