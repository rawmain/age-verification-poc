import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import itGlobal from '../../locales/it/global.json';
import itOnboarding from '../../locales/it/onboarding.json';

const initI18n = async () =>
  await i18next.use(initReactI18next).init({
    fallbackLng: 'it',
    defaultNS: 'global',
    react: {
      useSuspense: true
    },
    resources: {
      it: {
        global: itGlobal,
        onboarding: itOnboarding
      }
    }
  });

export default initI18n;
