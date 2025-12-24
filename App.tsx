import React, { useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { Audience } from './components/Audience';
import { Testimonials } from './components/Testimonials';
import { FormSection } from './components/FormSection';
import { Footer } from './components/Footer';

function App() {
  const scrollToForm = useCallback(() => {
    const formElement = document.getElementById('register-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-100 selection:text-brand-900">
      <Header onCtaClick={scrollToForm} />
      <main>
        <Hero onCtaClick={scrollToForm} />
        <Benefits />
        <HowItWorks />
        <Audience />
        <Testimonials />
        <FormSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;