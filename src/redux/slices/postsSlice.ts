import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'posts',
  initialState: {
    arrPosts: [],
  },
  reducers: {
    updatePosts(state, { payload }) {
      return { ...state, arrPosts: payload };
    },
    deletePost(state, { payload }) {
      return { ...state, arrPosts: payload };
    },
  },
});

export const { updatePosts, deletePost } = slice.actions;

export default slice.reducer;
