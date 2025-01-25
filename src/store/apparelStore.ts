import { create } from 'zustand';
import axios, { AxiosResponse } from 'axios';

type StoreState<T> = {
  data: T | undefined;
  loading: boolean;
  error: Error | undefined;
  lastUpdated: Date | null;
  setData: (data: T) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: Error | undefined) => void;
  fetchData: () => Promise<void>;
  startPolling: (interval: number) => void;
  updateApparel: (data: T) => void; // New method for updating apparel data
};

const useApparelStore = create<StoreState<any>>((set) => ({
  data: undefined,
  loading: false,
  error: undefined,
  lastUpdated: null, // Track the last update time
  setData: (data) => set({ data, lastUpdated: new Date() }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  fetchData: async () => {
    const api_url = process.env.NEXT_PUBLIC_BASE_URL; // Direct URL setting
    const url = '/api/apparels/featured'; // Fixed endpoint for apparel
    set({ loading: true });
    try {
      const response: AxiosResponse<any> = await axios.get(`${api_url}${url}`);
      set({ data: response.data, loading: false, error: undefined, lastUpdated: new Date() });
    } catch (error) {
      const errorMessage = error instanceof Error ? error : new Error("An unknown error occurred");
      set({ data: undefined, loading: false, error: errorMessage });
    }
  },
  startPolling: (interval: number) => {
    const fetchDataIfStale = async () => {
      const { lastUpdated, fetchData } = useApparelStore.getState();
      const isStale = !lastUpdated || new Date().getTime() - new Date(lastUpdated).getTime() > interval;
      if (isStale) {
        await fetchData();
      }
    };

    fetchDataIfStale(); // Initial check
    setInterval(fetchDataIfStale, interval);
  },
  updateApparel: (data) => set({ data, lastUpdated: new Date() }), // Update with timestamp
}));

export default useApparelStore;
