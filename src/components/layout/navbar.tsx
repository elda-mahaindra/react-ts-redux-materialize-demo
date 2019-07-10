// ---------------------------------------------- modules import
import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { INavbarProps } from "./types";
import { AppState } from "../../store/rootReducer";

import LoggedInLink from "./loggedInLink";
import LoggedOutLink from "./loggedOutLink";

// ---------------------------------------------- the component
const Navbar: FunctionComponent<INavbarProps> = ({ token }) => (
  <nav className="nav-wrapper yellow darken-2" style={{ marginBottom: "50px" }}>
    <div className="container">
      <Link to="/">
        <span
          className="brand-logo grey-text text-darken-4 hide-on-med-and-down"
          style={{ fontSize: "1.5rem", fontWeight: 400 }}
        >
          React Ts Demo
        </span>
      </Link>
      <ul className="right">{token ? <LoggedInLink /> : <LoggedOutLink />}</ul>
    </div>
  </nav>
);

// ---------------------------------------------- map state to props
const mapStateToProps = (state: AppState) => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(Navbar);
