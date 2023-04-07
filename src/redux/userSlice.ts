import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    isLogged: false,
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, isLogged: true, name: payload };
    },
    logout(state) {
      return { ...state, isLogged: false };
    },
  },
});

export const { changeUser, logout } = slice.actions;

export const user = (state: any) => state.name;

export default slice.reducer;
