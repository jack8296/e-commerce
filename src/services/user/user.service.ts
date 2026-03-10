//helpers
import { api, APIS } from "../../helpers/api.helper";
//types
import type { User, AddUserValues,EditUserValues } from "../../types/types";

export const SingleUser = async (id: number): Promise<User> => {
  const response = await api<User>(`${APIS.ONE_USER}/${id}`, "GET");
  return response;
};

export const AddSingleUser = async <T>(body: AddUserValues): Promise<T> => {
  const response = await api<T>(APIS.ADD_USER, "POST", body);
  return response;
};

export const GetAllUsers = async <T>(): Promise<T[]> => {
  const response = await api<T[]>(APIS.ALL_USERS, "GET");
  return response;
};

export const DeleteSingleUser = async (id: number): Promise<void> => {
  const response = await api<void>(`${APIS.ONE_USER}/${id}`, "DELETE");
  return response;
};


export const updateUser = async<T>( body: EditUserValues):Promise<T> => {
  const response =await api<T>(`${APIS.UPDATE_USER}/${body.id}`, "PUT", body);
  return response;
};

