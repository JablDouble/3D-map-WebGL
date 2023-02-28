import { appSlice } from './appSlice';

export const appReducer = appSlice.reducer;
export const appActions = appSlice.actions;

export * from './types';
export * as appSelectors from './selectors';
