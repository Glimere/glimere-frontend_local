import apiClient from "@/api/client/apiClient";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useJwt } from "./useJwt";

type UseFetchState<T> = {
  data: T | undefined;
  loading: boolean;
  error: Error | undefined;
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

  const api_url: string =
    `${process.env.NEXT_PUBLIC_BASE_URL}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((previous) => ({ ...previous, loading: true }));
        const response: AxiosResponse<T> = await apiClient.get(`/api${url}`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        setState({
          data: response.data,
          loading: false,
          error: undefined,
          refetch: fetchData,
        });
      } catch (error: unknown) {
        let errorMessage: Error;

        // eslint-disable-next-line prefer-const
        errorMessage =
          error instanceof Error
            ? error
            : new Error("An unknown error occurred");

        setState({
          data: undefined,
          loading: false,
          error: errorMessage,
          refetch: fetchData,
        });
      }
    };

    fetchData();
  }, [access_token, api_url, url]);

  return state;
};

export default useFetch;
