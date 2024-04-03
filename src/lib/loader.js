import axios from "axios";
import { defer } from "react-router-dom";

export const singlePageLoader = async ({ request, params }) => {
  const res = await axios.get("http://localhost:8000/api/v1/posts/" + params.id);
  return res.data;
};
export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise =  axios.get("http://localhost:8000/api/v1/posts?" + query);
  return defer({
    postResponse: postPromise,
  });
};

export const profilePageLoader = async () => {
  const postPromise = axios.get("http://localhost:8000/api/v1/user/profilePosts",{withCredentials: true});
//   const chatPromise = axios.get("http://localhost:8000/api/v1/chats");
  
  return defer({
    postResponse: postPromise,
    // chatResponse: chatPromise,
  });
};
