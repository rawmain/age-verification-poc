/* eslint-disable functional/immutable-data */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../types';
import {preferencesReset} from './preferences';

/* State type definition for the startup slice
 * startUpStatus - Status of the startup process
 * hasScreenLock - Indicates if the device has a screen lock
 * biometricState - Indicates the state of the biometric on the device
 */
export type StartupState = {
  startUpStatus:
    | 'DONE'
    | 'WAIT_ONBOARDING'
    | 'WAIT_IDENTIFICATION'
    | 'LOADING'
    | 'ERROR'
    | 'NOT_STARTED';
  hasScreenLock: boolean;
};

// Initial state for the startup slice
const initialState: StartupState = {
  startUpStatus: 'NOT_STARTED',
  hasScreenLock: false
};

/**
 * Redux slice for the startup state.
 */
const startupSlice = createSlice({
  name: 'startup',
  initialState,
  reducers: {
    startupSetStatus: (
      state,
      action: PayloadAction<StartupState['startUpStatus']>
    ) => {
      state.startUpStatus = action.payload;
    },
    startupSetAttributes: (
      state,
      action: PayloadAction<Omit<StartupState, 'startUpStatus'>>
    ) => {
      state.hasScreenLock = action.payload.hasScreenLock;
    },
    startupSetError: state => {
      state.startUpStatus = 'ERROR';
    },
    startupSetLoading: state => {
      state.startUpStatus = 'LOADING';
    },
    startupReset: () => initialState
  },
  extraReducers: builder => {
    // This happens when the whole app state is reset
    builder.addCase(preferencesReset, _ => initialState);
  }
});

/**
 * Exports the reducer.
 */
export const startupReducer = startupSlice.reducer;

/**
 * Exports the actions for the startup slice.
 */
export const {
  startupSetError,
  startupSetLoading,
  startupSetStatus,
  startupSetAttributes,
  startupReset
} = startupSlice.actions;

/**
 * Selects the startup state of the app.
 * @param state - The root state of the Redux store
 * @returns the startup state of the app
 */
export const selectStartupState = (state: RootState) =>
  state.startup.startUpStatus;

/**
 * Selects if the device has a screen lock.
 * @param state - The root state of the Redux store
 * @returns a boolean indicating if the device has a screen lock
 */
export const selectStartupHasScreenLock = (state: RootState) =>
  state.startup.hasScreenLock;
