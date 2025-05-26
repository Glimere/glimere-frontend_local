import apiClient from "@/api/client/apiClient";
import { Apparel, CreateApparel, UpdateApparel } from "@/types";

export const getApparels = async (): Promise<Apparel[]> => {
  const res = await apiClient.get("/apparels");
  return res.data.apparels;
};

export const getApparel = async (id: string): Promise<Apparel> => {
  const res = await apiClient.get(`/apparels/${id}`);
  return res.data.product;
};

export const createApparel = async (data: CreateApparel) => {
  const res = await apiClient.post("/apparels", data);
  return res.data;
};

export const updateApparel = async ({
  id,
  data,
}: {
  id: string;
  data: UpdateApparel;
}) => {
  const res = await apiClient.put(`/apparels/${id}`, data);
  return res.data;
};

export const deleteApparel = async (id: string) => {
  const res = await apiClient.delete(`/apparels/${id}`);
  return res.data;
};
