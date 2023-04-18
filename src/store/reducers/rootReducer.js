import { combineReducers } from "redux";
import { notesReducer } from "./notesReducer";
import { filterNotesReducer } from "./notesFilterReducer";

export const rootReducer = combineReducers({
  notes: notesReducer,
  filter: filterNotesReducer,
})