import { create } from 'zustand';
import axios from 'axios';
import { Brand, ApiResponse } from '@/types';

interface BrandStore {
  brands: Brand[];
  fetchBrands: () => Promise<void>;
  addBrand: (brand: Brand) => Promise<void>;
  deleteBrand: (id: string) => Promise<void>;
  updateBrand: (id: string, updatedBrand: Partial<Brand>) => Promise<void>;
}

export const useBrandStore = create<BrandStore>((set) => ({
  brands: [],
  fetchBrands: async () => {
    try {
      const { data }: { data: ApiResponse } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/brand`
      );
      if (data.status === 'success') {
        set({ brands: data.data });
      } else {
        console.error('Failed to fetch brands:', data.message);
      }
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  },
  addBrand: async (brand) => {
    try {
      const { data }: { data: Brand } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/brand`,
        brand
      );
      set((state) => ({ brands: [...state.brands, data] }));
    } catch (error) {
      console.error('Error adding brand:', error);
    }
  },
  deleteBrand: async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/${id}`);
      set((state) => ({
        brands: state.brands.filter((brand) => brand._id !== id),
      }));
    } catch (error) {
      console.error('Error deleting brand:', error);
    }
  },
  updateBrand: async (id, updatedBrand) => {
    try {
      const { data }: { data: Brand } = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/brand/${id}`,
        updatedBrand
      );
      set((state) => ({
        brands: state.brands.map((brand) =>
          brand._id === id ? { ...brand, ...data } : brand
        ),
      }));
    } catch (error) {
      console.error('Error updating brand:', error);
    }
  },
}));
