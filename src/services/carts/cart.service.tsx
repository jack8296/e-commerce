import { api, APIS } from "../../helpers/api.helper";

export const addCarts = async <TRequest, TResponse>(
  body: TRequest,
): Promise<TResponse> => {
  const response = await api<TResponse>(APIS.ADD_CARTS, "POST", body);
  return response;
};

export const getAllCarts = async <T>(): Promise<T> => {
  const response = await api<T>(APIS.ADD_CARTS, "GET");
  return response;
};