import { TIMER_START , TIMER_STOP, TIMER_TICK, TIMER_RESET} from "../actions/types";

let initialState = {
  time: 0,
  start: 0,
  running: false
}

export default function timer(state = initialState, action) {
  switch(action.type) {
    case TIMER_START: 
      return {
        running: true, 
        time: action.time,
        start: action.time
      }
    case TIMER_STOP:
      return Object.assign({}, state, {
        time: action.time,
        running: false
      })
    case TIMER_RESET:
      return initialState
    case TIMER_TICK:
      return Object.assign({}, state, {
        time: action.time
      })      
    default:
      return state
  }
}
