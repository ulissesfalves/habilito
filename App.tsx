import React, { useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { Audience } from './components/Audience';
import { Testimonials } from './components/Testimonials';
import { FormSection } from './components/FormSection';
import { Footer } from './components/Footer';

function App() {

  useEffect(() => {
  // Evita reinicializar o pixel
  if (!(window as any).fbq) {
    !(function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );

    (window as any).fbq('init', '4394575534159450');
  }

  (window as any).fbq('track', 'PageView');
}, []);

  
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
