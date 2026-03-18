import { api, APIS } from "../../helpers/api.helper";
//types
import type { CartsResponse } from "../../types/types";

export const addCarts = async <TRequest, TResponse>(
  body: TRequest,
): Promise<TResponse> => {
  const response = await api<TResponse>(APIS.ADD_CARTS, "POST", body);
  return response;
};

export const getAllCarts = async (): Promise<CartsResponse[]> => {
  const response = await api<CartsResponse[]>(APIS.ADD_CARTS, "GET");
  return response;
};
