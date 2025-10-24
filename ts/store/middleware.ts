import {createListenerMiddleware, addListener} from '@reduxjs/toolkit';
import {AppDispatch, RootState} from './types';
import {addStartupListeners} from './listeners/startup';

export const listenerMiddleware = createListenerMiddleware();

export const startAppListening = listenerMiddleware.startListening.withTypes<
  RootState,
  AppDispatch
>();
export type AppStartListening = typeof startAppListening;

export const addAppListener = addListener.withTypes<RootState, AppDispatch>();
export type AppAddListener = typeof addAppListener;

// Call here the functions which add the listeners to the middleware
addStartupListeners(startAppListening);
