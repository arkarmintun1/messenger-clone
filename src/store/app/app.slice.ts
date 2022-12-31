import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const Languages = {
  en: 'English (US)',
  mm: 'Myanmar',
};

export interface AppState {
  language: keyof typeof Languages;
}

const initialState: AppState = {
  language: 'en',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLanguage: (
      state: AppState,
      action: PayloadAction<keyof typeof Languages>,
    ) => {
      state.language = action.payload;
    },
  },
});

export const appActions = appSlice.actions;

export const appReducer = appSlice.reducer;
