import { rootReducer } from './reducers';

import { configureStore } from '@reduxjs/toolkit';

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootReducer = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
