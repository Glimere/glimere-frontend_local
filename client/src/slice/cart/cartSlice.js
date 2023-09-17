import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { constants } from "../../global-components/constants";
import axios from "axios";

export const addToCart = createAsyncThunk(
  "carts/addCart",
  async ({ item, jwt }) => {
    try {
      const response = await axios.post(
        `${constants.url}/api/carts?populate=*`,
        { data: item },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      return response.data || [];
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteCart = createAsyncThunk(
  "carts/deleteCart",
  async ({ id, jwt }) => {
    try {
      const response = await axios.delete(`${constants.url}/api/carts/${id}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("delete request");
      if (response.data) {
        return id;
      }
    } catch (error) {
      console.log(error);
    }
    console.log("jwt", jwt);
  }
);

export const updateCart = createAsyncThunk(
  "carts/updateCart",
  async ({ newQuantity, jwt, itemId }) => { // Corrected argument order
    try {
      const response = await axios.put(
        `${constants.url}/api/carts/${itemId}?populate=*`,
        { data: newQuantity }, // You can directly pass the quantity here
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      return response.data || [];
    } catch (error) {
      console.log(error);
    }
  }
);


const initialState = {
  apparels: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addMultipleItems: (state, action) => {
      // Filter out duplicate items before adding them to the cart
      const uniqueItems = action.payload.filter((item) => {
        return !state.apparels.some(
          (cartItem) => cartItem.data.id === item.data.id
        );
      });

      // Add the unique items to the cart
      state.apparels.push(...uniqueItems);
    },

    resetCart: (state) => {
      state.apparels = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.apparels.push(action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteCart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.apparels = state.apparels.filter(
          (item) => item.data.id !== action.payload
        );
      })
      // .addCase(filterApparels.pending, (state, action) => {
      //     state.status = "loading";
      // })
      // .addCase(filterApparels.fulfilled, (state, action) => {
      //     state.status = "succeeded";
      //     state.apparels = action.payload;
      // })
      // .addCase(filterApparels.rejected, (state, action) => {
      //     state.status = "failed";
      //     state.error = action.error.message;
      // })
      .addCase(updateCart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.status = "succeeded";
          // Find the index of the item by ID
      const index = state.apparels.findIndex(
        (item) => item.data.id === action.payload.data.id
      );

      if (index !== -1) {
        // Replace the item in the state with the updated item
        state.apparels[index] = action.payload;
      }
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectCart = (state) => state.cart.apparels;

export const { addItem, removeItem, resetCart, addMultipleItems } =
  cartSlice.actions;

export default cartSlice.reducer;
