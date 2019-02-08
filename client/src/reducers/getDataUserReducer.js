import { FETCH_DATA_USER } from "../actions/types";

export const getDataUserReducer = (state=[], action) => {
  switch (action.type) {
    case FETCH_DATA_USER:
      return action.payload;
    default:
      return state;
  }
};
