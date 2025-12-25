import React from 'react';

export enum DriverType {
  INSTRUCTOR = 'Instrutor Profissional',
  APP_DRIVER = 'Motorista Mentor (App/Particular)',
  EXPERIENCED = 'Motorista com Experiência'
}

export interface RegistrationData {
  fullName: string;
  email: string;
  whatsapp: string;
  driverType: DriverType | '';
  yearsExperience: string;
  cnhCategory: string;
}

export interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}