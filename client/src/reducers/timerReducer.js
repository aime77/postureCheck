import { TIMER_START , TIMER_STOP, TIMER_TICK} from "../actions/types";


export const startTime=(start=0, action)=>{
if(action.type===TIMER_START){
    return action.payload;
}

return selectedOption;
}


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