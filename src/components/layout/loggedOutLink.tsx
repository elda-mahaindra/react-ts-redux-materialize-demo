// ---------------------------------------------- modules import
import React, { Fragment, FunctionComponent } from "react";

// ---------------------------------------------- the component
const LoggedOutLink: FunctionComponent = () => (
  <Fragment>
    <li>
      <a href="/register" className="grey-text text-darken-4">
        Register
      </a>
    </li>
    <li>
      <a href="/login" className="grey-text text-darken-4">
        Login
      </a>
    </li>
  </Fragment>
);

export default LoggedOutLink;
