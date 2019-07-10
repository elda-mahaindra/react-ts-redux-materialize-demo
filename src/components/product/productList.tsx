// ---------------------------------------------- modules import
import React, { FunctionComponent } from "react";

import ProductSummary from "./productSummary";

// ---------------------------------------------- the component
const ProductList: FunctionComponent = () => (
  <div className="row">
    <ProductSummary />
    <ProductSummary />
    <ProductSummary />
    <ProductSummary />
    <ProductSummary />
    <ProductSummary />
    <ProductSummary />
  </div>
);

export default ProductList;
