import { axiosFetchData } from "./axios-api";

export const getPostList = async () =>
  await axiosFetchData("/PostList/ListPostList");

export const getPostListById = async (id: string) =>
  axiosFetchData(`/PostList/GetPostList/${id}`);
