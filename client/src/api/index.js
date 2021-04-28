import axios from "axios";

// const url = "http://localhost:5000/posts";
const url = "https://hy-memories-app.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`, deletePost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);