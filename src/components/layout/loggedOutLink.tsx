// ---------------------------------------------- modules import
import React, { Fragment, FunctionComponent } from "react";
import { Link } from "react-router-dom";

// ---------------------------------------------- the component
const LoggedOutLink: FunctionComponent = () => (
  <Fragment>
    <li>
      <Link to="/register" className="grey-text text-darken-4">
        Register
      </Link>
    </li>
    <li>
      <Link to="/login" className="grey-text text-darken-4">
        Login
      </Link>
    </li>
  </Fragment>
);

export default LoggedOutLink;
