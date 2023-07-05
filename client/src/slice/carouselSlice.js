import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { constants } from "../global-components/constants";

export const fetchCarousels = createAsyncThunk(
  "carousels/fetchCarousels",
  async () => {
    try {
      const response = await axios.get(
        `${constants.url}/api/carousels?populate=*`
      );
      console.log("response.data", response.data);
      return response.data.data || [];
    } catch (error) {
      console.log(error);
    }
  }
);

export const addCarousels = createAsyncThunk(
  "carousels/addCarousel",
  async (carousel) => {
    try {
      const response = await axios.post(
        `${constants.url}/api/carousels`,
        carousel
      );
      return response.data || [];
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteCarousels = createAsyncThunk(
  "carousels/deleteCarousel",
  async (id) => {
    try {
      const response = await axios.delete(
        `${constants.url}/api/carousels/${id}`
      );
      if (response.data) {
        return id;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

// export const updateCarousels = createAsyncThunk("carousels/updateCarousel", async (carousel) => {
//     try {
//         const response = await axios.put(`${constants.url}/api/carousels/${carousel.id}`, carousel);
//         return response.data || []
// } catch (error) {
//     console.log(error);
// }
// });

const carouselsReducer = createSlice({
  name: "carousels",
  initialState: {
    carousels: [],
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
    error: null,
  },
  reducers: {
    updateCarousels: (state, action) => {
      state.carousels = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarousels.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCarousels.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.carousels = action.payload;
      })
      .addCase(fetchCarousels.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addCarousels.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addCarousels.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.carousels = action.payload;
      })
      .addCase(addCarousels.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteCarousels.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteCarousels.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.carousels = state.carousels.filter(
          (carousel) => carousel._id !== action.payload
        );
      })
      .addCase(deleteCarousels.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    // .addCase(updateCarousels.pending, (state, action) => {
    //     state.status = "loading";
    // })
    // .addCase(updateCarousels.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     state.carousels = action.payload;
    // })
    // .addCase(updateCarousels.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message;
    // })
  },
});

export const selectAllCarousels = (state) => state.carousels.carousels;
export const selectCarouselById = (state, carouselId) =>
  state.carousels.carousels.find((carousel) => carousel._id === carouselId);
export const getCarouselStatus = (state) => state.carousels.status;
export const getCarouselError = (state) => state.carousels.error;

export const { updateCarousels } = carouselsReducer.actions;
export default carouselsReducer.reducer;
