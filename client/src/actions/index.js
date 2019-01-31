import axios from "axios";
import youtube from "./api/youtube";
import {
  FETCH_USER,
  TRACK_SCORE,
  SET_TERM,
  SET_TIMER,
  TIMER_TICK,
  TIMER_START,
  TIMER_STOP,
  VIDEO_TYPE_SELECTED,
  SEARCH_SELECTED
} from "./types";

export const fetchUser = () => async dispatch => {
  const response = await axios.get("/api/current_user");
  console.log(response.data);
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const submitForm = (values, history) => async dispatch => {
  const response = await axios.post("/api/forms", values);
  history.push("/dashboard");
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const setTerm = term => async dispatch => {
  dispatch({ type: SET_TERM, payload: 90 });
};

export const setTimer = () => async dispatch => {
  dispatch({ type: SET_TIMER, payload: 0 });
};

export const trackScore = () => async dispatch => {
  dispatch({ type: TRACK_SCORE, payload: 0 });
};

let timer = null;
export const start = () => dispatch => {
  clearInterval(timer);
  timer = setInterval(() => dispatch(tick()), 1000);
  dispatch({ type: TIMER_START });
  dispatch(tick());
};

export const tick = () => ({ type: TIMER_TICK });

export const stop = () => {
  clearInterval(timer);
  return { type: TIMER_STOP };
};

export const selectedOption = videos => {
  return {
    type: VIDEO_TYPE_SELECTED,
    payload: videos
  };
};

export const youTubeSearch = videos => {
  const response = youtube.get("/search", {
    params: {
      q: videos
    }
  });

  return {
    type: SEARCH_SELECTED,
    payload: {
      selectedVideo: response.data.items[0],
      videos: response.data.items
    }
  };
};
