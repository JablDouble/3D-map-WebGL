import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authReducer } from '../../entities/public-api';
import { serverRequestMiddleware } from '../lib/middlewares/serverRequestMiddleware';
import { appReducer } from '../public-api';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

const setupStore = () =>
  configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(serverRequestMiddleware),
  });

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
