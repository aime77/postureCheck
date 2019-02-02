import { TRACK_SCORE } from "../actions/types";

export const scoreReducer=(trackScore=0, action)=>{
if(action.type===TRACK_SCORE){
    return action.payload;
}

return trackScore;
}

