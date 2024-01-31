import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";


import tEN from "./en/en.json";
import tTR from "./tr/tr.json";
import tRU from "./ru/ru.json";
import tAZ from "./az/az.json";
import tDE from "./de/de.json";
import tES from "./es/es.json";
import tFR from "./fr/fr.json";

i18n
  .use(LanguageDetector) // Tarayıcı dil algılama modülünü kullanın
  .use(initReactI18next) // React projeleri için i18next entegrasyonunu sağlayan modülü kullanın
  .init({
    resources: {
    en: {
      translation: tEN,
    },
    tr: {
      translation: tTR,
    },
    az:{
      translation: tAZ, 
    },
    de:{
      translation: tDE, 
    },
    es:{
      translation: tES, 
    }, 
    ru:{
      translation: tRU, 
    }, 
    fr:{
      translation: tFR, 
    }
  },
  
  fallbackLng: 'tr', // Varsayılan dil
  debug: true, // Hata ayıklama modu
  interpolation: {
    escapeValue: false, // HTML ve diğer etiketleri çözümle
  },
  detection: {
    order: ['localStorage'], // Dil tercihini localStorage'dan kontrol et
    caches: ['localStorage'],
  },
    });
  
  export default i18n;