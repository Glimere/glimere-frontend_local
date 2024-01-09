import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { constants } from "../../global-components/constants";

export const fetchSubcategory = createAsyncThunk("subcategory/fetchSubcategory", async () => {
    try {
        const response = await axios.get(`${constants.url}/api/subcategories?populate=*`);
        console.log('response.data', response.data)
        return response.data.data || []
    } catch (error) {
        console.log(error);
    }
});

export const addSubcategory = createAsyncThunk("subcategory/addApparel", async (apparel) => {
    try {
        const response = await axios.post(`${constants.url}/api/subcategories`, apparel);
        return response.data || []
    } catch (error) {
        console.log(error);
    }
});

export const deleteSubcategory = createAsyncThunk("subcategory/deleteApparel", async (id) => {
    try {
        const response = await axios.delete(`${constants.url}/api/subcategories/${id}`);
        if (response.data) {
            return id
        }
    } catch (error) {
        console.log(error);
    }
}); 

// export const filtersubcategory = async (value,apparel, brands, category, minPrice, maxPrice, colors, selectedSizes, minDiscount) => {
//     try {
//         const response = await axios.get(`${constants.url}/api/subcategories?populate=*&filters[${value}][$contains]=${apparel}&filter[brand][$in]=${brands.join(',')}&filter[category][$contains]=${category}&filter[price][$gte]=${minPrice}&filter[price][$lte]=${maxPrice}&filter[size][$in]=${selectedSizes.join(',')}&filter[color][$in]=${colors.join(',')}&filter[discount][$gte]=${minDiscount}`)
//         return response.data.data || []
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const updatesubcategory = createAsyncThunk("subcategory/updateApparel", async (apparel) => {
//     try {
//         const response = await axios.put(`${constants.url}/api/subcategories/${apparel.id}`, apparel);
//         return response.data || []
//     } catch (error) {
//         console.log(error);
//     }
// });

const subcategoryReducer = createSlice({
    name: "subcategory",
    initialState: {
        subcategory: [],
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
    },
    reducers: {
        updateSubcategory: (state, action) => {
            state.subcategory = action.payload
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchSubcategory.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(fetchSubcategory.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.subcategory = action.payload;
        })
        .addCase(fetchSubcategory.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(addSubcategory.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(addSubcategory.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.subcategory = action.payload;
        })
        .addCase(addSubcategory.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(deleteSubcategory.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(deleteSubcategory.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.subcategory = state.subcategory.filter((apparel) => apparel.id !== action.payload);
        })
        .addCase(deleteSubcategory.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        // .addCase(filtersubcategory.pending, (state, action) => {
        //     state.status = "loading";
        // })
        // .addCase(filtersubcategory.fulfilled, (state, action) => {
        //     state.status = "succeeded";
        //     state.subcategory = action.payload;
        // })
        // .addCase(filtersubcategory.rejected, (state, action) => {
        //     state.status = "failed";
        //     state.error = action.error.message;
        // })
        // .addCase(updatesubcategory.pending, (state, action) => {
        //     state.status = "loading";
        // })
        // .addCase(updatesubcategory.fulfilled, (state, action) => {
        //     state.status = "succeeded";
        //     state.subcategory = action.payload;
        // })
        // .addCase(updatesubcategory.rejected, (state, action) => {
        //     state.status = "failed";
        //     state.error = action.error.message;
        // })
    }
})

export const selectAllSubcategory = (state) => state.subcategory.subcategory;
export const getSubcategoryStatus = (state) => state.subcategory.status;
export const getSubcategoryError = (state) => state.subcategory.error;

export const { updateSubcategory } = subcategoryReducer.actions;
export default subcategoryReducer.reducer;