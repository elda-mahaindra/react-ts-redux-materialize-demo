// ---------------------------------------------- modules import
import React, { FunctionComponent } from "react";

import Dashboard from "./components/layout/dashboard";
import Navbar from "./components/layout/navbar";

// ---------------------------------------------- the component
const App: FunctionComponent = () => (
  <div className="App">
    <Navbar />
    <Dashboard />
  </div>
);

export default App;
