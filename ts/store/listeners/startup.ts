import {isAnyOf} from '@reduxjs/toolkit';
import {AppStartListening} from '../middleware';
import {
  startupSetError,
  startupSetLoading,
  startupSetStatus
} from '../reducers/startup';
import {preferencesReset} from '../reducers/preferences';
import initI18n from '../../i18n/i18n';

const startup: Parameters<AppStartListening>[0]['effect'] = async (
  _,
  listenerApi
) => {
  try {
    await initI18n();
    listenerApi.dispatch(startupSetStatus('WAIT_ONBOARDING'));
  } catch {
    listenerApi.dispatch(startupSetError());
  }
};

export const addStartupListeners = (startAppListening: AppStartListening) => {
  startAppListening({
    matcher: isAnyOf(startupSetLoading, preferencesReset),
    effect: startup
  });
};
