import uk from './locales/uk.json';
import en from './locales/en.json';

export const resources = {
  uk: { translation: uk },
  en: { translation: en },
};

const language = localStorage.getItem('language') || 'uk';

export const i18Config = {
  lng: language,
  fallbackLng: 'uk',
  supportedLngs: ['uk', 'en'],
  resources,
};
