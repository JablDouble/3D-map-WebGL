import { createSlice } from '@reduxjs/toolkit';

import { AuthOperation } from './operations';
import { AuthState } from './types';

const initialState: AuthState = {
  user: null,
  isAuth: false,
};

const { signUp, signIn, getInitData, signOut } = AuthOperation;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
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
    [signIn.fulfilled.type]: (state) => {
      state.isAuth = true;
      state.user = null;
    },
    [getInitData.fulfilled.type]: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    [signOut.fulfilled.type]: (state) => {
      state.isAuth = false;
      state.user = null;
    },
  },
});
