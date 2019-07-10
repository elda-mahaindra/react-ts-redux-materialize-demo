// ---------------------------------------------- modules import
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
// ---------------------------------------------- styles import
import "./index.css";
import "materialize-css/dist/css/materialize.min.css";

import * as serviceWorker from "./serviceWorker";

// ---------------------------------------------- app render
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
