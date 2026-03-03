import { api, APIS } from "../../helpers/api.helper";
////types
import { type ProductsValues } from "../../types/types";

export const addProducts = async (data: ProductsValues): Promise<unknown> => {
  const response = await api(APIS.PRODUCTS, "POST", data);
  return response;
};

export const allProducts = async (): Promise<unknown> => {
  const response = await api(APIS.PRODUCTS, "GET");
  return response;
};

export const updateProducts = async (
  data: ProductsValues,
): Promise<unknown> => {
  const response = await api(`${APIS.PRODUCTS}/${data.id}`, "PUT", data);
  return response;
};
