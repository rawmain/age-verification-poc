import global from '../../../locales/it/global.json';
import onboarding from '../../../locales/it/onboarding.json';

const resources = {
  global,
  onboarding
} as const;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'global';
    resources: typeof resources;
  }
}
