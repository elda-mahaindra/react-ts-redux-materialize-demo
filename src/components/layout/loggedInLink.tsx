// ---------------------------------------------- modules import
import React, { Fragment, FunctionComponent, MouseEvent } from "react";
import { Link } from "react-router-dom";

// ---------------------------------------------- the component
const LoggedInLink: FunctionComponent = () => {
  // ---------------------------------------------- handlers
  const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    console.log("handle logout executed.");
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

export default LoggedInLink;
