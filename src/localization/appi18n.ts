import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import 'intl-pluralrules';

const appi18n = i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v4',
    resources: {
      en: { translation: en },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default appi18n;
