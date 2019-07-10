// ---------------------------------------------- modules import
import React, { FunctionComponent } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Dashboard from "./components/layout/dashboard";
import Navbar from "./components/layout/navbar";
import AddProduct from "./components/product/addProduct";
import UpdateProduct from "./components/product/updateProduct";

// ---------------------------------------------- the component
const App: FunctionComponent = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/product/add" component={AddProduct} />
      <Route path="/product/update/:productId" component={UpdateProduct} />
    </div>
  </BrowserRouter>
);

export default App;
