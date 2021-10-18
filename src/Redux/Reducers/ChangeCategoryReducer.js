// Reducer means that to return the suitable state

import * as actionTypes from "../Actions/ActionTypes";
import initialState from "./InitialState";


function changeCategoryReducer(state = initialState.currentCategory, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}

export default changeCategoryReducer;