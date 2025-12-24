import React, { useState } from 'react';
import { Button } from './ui/Button';
import { DriverType, RegistrationData } from '../types';
import { CheckCircle } from 'lucide-react';

export const FormSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    whatsapp: '',
    driverType: '',
    yearsExperience: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      console.log('Form submitted:', formData);
    }, 1000);
  };

  return (
    <section id="register-form" className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-brand-600 px-6 py-8 sm:px-10 text-center">
            <h2 className="text-2xl font-bold text-white">Comece a ensinar em Curitiba</h2>
            <p className="mt-2 text-brand-100">Junte-se a primeira turma de parceiros Habilitô.</p>
          </div>

          <div className="px-6 py-8 sm:px-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Cadastro recebido!</h3>
                <p className="mt-2 text-slate-600">
                  Nossa equipe entrará em contato pelo WhatsApp em até 24h para os próximos passos.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-brand-600 font-medium hover:text-brand-700"
                >
                  Voltar ao início
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">Nome Completo</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-3 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    placeholder="Ex: João da Silva"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700">WhatsApp</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    id="whatsapp"
                    required
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-3 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    placeholder="(41) 99999-9999"
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="driverType" className="block text-sm font-medium text-slate-700">Qual seu perfil?</label>
                  <select
                    id="driverType"
                    name="driverType"
                    required
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-3 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 bg-white"
                    value={formData.driverType}
                    onChange={handleChange}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value={DriverType.INSTRUCTOR}>{DriverType.INSTRUCTOR}</option>
                    <option value={DriverType.APP_DRIVER}>{DriverType.APP_DRIVER}</option>
                    <option value={DriverType.EXPERIENCED}>{DriverType.EXPERIENCED}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="yearsExperience" className="block text-sm font-medium text-slate-700">Anos de CNH</label>
                  <input
                    type="number"
                    name="yearsExperience"
                    id="yearsExperience"
                    required
                    min="1"
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-3 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    placeholder="Ex: 8"
                    value={formData.yearsExperience}
                    onChange={handleChange}
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" fullWidth className="text-lg">
                    Quero Ensinar em Curitiba
                  </Button>
                  <p className="mt-4 text-center text-xs text-slate-500">
                    Ao enviar, você concorda com nossa política de privacidade e verificação de dados.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};