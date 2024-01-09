import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { constants } from "../../global-components/constants";

export const fetchCategory = createAsyncThunk("category/fetchCategory", async () => {
    try {
        const response = await axios.get(`${constants.url}/api/categories?populate=*`);
        console.log('response.data', response.data)
        return response.data.data || []
    } catch (error) {
        console.log(error);
    }
});

export const addCategory = createAsyncThunk("category/addApparel", async (apparel) => {
    try {
        const response = await axios.post(`${constants.url}/api/categories`, apparel);
        return response.data || []
    } catch (error) {
        console.log(error);
    }
});

export const deletecategory = createAsyncThunk("category/deleteCategory", async (id) => {
    try {
        const response = await axios.delete(`${constants.url}/api/categories/${id}`);
        if (response.data) {
            return id
        }
    } catch (error) {
        console.log(error);
    }
}); 

// export const filtercategory = async (value,apparel, brands, category, minPrice, maxPrice, colors, selectedSizes, minDiscount) => {
//     try {
//         const response = await axios.get(`${constants.url}/api/categories?populate=*&filters[${value}][$contains]=${apparel}&filter[brand][$in]=${brands.join(',')}&filter[category][$contains]=${category}&filter[price][$gte]=${minPrice}&filter[price][$lte]=${maxPrice}&filter[size][$in]=${selectedSizes.join(',')}&filter[color][$in]=${colors.join(',')}&filter[discount][$gte]=${minDiscount}`)
//         return response.data.data || []
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const updatecategory = createAsyncThunk("category/updateApparel", async (apparel) => {
//     try {
//         const response = await axios.put(`${constants.url}/api/category/${apparel.id}`, apparel);
//         return response.data || []
//     } catch (error) {
//         console.log(error);
//     }
// });

const categoryReducer = createSlice({
    name: "category",
    initialState: {
        category: [],
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
    },
    reducers: {
        updateCategory: (state, action) => {
            state.category = action.payload
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchCategory.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(fetchCategory.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.category = action.payload;
        })
        .addCase(fetchCategory.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(addCategory.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(addCategory.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.category = action.payload;
        })
        .addCase(addCategory.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(deletecategory.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(deletecategory.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.category = state.category.filter((apparel) => apparel.id !== action.payload);
        })
        .addCase(deletecategory.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        // .addCase(filtercategory.pending, (state, action) => {
        //     state.status = "loading";
        // })
        // .addCase(filtercategory.fulfilled, (state, action) => {
        //     state.status = "succeeded";
        //     state.category = action.payload;
        // })
        // .addCase(filtercategory.rejected, (state, action) => {
        //     state.status = "failed";
        //     state.error = action.error.message;
        // })
        // .addCase(updatecategory.pending, (state, action) => {
        //     state.status = "loading";
        // })
        // .addCase(updatecategory.fulfilled, (state, action) => {
        //     state.status = "succeeded";
        //     state.category = action.payload;
        // })
        // .addCase(updatecategory.rejected, (state, action) => {
        //     state.status = "failed";
        //     state.error = action.error.message;
        // })
    }
})

export const selectAllCategory = (state) => state.category.category;
export const getCategoryStatus = (state) => state.category.status;
export const getCategoryError = (state) => state.category.error;

export const { updateCategory } = categoryReducer.actions;
export default categoryReducer.reducer;