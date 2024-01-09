import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { constants } from "../../global-components/constants";

export const fetchApparelType = createAsyncThunk("apparelType/fetchApparelType", async () => {
    try {
        const response = await axios.get(`${constants.url}/api/apparel-types?populate=*`); 
        console.log('response.data', response.data)
        return response.data.data || []
    } catch (error) {
        console.log(error);
    }
});

export const addApparelType = createAsyncThunk("apparelType/addApparel", async (apparel) => {
    try {
        const response = await axios.post(`${constants.url}/api/subcategories`, apparel);
        return response.data || []
    } catch (error) {
        console.log(error);
    }
});

export const deleteApparelType = createAsyncThunk("apparelType/deleteApparel", async (id) => {
    try {
        const response = await axios.delete(`${constants.url}/api/subcategories/${id}`);
        if (response.data) {
            return id
        }
    } catch (error) {
        console.log(error);
    }
}); 

// export const filterApparelType = async (value,apparel, brands, category, minPrice, maxPrice, colors, selectedSizes, minDiscount) => {
//     try {
//         const response = await axios.get(`${constants.url}/api/subcategories?populate=*&filters[${value}][$contains]=${apparel}&filter[brand][$in]=${brands.join(',')}&filter[category][$contains]=${category}&filter[price][$gte]=${minPrice}&filter[price][$lte]=${maxPrice}&filter[size][$in]=${selectedSizes.join(',')}&filter[color][$in]=${colors.join(',')}&filter[discount][$gte]=${minDiscount}`)
//         return response.data.data || []
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const updateApparelType = createAsyncThunk("ApparelType/updateApparel", async (apparel) => {
//     try {
//         const response = await axios.put(`${constants.url}/api/subcategories/${apparel.id}`, apparel);
//         return response.data || []
//     } catch (error) {
//         console.log(error);
//     }
// });

const apparelTypeReducer = createSlice({
    name: "apparelType",
    initialState: {
        apparelType: [],
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
    },
    reducers: {
        updateApparelType: (state, action) => {
            state.apparelType = action.payload
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchApparelType.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(fetchApparelType.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.apparelType = action.payload;
        })
        .addCase(fetchApparelType.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(addApparelType.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(addApparelType.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.apparelType = action.payload;
        })
        .addCase(addApparelType.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(deleteApparelType.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(deleteApparelType.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.apparelType = state.apparelType.filter((apparel) => apparel.id !== action.payload);
        })
        .addCase(deleteApparelType.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        // .addCase(filterApparelType.pending, (state, action) => {
        //     state.status = "loading";
        // })
        // .addCase(filterApparelType.fulfilled, (state, action) => {
        //     state.status = "succeeded";
        //     state.apparelType = action.payload;
        // })
        // .addCase(filterApparelType.rejected, (state, action) => {
        //     state.status = "failed";
        //     state.error = action.error.message;
        // })
        // .addCase(updateApparelType.pending, (state, action) => {
        //     state.status = "loading";
        // })
        // .addCase(updateApparelType.fulfilled, (state, action) => {
        //     state.status = "succeeded";
        //     state.apparelType = action.payload;
        // })
        // .addCase(updateApparelType.rejected, (state, action) => {
        //     state.status = "failed";
        //     state.error = action.error.message;
        // })
    }
})

export const selectAllApparelType = (state) => state.apparelType.apparelType;
export const getApparelTypeStatus = (state) => state.apparelType.status;
export const getApparelTypeError = (state) => state.apparelType.error;

export const { updateApparelType } = apparelTypeReducer.actions;
export default apparelTypeReducer.reducer;