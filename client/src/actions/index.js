import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const response = await axios.get("/api/current_user");
  console.log(response.data);
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const scoresUser = async dispatch => {
  const response = await axios.get("/api/scores");
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const submitForm = (values, history) => async dispatch=>{
  const response =await axios.post("/api/forms", values);
  history.push("/dashboard");
  dispatch({type:FETCH_USER, payload:response.data});
};
