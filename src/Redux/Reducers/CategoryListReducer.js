// Reducer means that to return the suitable state
import * as actionTypes from "../Actions/ActionTypes";
import initialState from "./InitialState";

function changeCategoryReducer(state = initialState.categories, action) {
  switch (action.type) {
    case actionTypes.GET_CATEGORİES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default changeCategoryReducer;