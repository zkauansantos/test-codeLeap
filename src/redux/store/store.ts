import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../slices/userSlice';
import modalReducer from '../slices/modalSlice';

import reHydrateStore from './utils/reHydrateStore';
import localStorageMiddleware from './utils/localStorageMiddleware';

export default configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});
