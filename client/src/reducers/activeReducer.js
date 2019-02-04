import { CHECK_ACTIVE } from "../actions/types";

export const activeReducer=(state=null, action)=>{
if(action.type===CHECK_ACTIVE){
    return action.payload;
}

return state;
}

