import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "../reducers/rootReducer";


export const noteStore = () => {
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
};
