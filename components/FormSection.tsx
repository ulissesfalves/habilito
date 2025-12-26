import React, { useState } from 'react';
import { Button } from './ui/Button';
import { DriverType, RegistrationData } from '../types';
import { CheckCircle, Loader2 } from 'lucide-react';

export const FormSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    email: '',
    whatsapp: '',
    driverType: '',
    yearsExperience: '',
    cnhCategory: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbwZbnrrTApO3AT4mm_jXPrBIAJqGnUErBGroAWzNxBQBwB42PfE63lO-98PO0TwgoD6/exec";
  
    // Mapeamento para as colunas da planilha
    const dadosParaEnviar = {
      nome: formData.fullName,
      email: formData.email,
      telefone: formData.whatsapp,
      cidade: "Curitiba",
      estado: "PR",
      anos_cnh: formData.yearsExperience,
      categoria_cnh: formData.cnhCategory,
      experiencia_instrutor: formData.driverType,
    };
  
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(dadosParaEnviar),
      });
  
      // ✅ MARCA COMO ENVIADO
      setSubmitted(true);
  
      // ✅ DISPARA EVENTO LEAD DO META PIXEL
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: "Cadastro Mentor Habilitô",
          city: "Curitiba",
          profile: formData.driverType,
        });
      }
  
    } catch (error) {
      console.error("Erro ao enviar", error);
      alert("Houve um erro ao enviar seu cadastro. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      whatsapp: '',
      driverType: '',
      yearsExperience: '',
      cnhCategory: ''
    });
  };

  return (
    <section id="register-form" className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-brand-600 px-6 py-8 sm:px-10 text-center">
            <h2 className="text-2xl font-bold text-white">Torne-se um Mentor Habilitô</h2>
            <p className="mt-2 text-brand-100">Junte-se à primeira turma de parceiros em Curitiba.</p>
          </div>

          <div className="px-6 py-8 sm:px-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Pré-cadastro recebido!</h3>
                <p className="mt-2 text-slate-600">
                  Seus dados já estão em nossa base segura. Nossa equipe entrará em contato pelo WhatsApp para validação do perfil.
                </p>
                <button 
                  onClick={resetForm}
                  className="mt-6 text-brand-600 font-medium hover:text-brand-700"
                >
                  Enviar outro cadastro
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome Completo */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">Nome Completo</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    disabled={isSubmitting}
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-3 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    placeholder="Ex: João da Silva"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    disabled={isSubmitting}
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-3 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    placeholder="joao@exemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700">WhatsApp</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    id="whatsapp"
                    required
                    disabled={isSubmitting}
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-3 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    placeholder="(41) 99999-9999"
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Anos de CNH */}
                  <div>
                    <label htmlFor="yearsExperience" className="block text-sm font-medium text-slate-700">Anos de CNH</label>
                    <input
                      type="number"
                      name="yearsExperience"
                      id="yearsExperience"
                      required
                      min="1"
                      disabled={isSubmitting}
                      className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-3 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                      placeholder="Ex: 8"
                      value={formData.yearsExperience}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Categoria CNH */}
                  <div>
                    <label htmlFor="cnhCategory" className="block text-sm font-medium text-slate-700">Categoria da CNH</label>
                    <select
                      id="cnhCategory"
                      name="cnhCategory"
                      required
                      disabled={isSubmitting}
                      className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-3 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 bg-white"
                      value={formData.cnhCategory}
                      onChange={handleChange}
                    >
                      <option value="">Selecione</option>
                      <option value="B">B (Carro)</option>
                      <option value="AB">AB (Carro e Moto)</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                    </select>
                  </div>
                </div>

                {/* Perfil */}
                <div>
                  <label htmlFor="driverType" className="block text-sm font-medium text-slate-700">Qual seu perfil?</label>
                  <select
                    id="driverType"
                    name="driverType"
                    required
                    disabled={isSubmitting}
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

                <div className="pt-2">
                  <Button type="submit" fullWidth className="text-lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Enviando...
                      </span>
                    ) : (
                      "Quero ser um Mentor"
                    )}
                  </Button>
                  <p className="mt-4 text-center text-xs text-slate-500">
                    Ao enviar, você concorda com nossos termos. O cadastro é gratuito por tempo limitado e o modelo de cobrança poderá ser alterado futuramente.
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
