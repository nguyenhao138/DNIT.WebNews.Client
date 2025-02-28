import { Breadcrumb } from "@/app/types";
import { axiosFetchData } from "./axios-api";

// export const getPost = async () => axiosFetchData("/Post/ListPost");
export const getListPost = async () => await axiosFetchData("/Post/ListPost");

export const getPostById = async (id: string) =>
  axiosFetchData(`/Post/GetPost/${id}`);

export const getBreadcrumb = async (id: string): Promise<Breadcrumb | null> =>
  axiosFetchData<Breadcrumb>(`/PostDetail/GetBreadcrumb/${id}`);
