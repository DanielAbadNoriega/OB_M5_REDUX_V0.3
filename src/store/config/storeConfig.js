import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { notesReducer } from "../reducers/notesReducer";

export const noteStore = () => {
  const store = createStore(notesReducer, composeWithDevTools());
  return store;
};