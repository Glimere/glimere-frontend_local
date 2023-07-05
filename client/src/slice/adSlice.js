import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { constants } from "../global-components/constants";

export const fetchAds = createAsyncThunk("ads/fetchAds", async () => {
    try {
        const response = await axios.get(`${constants.url}/api/ads-cards?populate=*`);
        console.log('response.data', response.data)
        return response.data.data || []
    } catch (error) {
        console.log(error);
    }
});

export const addAds = createAsyncThunk("ads/addAd", async (ad) => {
    try {
        const response = await axios.post(`${constants.url}/api/ads`, ad);
        return response.data || []
    } catch (error) {
        console.log(error);
    }
});

export const deleteAds = createAsyncThunk("ads/deleteAd", async (id) => {
    try {
        const response = await axios.delete(`${constants.url}/api/ads/${id}`);
        if (response.data) {
            return id
        }
    } catch (error) {
        console.log(error);
    }
});

// export const updateAds = createAsyncThunk("ads/updateAd", async (ad) => {
//     try {
//         const response = await axios.put(`${constants.url}/api/ads/${ad.id}`, ad);
//         return response.data || []
//     } catch (error) {
//         console.log(error);
//     }
// });

const adsReducer = createSlice({
    name: "ads",
    initialState: {
        ads: [],
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
    },
    reducers: {
        updateAds: (state, action) => {
            state.ads = action.payload
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchAds.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(fetchAds.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.ads = action.payload;
        })
        .addCase(fetchAds.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(addAds.fulfilled, (state, action) => {
            state.ads.push(action.payload);
        })
        .addCase(deleteAds.fulfilled, (state, action) => {
            const index = state.ads.findIndex((ad) => ad._id === action.payload);
            state.ads.splice(index, 1);
        })
        // .addCase(updateAds.fulfilled, (state, action) => {
        //     const index = state.ads.findIndex((ad) => ad._id === action.payload._id);
        //     state.ads[index] = action.payload;
        // })
    }
})

export const selectAllAds = (state) => state.ads.ads;
export const selectAdById = (state, adId) => state.ads.ads.find((ad) => ad._id === adId);
export const getAdsError = (state) => state.ads.error;
export const getAdsStatus = (state) => state.ads.status;


export const { updateAds } = adsReducer.actions;
export default adsReducer.reducer;