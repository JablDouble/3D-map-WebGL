import { createSlice } from '@reduxjs/toolkit';

import { AuthOperation } from './operations';
import { AuthState } from './types';

const initialState: AuthState = {
  user: null,
  isAuth: false,
};

const { signUp, signIn } = AuthOperation;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
    },
  },
  extraReducers: {
    [signUp.fulfilled.type]: (state, action) => {
      state.isAuth = false;
      state.user = action.payload.user;
    },
    [signIn.fulfilled.type]: (state, action) => {
      state.isAuth = true;
      state.user = action.payload.user;
    },
  },
});
