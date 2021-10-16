// Reducer means that to return the suitable state

import * as actionTypes from "../Actions/ActionTypes";
import InitialState from "./InitialState";

export default function changeCategoryReducer(state = InitialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}
