import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { constants } from "../../global-components/constants";
import axios from "axios";


export const fetchSize = createAsyncThunk("size/fetchSize", async () => {
    try {
        const response = await axios.get(`${constants.url}/api/sizes?populate=*`);
        console.log('response.data', response.data)
        return response.data.data || []
    } catch (error) {
        console.log(error);
    }
});

const sizeReducer = createSlice({
    name: "size",
    initialState: {
        size: [],
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
    },
    reducers: {
        updatesize: (state, action) => {
            state.size = action.payload
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchSize.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(fetchSize.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.size = action.payload;
        })
        .addCase(fetchSize.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export const selectAllSize = (state) => state.size.size;
export const getSizeStatus = (state) => state.size.status;
export const getSizeError = (state) => state.size.error;

export const { updateSize } = sizeReducer.actions;
export default sizeReducer.reducer;