// the file is for all actions which belong to Categories.

import * as actionTypes from "./ActionTypes";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}
