import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <span className="text-2xl font-bold tracking-tight text-slate-900">Habilitô</span>
          <span className="h-2 w-2 rounded-full bg-brand-600"></span>
        </div>
        <nav className="flex items-center gap-4">
          <Button 
            onClick={onCtaClick} 
            variant={scrolled ? "primary" : "primary"} 
            className="text-sm px-4 py-2"
          >
            Seja um Parceiro
          </Button>
        </nav>
      </div>
    </header>
  );
};