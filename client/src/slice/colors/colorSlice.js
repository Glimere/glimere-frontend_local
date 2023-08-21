import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { constants } from "../../global-components/constants";
import axios from "axios";


export const fetchColor = createAsyncThunk("color/fetchColor", async () => {
    try {
        const response = await axios.get(`${constants.url}/api/colors?populate=*`);
        console.log('response.data', response.data)
        return response.data.data || []
    } catch (error) {
        console.log(error);
    }
});

const colorReducer = createSlice({
    name: "color",
    initialState: {
        color: [],
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
    },
    reducers: {
        updatecolor: (state, action) => {
            state.color = action.payload
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchColor.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(fetchColor.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.color = action.payload;
        })
        .addCase(fetchColor.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export const selectAllColor = (state) => state.color.color;
export const getColorStatus = (state) => state.color.status;
export const getColorError = (state) => state.color.error;

export const { updateColor } = colorReducer.actions;
export default colorReducer.reducer;