import axios from "axios";
import { FETCH_USER, TRACK_SCORE, SET_TERM, SET_TIMER} from "./types";

export const fetchUser = () => async dispatch => {
  const response = await axios.get("/api/current_user");
  console.log(response.data);
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const submitForm = (values, history) => async dispatch=>{
  const response =await axios.post("/api/forms", values);
  history.push("/dashboard");
  dispatch({type: FETCH_USER, payload:response.data});
};

export const setTerm = () => async dispatch=>{
  dispatch({ type: SET_TERM });
};

export const setScore = ()=>async dispatch=> {
  dispatch({ type: SET_TIMER });
};

export const trackScore = () =>async dispatch=> {
  dispatch({ type: TRACK_SCORE });
};