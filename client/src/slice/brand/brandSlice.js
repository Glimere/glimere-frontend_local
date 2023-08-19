import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { constants } from "../../global-components/constants";
import axios from "axios";


export const fetchBrands = createAsyncThunk("brands/fetchbrands", async () => {
    try {
        const response = await axios.get(`${constants.url}/api/brands?populate=*`);
        console.log('response.data', response.data)
        return response.data.data || []
    } catch (error) {
        console.log(error);
    }
});

export const addBrands = createAsyncThunk("brands/addBrand", async (brand) => {
    try {
        const response = await axios.post(`${constants.url}/api/brands`, brand);
        return response.data || []
    } catch (error) {
        console.log(error);
    }
});

export const deleteBrands = createAsyncThunk("brands/deleteBrand", async (id) => {
    try {
        const response = await axios.delete(`${constants.url}/api/brands/${id}`);
        if (response.data) {
            return id
        }
    } catch (error) {
        console.log(error);
    }
}); 

// export const filterBrands = async (value,Brand, brands, category, minPrice, maxPrice, colors, selectedSizes, minDiscount) => {
//     try {
//         const response = await axios.get(`${constants.url}/api/brands?populate=*&filters[${value}][$contains]=${Brand}&filter[brand][$in]=${Brands.join(',')}&filter[category][$contains]=${category}&filter[price][$gte]=${minPrice}&filter[price][$lte]=${maxPrice}&filter[size][$in]=${selectedSizes.join(',')}&filter[color][$in]=${colors.join(',')}&filter[discount][$gte]=${minDiscount}`)
//         return response.data.data || []
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const updateBrands = createAsyncThunk("brands/updateBrand", async (brand) => {
//     try {
//         const response = await axios.put(`${constants.url}/api/brands/${Brand.id}`, brand);
//         return response.data || []
//     } catch (error) {
//         console.log(error);
//     }
// });

const brandsReducer = createSlice({
    name: "brands",
    initialState: {
        brands: [],
        status: "idle", // "idle" | "loading" | "succeeded" | "failed"
        error: null,
    },
    reducers: {
        updatebrands: (state, action) => {
            state.brands = action.payload
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchBrands.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(fetchBrands.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.brands = action.payload;
        })
        .addCase(fetchBrands.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(addBrands.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(addBrands.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.brands = action.payload;
        })
        .addCase(addBrands.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(deleteBrands.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(deleteBrands.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.brands = state.brands.filter((brand) => brand.id !== action.payload);
        })
        .addCase(deleteBrands.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
        // .addCase(filterBrands.pending, (state, action) => {
        //     state.status = "loading";
        // })
        // .addCase(filterBrands.fulfilled, (state, action) => {
        //     state.status = "succeeded";
        //     state.Brands = action.payload;
        // })
        // .addCase(filterBrands.rejected, (state, action) => {
        //     state.status = "failed";
        //     state.error = action.error.message;
        // })
        // .addCase(updateBrands.pending, (state, action) => {
        //     state.status = "loading";
        // })
        // .addCase(updateBrands.fulfilled, (state, action) => {
        //     state.status = "succeeded";
        //     state.Brands = action.payload;
        // })
        // .addCase(updateBrands.rejected, (state, action) => {
        //     state.status = "failed";
        //     state.error = action.error.message;
        // })
    }
})

export const selectAllBrands = (state) => state.brands.brands;
export const selectBrandById = (state, BrandId) => state.brands.brands.find((brand) => brand.id === BrandId);
export const selectBrandByCategory = (state, category) => state.brands.brands.filter((brand) => brand.category === category);
export const getBrandsStatus = (state) => state.brands.status;
export const getBrandsError = (state) => state.brands.error;

export const { updateBrands } = brandsReducer.actions;
export default brandsReducer.reducer;