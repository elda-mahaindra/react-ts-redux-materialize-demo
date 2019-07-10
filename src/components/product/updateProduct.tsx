// ---------------------------------------------- modules import
import M from "materialize-css";
import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useEffect,
  useState
} from "react";

// ---------------------------------------------- the component
const UpdateProduct: FunctionComponent = () => {
  const currentProduct = null;

  // ---------------------------------------------- local state
  const [product, setProduct] = useState(
    currentProduct
      ? currentProduct
      : {
          id: 0,
          name: "",
          price: 0,
          unitCost: 0
        }
  );

  // ---------------------------------------------- handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.id === "name") {
      setProduct({ ...product, [e.currentTarget.id]: e.currentTarget.value });
    } else {
      setProduct({
        ...product,
        [e.currentTarget.id]: parseInt(e.currentTarget.value)
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("update product");
    console.log(product);
  };

  // ---------------------------------------------- effects
  useEffect(() => {
    const modals = document.querySelectorAll(".modal");

    M.Modal.init(modals);
  }, []);

  // ---------------------------------------------- content
  return (
    <div className="container">
      <h5 className="center-align">UPDATE PRODUCT</h5>
      <div className="row">
        <form className="col s12 m6 offset-m3" onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              id="name"
              value={product.name}
              onChange={handleChange}
              required
            />
            <label className="active" htmlFor="name">
              Name
            </label>
          </div>
          <div className="input-field">
            <input
              type="number"
              id="price"
              value={product.price}
              min={0}
              onChange={handleChange}
              required
            />
            <label className="active" htmlFor="price">
              Price
            </label>
          </div>
          <div className="input-field">
            <input
              type="number"
              id="unitCost"
              value={product.unitCost}
              min={0}
              onChange={handleChange}
              required
            />
            <label className="active" htmlFor="unitCost">
              Unit Cost
            </label>
          </div>
          <div className="input-field center">
            <button
              type="button"
              className={`btn grey darken-4 modal-trigger ${
                product.name.length && product.price && product.unitCost
                  ? ""
                  : "disabled"
              }`}
              data-target="alert"
            >
              Update Product
            </button>
            <div className="modal" id="alert">
              <div className="modal-content center">
                <h5>Confirm Update</h5>
                <p>Are you sure you want to update this product?</p>
              </div>
              <div className="modal-footer">
                <div className="container">
                  <button
                    type="submit"
                    className="btn grey darken-4 modal-close"
                  >
                    Yes, I'm sure
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="input-field red-text center">
            <p>Error Update Product here.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
