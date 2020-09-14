import { createI18n } from 'vue-i18n';

import us from './locales/en';
import ru from './locales/ru';
import fr from './locales/fr';

export default createI18n({
  locale: 'us',
  fallbackLocale: 'us',
  messages: {
    us,
    ru,
    fr,
  },
});
