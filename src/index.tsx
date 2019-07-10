// ---------------------------------------------- modules import
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import rootReducer from "./store/rootReducer";

// ---------------------------------------------- styles import
import "./index.css";
import "materialize-css/dist/css/materialize.min.css";

import * as serviceWorker from "./serviceWorker";

// ---------------------------------------------- create redux store
const store = createStore(rootReducer);

// ---------------------------------------------- app render
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
