import axios, { type AxiosRequestConfig, type Method } from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

export const createHttpsRequest = () => {
  return async function api<TResponse = unknown, TBody = unknown>(
    endpoint: string,
    method: Method = "GET",
    data?: TBody,
    params?: Record<string, unknown>,
  ): Promise<TResponse> {
    const config: AxiosRequestConfig = {
      url: endpoint,
      method,
      params,
    };

    if (data) {
      config.data = data;

      if (!(data instanceof FormData)) {
        config.headers = {
          "Content-Type": "application/json",
        };
      }
    }

    try {
      const response = await axiosInstance.request<TResponse>(config);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data);
      }
      throw error;
    }
  };
};
