// ---------------------------------------------- modules import
import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { IDashboardProps } from "./types";
import { AppState } from "../../store/rootReducer";
import { thunkPopulateProducts } from "../../store/product/thunkActions";

import ProductList from "../product/productList";

// ---------------------------------------------- the component
const Dashboard: FunctionComponent<IDashboardProps> = ({
  token,
  populateProducts
}) => {
  // ---------------------------------------------- populate redux store
  if (token) populateProducts(token);

  // ---------------------------------------------- content
  return (
    <div className="container">
      <ProductList />
    </div>
  );
};

// ---------------------------------------------- map state to props
const mapStateToProps = (state: AppState) => ({
  token: state.auth.token
});

// ---------------------------------------------- map dispatch to props
const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, null, AnyAction>
) => ({
  populateProducts: (token: string) => dispatch(thunkPopulateProducts(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
