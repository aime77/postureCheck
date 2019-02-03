import {combineReducers} from "redux";
import {reducer as reduxForm} from "redux-form";
import authReducer from "./authReducer";
import {activeReducer} from "./activeReducer";
import {scoreReducer} from "./scoreReducer";
import * as videoReducer from "./videoReducer";
import timer from "./timerReducer"


export default combineReducers({
    auth:authReducer,
    form: reduxForm,
    videoSelected: videoReducer.selectedVideoType,
    videoArray: videoReducer.videoReducer,
    VideoSearch: videoReducer.youTubeSearchReducer,
    score: scoreReducer,
    timer:timer,
    active:activeReducer,
});


