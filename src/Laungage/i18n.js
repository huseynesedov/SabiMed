import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";


import tEN from "./en/en.json";
import tTR from "./tr/tr.json";
import tRU from "./ru/ru.json";
import tAZ from "./az/az.json";
import tDE from "./de/de.json";
import tES from "./es/es.json";

const resources = {
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
    }, ru:{
      translation: tRU, 
    }
  };
  
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      debug: false,
      resources,
      interpolation: {
        escapeValue: false,
      },
    });
  
  export default i18n;