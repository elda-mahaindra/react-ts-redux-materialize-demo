// ---------------------------------------------- modules import
import React, { FunctionComponent } from "react";
import { connect } from "react-redux";

import { IProductList } from "./types";
import { AppState } from "../../store/rootReducer";

import ProductSummary from "./productSummary";

// ---------------------------------------------- the component
const ProductList: FunctionComponent<IProductList> = ({ products }) => (
  <div className="row">
    {products.length ? (
      products.map(product => <ProductSummary key={product.id} />)
    ) : (
      <div className="center">No product yet.</div>
    )}
  </div>
);

// ---------------------------------------------- map state to props
const mapStateToProps = (state: AppState) => ({
  products: state.product.products
});

export default connect(mapStateToProps)(ProductList);
