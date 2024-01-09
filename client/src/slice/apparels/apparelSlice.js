import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { constants } from "../../global-components/constants";
import { useSelector } from "react-redux";

export const fetchApparels = createAsyncThunk("apparels/fetchApparels", async () => {
    try {
        
        const response = await axios.get(`${constants.url}/api/apparels?populate=apparel_imgs&populate=brands.logo&populate=ratings`);
        console.log('response.data', response.data)
        return response.data.data || []
    } catch (error) {
        console.log(error);
    }
});

export const addApparels = createAsyncThunk("apparels/addApparel", async (apparel) => {
    try {
        const response = await axios.post(`${constants.url}/api/apparels`, apparel);
        return response.data || []
    } catch (error) {
        console.log(error);
    }
});

export const deleteApparels = createAsyncThunk("apparels/deleteApparel", async (id) => {
    try {
        const response = await axios.delete(`${constants.url}/api/apparels/${id}`);
        if (response.data) {
            return id
        }
    } catch (error) {
        console.log(error);
    }
}); 

// export const updateApparels = createAsyncThunk("apparels/updateApparel", async (apparel) => {
//     try {
//         const response = await axios.put(`${constants.url}/api/apparels/${apparel.id}`, apparel);
//         return response.data || []
//     } catch (error) {
//         console.log(error);
//     }
// });

const apparelsReducer = createSlice({
    name: "apparels",
    initialState: {
        apparels: [],
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
    },
    reducers: {
        updateApparels: (state, action) => {
            state.apparels = action.payload
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchApparels.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(fetchApparels.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.apparels = action.payload;
        })
        .addCase(fetchApparels.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(addApparels.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(addApparels.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.apparels = action.payload;
        })
        .addCase(addApparels.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(deleteApparels.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(deleteApparels.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.apparels = state.apparels.filter((apparel) => apparel.id !== action.payload);
        })
        .addCase(deleteApparels.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
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
        // .addCase(updateApparels.pending, (state, action) => {
        //     state.status = "loading";
        // })
        // .addCase(updateApparels.fulfilled, (state, action) => {
        //     state.status = "succeeded";
        //     state.apparels = action.payload;
        // })
        // .addCase(updateApparels.rejected, (state, action) => {
        //     state.status = "failed";
        //     state.error = action.error.message;
        // })
    }
})

export const selectAllApparels = (state) => state.apparels.apparels;
export const selectApparelById = (state, apparelId) => state.apparels.apparels.find((apparel) => apparel.id === apparelId);
export const selectApparelByCategory = (state, category) => state.apparels.apparels.filter((apparel) => apparel.category === category);
export const getApparelsStatus = (state) => state.apparels.status;
export const getApparelsError = (state) => state.apparels.error;

export const { updateApparels } = apparelsReducer.actions;
export default apparelsReducer.reducer;