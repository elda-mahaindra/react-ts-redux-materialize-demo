// ---------------------------------------------- modules import
import React, { Fragment, FunctionComponent, MouseEvent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { ILoggedInLinkProps } from "./types";
import { AppState } from "../../store/rootReducer";
import { thunkLogout } from "../../store/auth/thunkActions";

// ---------------------------------------------- the component
const LoggedInLink: FunctionComponent<ILoggedInLinkProps> = ({ logout }) => {
  // ---------------------------------------------- handlers
  const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    logout();
  };

  // ---------------------------------------------- content
  return (
    <Fragment>
      <li>
        <Link to="/product/add" className="grey-text text-darken-4">
          Add Product
        </Link>
      </li>
      <li>
        <a href="/" className="grey-text text-darken-4" onClick={handleLogout}>
          Logout
        </a>
      </li>
    </Fragment>
  );
};

// ---------------------------------------------- map dispatch to props
const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, null, AnyAction>
) => ({
  logout: () => dispatch(thunkLogout())
});

export default connect(
  null,
  mapDispatchToProps
)(LoggedInLink);
