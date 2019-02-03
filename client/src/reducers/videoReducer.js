import { VIDEO_TYPE_SELECTED, SEARCH_SELECTED} from "../actions/types";

export const videoReducer=()=>{
return[
    { selection: "Streches for Kids", setKey: "1" },
    { selection: "Stretches for the Office", setKey: "2" },
    { selection: "Stretches for Back Pain", setKey: "3" },
    { selection: "Yoga Stretches", setKey: "4" },
    { selection: "General Stretches", setKey: "5" },
]
}

export const selectedVideoType=(selectedOption="", action)=>{
if(action.type===VIDEO_TYPE_SELECTED){
    return action.payload;
}

return selectedOption;
}

export const youTubeSearchReducer=(youTubeSearch=null, action)=>{
    if(action.type===SEARCH_SELECTED){
        return action.payload;
    }

return youTubeSearch;
}