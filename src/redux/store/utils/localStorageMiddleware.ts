import { Middleware } from '@reduxjs/toolkit';

type LocalStorageMiddleware = Middleware<{}, any>;

const localStorageMiddleware: LocalStorageMiddleware = ({ getState }) => (next) => (action) => {
  const result = next(action);
  const { user, modal } = getState();
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('modal', JSON.stringify(modal));
  return result;
};

export default localStorageMiddleware;
