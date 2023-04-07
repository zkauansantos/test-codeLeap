import { configureStore, Middleware } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { RootState } from '../types/interfaces/RootState';

type LocalStorageMiddleware = Middleware<{}, RootState>;

const localStorageMiddleware: LocalStorageMiddleware = ({ getState }) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem('user', JSON.stringify(getState()));
  return result;
};

function reHydrateStore(): RootState {
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user')!);
  }

  return { user: { name: '', isLogged: false } };
}

export default configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});
