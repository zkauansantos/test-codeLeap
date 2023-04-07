import { configureStore, Middleware } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import modalReducer from './modalSlice';
import { RootState } from '../types/interfaces/RootState';

type LocalStorageMiddleware = Middleware<{}, RootState>;

const localStorageMiddleware: LocalStorageMiddleware = ({ getState }) => (next) => (action) => {
  const result = next(action);
  const { user, modal } = getState();
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('modal', JSON.stringify(modal));
  return result;
};

function reHydrateStore(): RootState {
  let userState = { name: '', isLogged: false };
  let modalState = { visible: false, edit: false, del: false };

  if (localStorage.getItem('user')) {
    userState = JSON.parse(localStorage.getItem('user')!);
  }

  if (localStorage.getItem('modal')) {
    modalState = JSON.parse(localStorage.getItem('modal')!);
  }

  return { user: userState, modal: modalState };
}

export default configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});
