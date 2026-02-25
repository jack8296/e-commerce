import { api, APIS } from "../../helpers/api.helper";
////types
import { type ProductsValues } from "../../types/types";

export const addProducts = async (data: ProductsValues): Promise<unknown> => {
  const response = await api(APIS.PRODUCTS, "POST", data);
  return response;
};
