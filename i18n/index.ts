import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBR from './locales/pt/pt-BR.json';
import enUS from './locales/en/en-US.json';

const resources = {
  'pt-BR': ptBR,
  'en-US': enUS,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en-US',
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
