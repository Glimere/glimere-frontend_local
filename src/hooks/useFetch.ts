;
// hooks/useFetch.ts
import apiClient from "@/api/client/apiClient"; // Your axios client
import { useQuery } from "@tanstack/react-query";



import { useJwt } from "./useJwt";


interface FetchResponse<T> {
  data: T | null;
  loading: boolean;
  error: { status?: number; message?: string } | null;
}

export default function useFetch<T>(url: string): FetchResponse<T> {
  const access_token = useJwt();

  const { data, isLoading, error } = useQuery<
    T,
    { status?: number; message?: string }
  >({
    queryKey: [url, access_token], // Include access_token in queryKey to refetch if token changes
    queryFn: async () => {
      const response = await apiClient.get(`/api${url}`, {
        headers: {
          Authorization: access_token ? `Bearer ${access_token}` : undefined,
        },
      });
      return response.data; // Return the data from axios response
    },
    staleTime: 1440 * 60 * 1000, // Data is fresh for 1 day
    retry: 1,
  });

  return {
    data: data ?? null,
    loading: isLoading,
    error: error
      ? { status: error.status, message: error.message || "An error occurred" }
      : null,
  };
}