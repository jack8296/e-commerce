import { createHttpsRequest } from "../libs/api/createHttpsRequest";

export const api = createHttpsRequest();

export const APIS = {
  LOGIN: "/auth/login",
  ONE_USER: "/users",
  PRODUCTS: "/products",
};
