// ---------------------------------------------- modules import
import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { IDashboardProps } from "./types";
import { AppState } from "../../store/rootReducer";
import { thunkPopulateProducts } from "../../store/product/thunkActions";

import ProductList from "../product/productList";

// ---------------------------------------------- the component
const Dashboard: FunctionComponent<IDashboardProps> = ({
  token,
  loading,
  error,
  populateProducts
}) => {
  // ---------------------------------------------- populate redux store
  if (token) populateProducts(token);

  // ---------------------------------------------- content
  return token ? (
    <div className="container">
      {loading ? (
        <p>populating product ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ProductList />
      )}
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

// ---------------------------------------------- map state to props
const mapStateToProps = (state: AppState) => ({
  token: state.auth.token,
  loading: state.auth.loading,
  error: state.auth.error
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
