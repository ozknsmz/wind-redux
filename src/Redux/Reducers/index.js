// to store all reducers
import { combineReducers } from "redux";
import changeCategoryReducer from "./ChangeCategoryReducer";


const rootReducer = combineReducers({
    changeCategoryReducer
})

export default rootReducer;