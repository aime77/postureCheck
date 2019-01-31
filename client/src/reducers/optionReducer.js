import {
  SET_TERM,
  SET_TIMER,
  TIMER_TICK,
  TIMER_START,
  TIMER_STOP,
  TRACK_SCORE
} from "../actions/types";

const initialState = {
  SET_TERM: null,
};

const videoReducer = () => {
  return [
    { selection: "", duration: "2:04" },
    { selection: "no", duration: "1:00" },
    {},
    {},
  ];
};

const selectedSongRudecer = (selectedVideo = null, action) => {
  if (action.type === SET_TERM) {
    return action.payload;
  }

  return selectedVideo;
};

export default function(state = initialState, action) {
  console.log(action.type);

  switch (action.type) {
    case SET_TERM:
      return action.payload || false;

    case SET_TIMER:
      return action.payload || false;

    case TRACK_SCORE:
      return action.payload || false;

    case SET_TERM:
      return action.payload || false;

    case SET_TIMER:
      return action.payload || false;

    case TIMER_TICK:
      return action.payload || false;
    case TIMER_START:
      return action.payload || false;
    case TIMER_STOP:
      return action.payload || false;
    default:
      return state;
  }
}
