import { combineReducers } from "redux";
import decks from "./../Reducers/Decks";

const rootReducer = combineReducers({ decks });
export default rootReducer;
