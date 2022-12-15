import axios from "axios";
import { PostComment, PostItem } from "../ts-utils/interfaces";

const base = "http://localhost:3001";

export const addPost = async (post: PostItem) => {
  const res = await axios.post(`${base}/api/posts`, post);
  return res.data;
};

export const getPosts = async () => {
  const url = `${base}/api/posts`;
  const res = await axios.get(url);
  return res.data;
};

export const getPost = async (id: String | undefined) => {
  const url = `${base}/api/posts/${id}`;
  const res = await axios.get(url);
  return res.data;
};

export const addComment = async (post: PostComment) => {
  const res = await axios.post(`${base}/api/posts/${post.owner}`, post);
  return res.data;
};

export const getComments = async (id: String | undefined) => {
  const url = `${base}/api/posts/${id}/comments`;
  const res = await axios.get(url);
  return res.data;
};
