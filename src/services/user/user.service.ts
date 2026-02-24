//helpers
import { api, APIS } from "../../helpers/api.helper";
//types
import type { User } from "../../types/types";

export const SingleUser = async (id: number): Promise<User> => {
  const response = await api<User>(`${APIS.ONE_USER}/${id}`, "GET");
  return response;
};
