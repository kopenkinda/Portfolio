import { createI18n } from 'vue-i18n';

import en from './locales/en';
import ru from './locales/ru';
import fr from './locales/fr';

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ru,
    fr,
  },
});
