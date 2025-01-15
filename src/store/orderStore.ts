import create from 'zustand';
import { getJwt } from '@/lib/cookie';
import { OrderItem, Order, ShippingAddress } from '@/types';
import { ShippingOption, Courier } from '@/types';


type SelectedOrder = {
    items: OrderItem[];
    total_price: number;
    total_items: number;
    shipping_address: ShippingAddress;
    selected_shippingOption: ShippingOption;
    selected_courier: Courier;
};

type OrderStore = {
    orders: Order[];
    addOrder: (order: Order) => void;
    updateOrder: (orderId: string, updatedOrder: Partial<Order>) => void;
    updateOrderStatus: (orderId: string, order_status: string, payment_status: string) => void; // New function
    cancelOrder: (orderId: string) => void;
    getOrder: (orderId: string) => Order | undefined;
    setOrders: (orders: Order[]) => void;
    fetchOrders: () => void; // Fetch orders from API
    selectedOrder: SelectedOrder;
    addItemToSelectedOrder: (item: OrderItem) => void;
    addItemsToSelectedOrder: (item: OrderItem[]) => void;
    updateItemInSelectedOrder: (itemIndex: number, updatedItem: Partial<OrderItem>) => void;
    removeItemFromSelectedOrder: (itemIndex: number) => void;
    setTotalPrice: (price: number) => void;
    setTotalItems: (totalItems: number) => void;
    setShippingAddress: (address: any) => void;
    resetSelectedOrder: () => void;
};

const useOrderStore = create<OrderStore>((set) => ({
    orders: [],
    selectedOrder: {
        items: [],
        total_price: 0,
        total_items: 0,
        shipping_address: {
            location_name: '',
            address: '',
            city: '',
            postalCode: '',
            country: '',
            phoneNumber: '',
            _id: '',
            state: '',
        },
        selected_shippingOption: {
            name: "",
            couriers: [],
        },
        selected_courier: {
            name: "",
            contact_info: {
                email: "",
                phone: "",
            },
            approximateDeliveryTime: "",
            costRange: {
                min: 0,
                max: 0
            },
            trackingURLTemplate: "",
            regions: [""],
            location: {
                country: "",
                state: "",
                city: "",
                zipCode: "",
                addressLine: "",
                geoCoordinates: {
                    latitude: 0,
                    longitude: 0,
                }
            }
        }
    },
    // Add a new order (with API call)
    addOrder: async (order) => {
        const token = await getJwt();
        const response = await fetch('/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Add token here
            },
            body: JSON.stringify(order),
        });

        if (response.ok) {
            const newOrder = await response.json();
            set((state) => ({ orders: [...state.orders, newOrder] }));
        } else {
            console.error('Failed to add order');
        }
    },

    // Update an existing order by ID (with API call)
    updateOrder: async (orderId, updatedOrder) => {
        const token = await getJwt();
        const response = await fetch(`/api/order/${orderId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Add token here
            },
            body: JSON.stringify(updatedOrder),
        });

        if (response.ok) {
            const updatedData = await response.json();
            set((state) => ({
                orders: state.orders.map((order) =>
                    order.id === orderId ? { ...order, ...updatedData, updated_at: new Date().toISOString() } : order
                ),
            }));
        } else {
            console.error('Failed to update order');
        }
    },

    // Update order status and payment status (with API call)
    updateOrderStatus: async (orderId, order_status, payment_status) => {
        const token = await getJwt();
        const response = await fetch(`/api/order/${orderId}/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Add token here
            },
            body: JSON.stringify({ order_status, payment_status }), // Send both order_status and payment_status
        });

        if (response.ok) {
            const updatedData = await response.json();
            set((state) => ({
                orders: state.orders.map((order) =>
                    order.id === orderId ? { ...order, ...updatedData, updated_at: new Date().toISOString() } : order
                ),
            }));
        } else {
            console.error('Failed to update order status');
        }
    },

    // Cancel an order by ID (with API call)
    cancelOrder: async (orderId) => {
        const token = await getJwt();
        const response = await fetch(`/api/order/${orderId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Add token here
            },
            body: JSON.stringify({ order_status: 'cancelled' }),
        });

        if (response.ok) {
            const updatedData = await response.json();
            set((state) => ({
                orders: state.orders.map((order) =>
                    order.id === orderId ? { ...order, ...updatedData, updated_at: new Date().toISOString() } : order
                ),
            }));
        } else {
            console.error('Failed to cancel order');
        }
    },

    // Retrieve an order by ID
    getOrder: (orderId: string) => {
        const state: OrderStore = useOrderStore.getState();
        return state.orders.find((order: Order) => order.id === orderId);
    },

    // Set orders from external data (with API call to load orders on initialization)
    setOrders: (orders) => set({ orders }),

    // Fetch orders from the backend API with JWT authentication
    fetchOrders: async () => {
        const token = await getJwt();
        try {
            const response = await fetch('/api/orders', {
                headers: {
                    'Authorization': `Bearer ${token}`, // Add token here
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch orders');
            }

            const ordersData = await response.json();
            set({ orders: ordersData });
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    },


    addItemsToSelectedOrder: (items) => set((state) => ({
        selectedOrder: state.selectedOrder
            ? {
                ...state.selectedOrder,
                items: [...state.selectedOrder.items, ...items],
            }
            : state.selectedOrder,
    })),

    // Add a single item to the selected order
    addItemToSelectedOrder: (item) => set((state) => ({
        selectedOrder: state.selectedOrder
            ? { ...state.selectedOrder, items: [...state.selectedOrder.items, item] }
            : state.selectedOrder,
    })),

    // Update an item in the selected order
    updateItemInSelectedOrder: (itemIndex, updatedItem) => set((state) => ({
        selectedOrder: state.selectedOrder
            ? {
                ...state.selectedOrder,
                items: state.selectedOrder.items.map((item, index) =>
                    index === itemIndex ? { ...item, ...updatedItem } : item
                ),
            }
            : state.selectedOrder
    })),

    // Remove an item from the selected order
    removeItemFromSelectedOrder: (itemIndex) => set((state) => ({
        selectedOrder: state.selectedOrder
            ? {
                ...state.selectedOrder,
                items: state.selectedOrder.items.filter((_, index) => index !== itemIndex),
            }
            : state.selectedOrder
    })),

    // Set total price of the selected order
    setTotalPrice: (price) => set((state) => ({
        selectedOrder: state.selectedOrder
            ? { ...state.selectedOrder, total_price: price }
            : state.selectedOrder
    })),

    // Set total items of the selected order
    setTotalItems: (totalItems) => set((state) => ({
        selectedOrder: state.selectedOrder
            ? { ...state.selectedOrder, total_items: totalItems }
            : state.selectedOrder
    })),

    // Set shipping address for the selected order
    setShippingAddress: (address) => set((state) => ({
        selectedOrder: state.selectedOrder
            ? { ...state.selectedOrder, shipping_address: address }
            : state.selectedOrder
    })),

    // Reset the selected order
    resetSelectedOrder: () => set({
        selectedOrder: {
            items: [],
            total_price: 0,
            total_items: 0,
            shipping_address: {
                location_name: '',
                address: '',
                city: '',
                postalCode: '',
                country: '',
                phoneNumber: '',
                _id: '',
                state: '',
            },
            selected_shippingOption: {
                name: "",
                couriers: [],
            },
            selected_courier: {
                name: "",
                contact_info: {
                    email: "",
                    phone: "",
                },
                approximateDeliveryTime: "",
                costRange: {
                    min: 0,
                    max: 0
                },
                trackingURLTemplate: "",
                regions: [""],
                location: {
                    country: "",
                    state: "",
                    city: "",
                    zipCode: "",
                    addressLine: "",
                    geoCoordinates: {
                        latitude: 0,
                        longitude: 0,
                    }
                }
            }
        },
    }),
}));

export default useOrderStore;
