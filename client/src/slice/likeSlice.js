
import { createSlice } from '@reduxjs/toolkit';


const initialState = {};

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { userId, itemId } = action.payload;
      if (!state[userId]) {
        state[userId] = [];
      }
      state[userId].push(itemId);
    },
    removeItem: (state, action) => {
      const { userId, itemId } = action.payload;
      if (state[userId]) {
        state[userId] = state[userId].filter((likedItemId) => likedItemId !== itemId);
      }
    },
  },
});

export const { addItem, removeItem } = likesSlice.actions;

export default likesSlice.reducer;
