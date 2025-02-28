import { axiosFetchData } from "./axios-api";

// export const getListCategory = async () => axiosFetchData("/Category/ListCategory");
export const getListCategory = async () =>
  await axiosFetchData("/PostCategory/ListPostCategory");

export const getCategoryById = async (id: string) =>
  axiosFetchData(`/PostCategory/GetPostCategory/${id}`);
