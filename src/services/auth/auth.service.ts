//helpers
import { api, APIS } from "../../helpers/api.helper";
//types
import type { LoginValues } from "../../types/types";

export const Login = async (data: LoginValues): Promise<unknown> => {
  const response = await api(APIS.LOGIN, "POST", JSON.stringify(data));
  return response;
};
