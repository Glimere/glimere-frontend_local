import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apparels: [],
  // cartTotalQuantity: 0,
  // cartTotalAmount: 0,
  // timeCreated: null,
  // timeUpdated: null,
  // status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  // error: null,
}; 

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.apparels.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.apparels.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.apparels = state.apparels.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.apparels = [];
    },
  },
});

export const selectCart = (state) => state.cart.apparels;

export const { addItem, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
