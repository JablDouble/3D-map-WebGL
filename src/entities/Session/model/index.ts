import { authSlice } from './slice';

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;

export * from './types';
export * as authSelectors from './selectors';
