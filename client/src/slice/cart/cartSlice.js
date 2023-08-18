
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  timeCreated: null,
  timeUpdated: null,
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null,
};

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