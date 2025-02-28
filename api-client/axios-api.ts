import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const axiosFetchData = async <T>(
  endpoint: string,
  params?: object
): Promise<T | null> => {
  try {
    const response = await api.get<T>(endpoint, { params });
    return response.data ?? null;
  } catch (error) {
    throw new Error(`Lỗi khi gọi API ${error}`);
  }
};
export default api;

/*

const controller = new AbortController();
api.get("/users", { signal: controller.signal });

// Hủy request
controller.abort();

*/
