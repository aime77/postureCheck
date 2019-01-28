import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const response = await axios.get("/api/current_user");
  console.log(response.data);
  dispatch({ type: FETCH_USER, payload: response.data });
};


export const scoresUser= async dispatch=> {
  const response= await axios.get("/api/books");
  dispatch({ type: FETCH_USER, payload: response.data });
  };