/* eslint-disable functional/immutable-data */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, type PersistConfig} from 'redux-persist';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import {RootState} from '../types';

/* State type definition for the preferences slice
 * sessionId - Randomly generated session id which identifies a wallet when creating a wallet instance. It gets resetted when the onboarding
 * gets resetted as well.
 * isOnboardingComplete - Indicates if the user has completed the onboarding flow.
 * isBiometricEnabled - Indicates if the biometric is enabled for the user.
 */
export type PreferencesState = {
  sessionId: string;
  isOnboardingComplete: boolean;
  isBiometricEnabled: boolean;
};

// Initial state for the preferences slice
const initialState: PreferencesState = {
  sessionId: uuid.v4().toString(),
  isOnboardingComplete: false,
  isBiometricEnabled: false
};

/**
 * Redux slice for the preferences state. It contains information about the preferences state.
 */
const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    // Onboarding
    preferencesSetIsOnboardingDone: state => {
      state.isOnboardingComplete = true;
    },
    // Fingerpint
    preferencesSetIsBiometricEnabled: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isBiometricEnabled = action.payload;
    },
    preferencesReset: () => initialState
  },
  extraReducers: builder => {
    // This happens when the whole app state is reset
    builder.addCase(preferencesReset, _ => initialState);
  }
});

/**
 * Exports the actions for the preferences slice.
 */
export const {
  preferencesSetIsOnboardingDone,
  preferencesSetIsBiometricEnabled,
  preferencesReset
} = preferencesSlice.actions;

/**
 * Redux persist configuration for the preferences slice.
 * Currently it uses AsyncStorage as the storage engine which stores it unencrypted in the device storage.
 */
const preferencesPersist: PersistConfig<PreferencesState> = {
  key: 'preferences',
  storage: AsyncStorage
};

/**
 * Persisted reducer for the preferences slice.
 */
export const preferencesReducer = persistReducer(
  preferencesPersist,
  preferencesSlice.reducer
);

/**
 * Selects if the onboarding has been completed.
 * @param state - The root state of the Redux store
 * @returns a boolean indicating weather the onboarding has been completed
 */
export const selectisOnboardingComplete = (state: RootState) =>
  state.preferences.isOnboardingComplete;

/**
 * Selects if the biometric is enabled.
 * @param state - The root state of the Redux store
 * @returns a boolean indicating weather the biometric is enabled
 */
export const selectIsBiometricEnabled = (state: RootState) =>
  state.preferences.isBiometricEnabled;

/**
 * Selects the session id of the wallet
 * @param state - The root state of the Redux store
 * @returns a randomly generated uuid
 */
export const selectSessionId = (state: RootState) =>
  state.preferences.sessionId;
