import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'modal',
  initialState: {
    visible: false,
    edit: false,
    del: false,
  },
  reducers: {
    openModal(state, { payload }) {
      return {
        ...state, visible: true, edit: payload.edit, del: payload.del,
      };
    },
    closeModal(state) {
      return {
        ...state, visible: false, edit: false, del: false,
      };
    },
  },
});

export const { openModal, closeModal } = slice.actions;

export default slice.reducer;
