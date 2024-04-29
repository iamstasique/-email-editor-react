import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { emailApi } from '../apis/email.api';
import { userApi } from '../apis/user.api';

export const STORE = configureStore({
  reducer: {
    [emailApi.reducerPath]: emailApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([emailApi.middleware, userApi.middleware]),
});

setupListeners(STORE.dispatch);
