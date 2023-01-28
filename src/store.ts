import { combineReducers, configureStore } from '@reduxjs/toolkit';

import appReducer from './shared/store/reducers/AppSlice';

const rootReducer = combineReducers({
  appReducer,
});

export const setupStore = () => {
  return configureStore({
    devTools: true,
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
