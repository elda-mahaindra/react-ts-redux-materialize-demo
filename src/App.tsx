// ---------------------------------------------- modules import
import React, { FunctionComponent } from "react";

// import Login from "./components/auth/login";
// import Register from "./components/auth/register";
// import Dashboard from "./components/layout/dashboard";
import Navbar from "./components/layout/navbar";
// import AddProduct from "./components/product/addProduct";
import UpdateProduct from "./components/product/updateProduct";

// ---------------------------------------------- the component
const App: FunctionComponent = () => (
  <div className="App">
    <Navbar />
    <UpdateProduct />
  </div>
);

export default App;
