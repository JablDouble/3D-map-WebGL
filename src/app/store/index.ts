import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authReducer } from '../../entities/public-api';
import { appReducer, serverRequestMiddleware } from '../../shared/public-api';

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export const setupStore = () =>
  configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(serverRequestMiddleware),
  });

export const store = setupStore();
