import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../slices/userSlice';
import modalReducer from '../slices/modalSlice';
import postsReducer from '../slices/postsSlice';

import reHydrateStore from './utils/reHydrateStore';
import localStorageMiddleware from './utils/localStorageMiddleware';

export default configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    posts: postsReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});
