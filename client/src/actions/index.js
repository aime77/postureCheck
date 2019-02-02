import axios from "axios";
import youtube from "./api/youtube";
import {
  FETCH_USER,
  TRACK_SCORE,
  SET_TIMER,
  TIMER_TICK,
  TIMER_START,
  TIMER_STOP,
  TIMER_RESET,
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

export const setTimer = () => async dispatch => {
  dispatch({ type: SET_TIMER, payload: 0 });
};

export const trackScore = setScore => {
  return { type: TRACK_SCORE, payload: setScore };
};

let timer = null;
export const startTimer = () => dispatch => {
  clearInterval(timer);
  timer = setInterval(() => dispatch(tick()), 1000);
  dispatch({ type: TIMER_START });
  dispatch(tick());
};

export const tick = () => ({ type: TIMER_TICK });

export const stopTimer = () => {
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

//timer

let start = () => {
  return {
    type: TIMER_START,
    time: performance.now()
  }
}

let time = () => {
  return {
    type: TIMER_TICK,
    time: performance.now()
  }
}

let reset = () => {
  return {
    type: TIMER_RESET
  }
}

let stop = () => {
  return {
    type: TIMER_STOP,
    time: performance.now()
  }
}


let INTERVAL =1000
export let runTimer = () => {
  return (dispatch, getState) => {
    dispatch(start());
    let timer = () => {
      if (getState().running) {
        dispatch(time());
        setTimeout(timer, INTERVAL);
      }
    }
    timer();
  }
}
