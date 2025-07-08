import apiClient from "@/api/client/apiClient";
import axios, { AxiosResponse } from "axios";
import { useEffect, useMemo, useState } from "react";

import { useJwt } from "./useJwt";

type UseFetchState<T> = {
  data: T | undefined;
  loading: boolean;
  error: { message: string; status?: number } | undefined;
  refetch: () => Promise<void>;
};

const useFetch = <T>(url: string) => {
  const [state, setState] = useState<UseFetchState<T>>({
    data: undefined,
    loading: false,
    error: undefined,
    refetch: async () => {},
  });

  const access_token = useJwt();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((previous) => ({ ...previous, loading: true }));
        const response: AxiosResponse<T> = await apiClient.get(`/api${url}`, {
          headers: {
            Authorization: access_token ? `Bearer ${access_token}` : undefined,
          },
        });
        setState({
          data: response.data,
          loading: false,
          error: undefined,
          refetch: fetchData,
        });
      } catch (error: unknown) {
        let errorMessage: string = "An unknown error occurred";
        let status: number | undefined;

        if (axios.isAxiosError(error)) {
          errorMessage = error.response?.data?.message || error.message;
          status = error.response?.status;
        } else if (error instanceof Error) {
          errorMessage = error.message;
        }

        setState({
          data: undefined,
          loading: false,
          error: { message: errorMessage, status },
          refetch: fetchData,
        });
      }
    };

    fetchData();
  }, [access_token, url]);

  return state;
};

export default useFetch;
