// ---------------------------------------------- modules import
import axios from "axios";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import {
  addProductBegin,
  addProductSuccess,
  addProductError,
  deleteProductBegin,
  deleteProductSuccess,
  deleteProductError
} from "./actions";
import { IProduct } from "./types";
import { AppState } from "../rootReducer";
// ---------------------------------------------- the actions
export const thunkPopulateProducts = (): ThunkAction<
  void,
  AppState,
  null,
  AnyAction
> => dispatch => {};

export const thunkAddProduct = (
  product: IProduct,
  token: string,
  history: string[]
): ThunkAction<void, AppState, null, AnyAction> => dispatch => {
  const { name, price, unitCost } = product;
  const url = "/products";

  dispatch(addProductBegin());

  axios
    .post(
      url,
      { name, price, unitCost },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json"
        }
      }
    )
    .then(response => {
      const addedProduct = response.data as IProduct;

      dispatch(addProductSuccess(addedProduct));
      history.push("/");
    })
    .catch(error => {
      if (error.response) {
        dispatch(addProductError(error.response.data.error.msg));
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    });
};

export const thunkUpdateProduct = (): ThunkAction<
  void,
  AppState,
  null,
  AnyAction
> => dispatch => {};

export const thunkDeleteProduct = (
  id: number,
  token: string
): ThunkAction<void, AppState, null, AnyAction> => dispatch => {
  const url = `/products/${id.toString()}`;

  dispatch(deleteProductBegin());

  axios
    .delete(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      dispatch(deleteProductSuccess(id));
    })
    .catch(error => {
      if (error.response) {
        dispatch(deleteProductError(error.response.data.error.msg));
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    });
};
