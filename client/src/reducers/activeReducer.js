import { CHECK_ACTIVE } from "../actions/types";

export const activeReducer=(checkActive="1", action)=>{
if(action.type===CHECK_ACTIVE){
    return action.payload;
}

return checkActive;
}

