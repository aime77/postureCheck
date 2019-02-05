import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import { activeReducer } from "./activeReducer";
import { timeReducer } from "./timeReducer";
import { scoreReducer } from "./scoreReducer";
import { getDataScoresReducer } from "./getDataScoresReducer";
import { getDataUserReducer } from "./getDataUserReducer";
import * as videoReducer from "./videoReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  videoSelected: videoReducer.selectedVideoType,
  videoArray: videoReducer.videoReducer,
  VideoSearch: videoReducer.youTubeSearchReducer,
  score: scoreReducer,
  active: activeReducer,
  time: timeReducer,
  scoresData: getDataScoresReducer,
  userData: getDataUserReducer
});
