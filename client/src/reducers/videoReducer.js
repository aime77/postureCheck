import { VIDEO_TYPE_SELECTED, SEARCH_SELECTED} from "../actions/types";

export const videoReducer=()=>{
return[
    { selection: "Streches for Kids", durationMax: "10:00" },
    { selection: "Stretches for the Office", duration: "5:00" },
    { selection: "Stretches for Back Pain", duration: "7:00" },
    { selection: "Yoga Stretches", duration: "7:00" },
    { selection: "General Stretches", duration: null },
]
}

export const selectedVideoType=(selectedOption=null, action)=>{
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