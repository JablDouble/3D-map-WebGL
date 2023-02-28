import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AppState } from './types';

const initialState: AppState = {
  isLoading: false,
  error: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    fetchDataStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchDataSuccess: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
