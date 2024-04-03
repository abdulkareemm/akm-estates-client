import axios from "axios";
import { defer } from "react-router-dom";

export const singlePageLoader = async ({ request, params }) => {
  const res = await axios.get("http://localhost:8000/api/v1/posts/" + params.id);
  return res.data;
};
export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise = await axios.get("http://localhost:8000/api/v1/posts?" + query);
  return defer({
    postResponse: postPromise.data,
  });
};

export const profilePageLoader = async () => {
  const postPromise = axios("http://localhost:8000/api/v1/users/profilePosts");
  const chatPromise = axios("http://localhost:8000/api/v1/chats");
  return defer({
    postResponse: postPromise,
    chatResponse: chatPromise,
  });
};
