import { SET_TIMER, SET_TERM, TRACK_SCORE} from "../actions/types";

const initialState={
    set_timer:SET_TIMER,
    conter:0,
}

export default function(state = initialState, action) {
  console.log(action.type);

  switch (action.type) {
    case SET_TERM:
      return action.payload || false;

case SET_TIMER:

case TRACK_SCORE:

    default:
      return state;
  }
}