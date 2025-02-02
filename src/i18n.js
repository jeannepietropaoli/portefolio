import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enAbout from './translations/en/about.json';
import frAbout from './translations/fr/about.json';
import enContact from './translations/en/contact.json';
import frContact from './translations/fr/contact.json';
import enContactForm from './translations/en/contactForm.json';
import frContactForm from './translations/fr/contactForm.json';
import enHome from './translations/en/home.json';
import frHome from './translations/fr/home.json';
import enProjects from './translations/en/projects.json';
import frProjects from './translations/fr/projects.json';
import enTechstack from './translations/en/techstack.json';
import frTechstack from './translations/fr/techstack.json';
import enNavbar from './translations/en/navbar.json';
import frNavbar from './translations/fr/navbar.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { 
        about: enAbout,
        contact: enContact,
        contactForm: enContactForm,
        home: enHome,
        projects: enProjects,
        techstack: enTechstack,
        navbar: enNavbar
    },
      fr: { 
        about: frAbout,
        contact: frContact,
        contactForm: frContactForm,
        home: frHome,
        projects: frProjects,
        techstack: frTechstack,
        navbar: frNavbar
    }
    },
    fallbackLng: 'en', // Language by default
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;

// resterait a implementer un language switch (input option)
// build le projet