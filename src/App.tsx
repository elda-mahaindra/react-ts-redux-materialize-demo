// ---------------------------------------------- modules import
import React, { FunctionComponent } from "react";

import Login from "./components/auth/login";
// import Dashboard from "./components/layout/dashboard";
import Navbar from "./components/layout/navbar";

// ---------------------------------------------- the component
const App: FunctionComponent = () => (
  <div className="App">
    <Navbar />
    <Login />
  </div>
);

export default App;
