import React from 'react';

export enum DriverType {
  INSTRUCTOR = 'Instrutor Credenciado',
  APP_DRIVER = 'Motorista de App (Uber/99)',
  EXPERIENCED = 'Motorista Experiente'
}

export interface RegistrationData {
  fullName: string;
  whatsapp: string;
  driverType: DriverType | '';
  yearsExperience: string;
}

export interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}