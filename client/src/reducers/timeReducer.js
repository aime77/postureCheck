import { GET_TIME } from "../actions/types";

export const timeReducer=(state=null, action)=>{
if(action.type===GET_TIME){
    return action.payload;
}

return state;
}

