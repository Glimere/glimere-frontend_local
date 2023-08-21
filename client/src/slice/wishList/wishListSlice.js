import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishes: [],
  // wishlistTotalQuantity: 0,
  // wishlistTotalAmount: 0,
  // timeCreated: null,
  // timeUpdated: null,
  // status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  // error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWish: (state, action) => {
      const item = state.wishes.find((item) => item.id === action.payload.id);
      if (item) {
        state.wishes = state.wishes.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.wishes.push(action.payload);
      }
    },
    removeWish: (state, action) => {
      state.wishes = state.wishes.filter(
        (item) => item.id !== action.payload
      );
    },
    resetWishlist: (state) => {
      state.wishes = [];
    },
  },
});

export const selectWishlist = (state) => state.wishlist.wishes;

export const { addWish, removeWish, resetWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
