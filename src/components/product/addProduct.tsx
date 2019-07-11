// ---------------------------------------------- modules import
import M from "materialize-css";
import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useEffect,
  useState
} from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { IAddProduct } from "./types";
import { AppState } from "../../store/rootReducer";
import { thunkAddProduct } from "../../store/product/thunkActions";
import { IProduct } from "../../store/product/types";

// ---------------------------------------------- the component
const AddProduct: FunctionComponent<IAddProduct> = ({
  history,
  token,
  loading,
  error,
  addProduct
}) => {
  // ---------------------------------------------- local state
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    price: 0,
    unitCost: 0
  });

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

    if (token) addProduct(product, token, history);
  };

  // ---------------------------------------------- effects
  useEffect(() => {
    M.AutoInit();
  }, []);

  // ---------------------------------------------- content
  return (
    <div className="container">
      <h5 className="center-align">ADD PRODUCT</h5>
      <div className="row">
        <form className="col s12 m6 offset-m3" onSubmit={handleSubmit}>
          <div className="input-field">
            <input type="text" id="name" onChange={handleChange} required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input
              type="number"
              id="price"
              min={0}
              onChange={handleChange}
              required
            />
            <label htmlFor="price">Price</label>
          </div>
          <div className="input-field">
            <input
              type="number"
              id="unitCost"
              min={0}
              onChange={handleChange}
              required
            />
            <label htmlFor="unitCost">Unit Cost</label>
          </div>
          <div className="input-field center">
            <button
              type="submit"
              className={`btn grey darken-4 ${
                product.name.length && product.price && product.unitCost
                  ? ""
                  : "disabled"
              }`}
            >
              Add Product
            </button>
          </div>
          <div className="input-field red-text center">
            {loading ? (
              <p>adding product ...</p>
            ) : error ? (
              <p>{error}</p>
            ) : null}
          </div>
        </form>
      </div>
    </div>
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
  addProduct: (product: IProduct, token: string, history: string[]) =>
    dispatch(thunkAddProduct(product, token, history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct);
