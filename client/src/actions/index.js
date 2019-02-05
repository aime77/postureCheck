import axios from "axios";
import youtube from "./api/youtube";

import {
  FETCH_USER,
  TRACK_SCORE,
  VIDEO_TYPE_SELECTED,
  SEARCH_SELECTED,
  CHECK_ACTIVE,
  FETCH_POSTS
} from "./types";

//action creator for api call
export const fetchUser = () => async dispatch => {
  const response = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const handleToken = token => async dispatch => {
  const response = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: response.data });
};
//action creator for form submission
export const submitForm = (values, history) => async dispatch => {
  console.log(values);
  const response = await axios.put("/api/forms", values);

  console.log(response);
  history.push("/dashboard");
  dispatch({ type: FETCH_USER, payload: response.data });
};

//action to get profile info per user
export const profileRender = () => async dispatch => {
  const response = await axios.get("/api/profile");
  dispatch({ type: FETCH_USER, payload: response.data });
};

//action creator to save score information
export const saveScore = values => async dispatch => {
  console.log(values);
  console.log("testSave");
  const response = await axios.post("/api/scores", values);
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const profileInfo = () => async dispatch => {
  const response = await axios.get("/api/profile");
  dispatch({ type: FETCH_USER, payload: response.data });
};

//get data from
export const fetchPost = () => async dispatch => {
  const response = await axios.get("/postureHealthFacts");
  dispatch({ type: FETCH_POSTS, payload: response });
};

//action creator to select video
export const selectedOption = videos => {
  return {
    type: VIDEO_TYPE_SELECTED,
    payload: videos
  };
};

//action ccreator to track score
export const trackScore = setScore => async dispatch => {
  dispatch({ type: TRACK_SCORE, payload: setScore });
};

//action creator to set to active
export const checkActive = activate => async dispatch => {
  dispatch({ type: CHECK_ACTIVE, payload: activate });
};

export const getTime = time => async dispatch => {
  dispatch({ type: CHECK_ACTIVE, payload: time });
};

//action creator for youtube api call
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
