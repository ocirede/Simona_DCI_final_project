// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; 
import enTranslation from './locales/en/translation.json';
import deTranslation from './locales/de/translation.json'; 

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
        en: {
          translation: enTranslation
        },
        de: {
          translation: deTranslation
        }
      },

    fallbackLng: "en",
    detection: {
        // Order and from where user language should be detected
        order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        
        // Keys or params to lookup language from
        lookupQuerystring: 'lng',
        lookupCookie: 'i18next',
        lookupLocalStorage: 'i18nextLng',
        lookupFromPathIndex: 0,
        lookupFromSubdomainIndex: 0,
  
        // Cache user language on
        caches: ['localStorage', 'cookie'],
        excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
  
        // Optional htmlTag with lang attribute, e.g. <html lang="en">
        htmlTag: document.documentElement,
        
        // Only detect languages that are in the whitelist
        checkWhitelist: true
      },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
