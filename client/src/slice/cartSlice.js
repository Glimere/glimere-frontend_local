
import { createSlice } from '@reduxjs/toolkit';


const initialState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { userId, item } = action.payload;
      if (!state[userId]) {
        state[userId] = [];
      }
      state[userId].push(item);
    },
    removeItem: (state, action) => {
      const { userId, itemId } = action.payload;
      if (state[userId]) {
        state[userId] = state[userId].filter((item) => item.id !== itemId);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;