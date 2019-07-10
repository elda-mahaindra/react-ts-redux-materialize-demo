// ---------------------------------------------- modules import
import React, { FunctionComponent } from "react";

import ProductList from "../product/productList";

// ---------------------------------------------- the component
const Dashboard: FunctionComponent = () => (
  <div className="container">
    <ProductList />
  </div>
);

export default Dashboard;
