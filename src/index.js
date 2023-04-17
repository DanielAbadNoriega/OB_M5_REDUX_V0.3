import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// REDUX
import { Provider } from "react-redux";

// STORE
import { noteStore } from "./store/config/storeConfig";

// STYLE
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import "bootstrap/dist/css/bootstrap.css";

const noteAppStore = noteStore();
noteAppStore.subscribe(() =>
  console.log("[ noteAppStore ] State: ", noteAppStore.getState())
);

console.log(`[ index ] Store: ${noteAppStore.getState()}`)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={noteAppStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
