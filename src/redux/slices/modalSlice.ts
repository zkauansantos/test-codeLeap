import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'modal',
  initialState: {
    visible: false,
    edit: false,
    del: false,
    postId: undefined,
  },
  reducers: {
    openModal(state, { payload }) {
      return {
        ...state, visible: true, edit: payload.edit, del: payload.del, postId: payload.postId,
      };
    },
    closeModal(state, { payload }) {
      return {
        ...state, visible: false, edit: false, del: false, postId: payload.postId,
      };
    },
  },
});

export const { openModal, closeModal } = slice.actions;

export default slice.reducer;
