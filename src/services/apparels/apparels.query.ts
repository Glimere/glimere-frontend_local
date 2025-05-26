import { CreateApparel, UpdateApparel } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createApparel,
  deleteApparel,
  getApparel,
  getApparels,
  updateApparel,
} from "./apparel.api";

export const useApparels = () =>
  useQuery({
    queryKey: ["apparels"],
    queryFn: getApparels,
  });

export const useApparel = (id: string) =>
  useQuery({
    queryKey: ["apparel", id],
    queryFn: () => getApparel(id),
    enabled: !!id,
  });

export const useCreateApparel = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateApparel) => createApparel(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["apparels"] });
    },
  });
};

export const useUpdateApparel = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateApparel }) =>
      updateApparel({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["apparels"] });
    },
  });
};

export const useDeleteApparel = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteApparel(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["apparels"] });
    },
  });
};
