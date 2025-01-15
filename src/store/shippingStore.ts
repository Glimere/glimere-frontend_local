import create from "zustand";
import apiClient from "@/api/client/apiClient";
import { ApiResponse, ShippingAddress } from "@/types";

interface ShippingAddressStore {
    addresses: ShippingAddress[];
    loading: boolean;
    getAddresses: (token: string) => Promise<void>;
    addAddress: (newAddress: ShippingAddress, token: string) => Promise<void>;
    updateAddress: (updatedAddress: ShippingAddress, token: string) => Promise<void>;
    removeAddress: (addressId: string, token: string) => Promise<void>;
}

export const useShippingAddressStore = create<ShippingAddressStore>((set) => ({
    addresses: [],
    loading: false,
    getAddresses: async (token: string) => {
        set({ loading: true });
        try {
            const response = await apiClient.get("/api/shipping", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const responseData: ApiResponse = await response.data
            const shipping: ShippingAddress[] = responseData.data
            console.log("Fetched addresses:", shipping); // Debugging log
            set({ addresses: shipping });
        } catch (error) {
            console.error("Error fetching addresses:", error);
        } finally {
            set({ loading: false });
        }
    },
    addAddress: async (newAddress: ShippingAddress, token: string) => {
        try {
            const response = await apiClient.post("/api/shipping", newAddress, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            set((state) => ({
                addresses: [...state.addresses, response.data.data],
            }));
        } catch (error) {
            console.error("Error adding address:", error);
        }
    },
    updateAddress: async (updatedAddress: ShippingAddress, token: string) => {
        try {
            const response = await apiClient.put(`/api/shipping/${updatedAddress._id}`, updatedAddress, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            set((state) => ({
                addresses: state.addresses.map((address) =>
                    address._id === updatedAddress._id ? response.data.data : address
                ),
            }));
        } catch (error) {
            console.error("Error updating address:", error);
        }
    },
    removeAddress: async (addressId: string, token: string) => {
        try {
            await apiClient.delete(`/api/shipping/${addressId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            set((state) => ({
                addresses: state.addresses.filter((address) => address._id !== addressId),
            }));
        } catch (error) {
            console.error("Error removing address:", error);
        }
    },
}));
