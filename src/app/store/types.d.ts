import { rootReducer, setupStore } from '.';

declare global {
  type RootState = ReturnType<typeof rootReducer>;
  type AppStore = ReturnType<typeof setupStore>;
  type AppDispatch = AppStore['dispatch'];
}
