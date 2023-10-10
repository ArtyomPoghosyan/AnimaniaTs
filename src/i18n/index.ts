import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationRU from './locales/ru.json';
import translationHY from './locales/hy.json';

const resources = {
    'ru': {
        translation: translationRU,
    },
    'en': {
        translation: translationEN
    },
    'hy': {
        translation: translationHY
    }
};
const lang = localStorage.getItem("lang")

i18n
    .use(initReactI18next)
    .init({
        resources,
        compatibilityJSON: 'v3',
        lng: lang as string,
        fallbackLng: lang as string,
    });
export default i18n;