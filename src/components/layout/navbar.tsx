// ---------------------------------------------- modules import
import React, { FunctionComponent } from "react";

import LoggedInLink from "./loggedInLink";
import LoggedOutLink from "./loggedOutLink";

// ---------------------------------------------- the component
const Navbar: FunctionComponent = () => (
  <nav className="nav-wrapper yellow darken-2" style={{ marginBottom: "50px" }}>
    <div className="container">
      <span
        className="brand-logo grey-text text-darken-4 hide-on-med-and-down"
        style={{ fontSize: "1.5rem", fontWeight: 400 }}
      >
        React Ts Demo
      </span>
      <ul className="right">
        <LoggedInLink />
        <LoggedOutLink />
      </ul>
    </div>
  </nav>
);

export default Navbar;
