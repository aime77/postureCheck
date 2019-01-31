import {combineReducers} from "redux";
import {reducer as reduxForm} from "redux-form";
import authReducer from "./authReducer";
import optionReducer from "./optionReducer";
import * as videoReducer from "./videoReducer";


export default combineReducers({
    auth:authReducer,
    form: reduxForm,
    option: optionReducer,
    videoSelected: videoReducer.selectedVideoType,
    videoArray: videoReducer.videoReducer,
    VideoSearch: videoReducer.youTubeSearchReducer
});


