import axios from "../../../../../google-books-search/client/node_modules/axios";
const KEY = "AIzaSyA0dseKEfwC1OM1MdBqClFlWfSTRAgLTVk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 4,
    key: KEY
  }
});
