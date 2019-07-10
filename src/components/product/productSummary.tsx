// ---------------------------------------------- modules import
import M from "materialize-css";
import React, { FunctionComponent, useEffect } from "react";

// ---------------------------------------------- the component
const ProductSummary: FunctionComponent = () => {
  // ---------------------------------------------- handlers
  const handleDelete = () => {
    console.log("delete product");
  };

  // ---------------------------------------------- effects
  useEffect(() => {
    const modals = document.querySelectorAll(".modal");
    M.Modal.init(modals);
  }, []);

  // ---------------------------------------------- content
  return (
    <div className="card col s1 m5 offset-m1" style={{ margin: "10px" }}>
      <div className="card-content">
        <span className="card-title indigo-text text-darken-4">{"name"}</span>
        <span>{`Price: ${"price"}`}</span>
        <span className="right">{`Cost: ${"unitCost"}`}</span>
      </div>
      <div className="card-action right-align">
        <a href={`/product/update/${"id"}`} className="grey-text text-darken-4">
          Edit
        </a>
        <button
          type="button"
          className="btn waves-effect waves-light grey darken-4 modal-trigger"
          data-target={`alert-delete-product-id-${"id"}`}
        >
          Delete
        </button>
        <div className="modal" id={`alert-delete-product-id-${"id"}`}>
          <div className="modal-content center">
            <h5>Confirm Delete</h5>
            <p>{`Are you sure you want to delete ${"name"} from the list?`}</p>
          </div>
          <div className="modal-footer">
            <div className="container">
              <button
                type="button"
                className="btn grey darken-4 modal-close"
                onClick={handleDelete}
              >
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
