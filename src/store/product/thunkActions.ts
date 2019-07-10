// ---------------------------------------------- modules import
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { AppState } from "../rootReducer";
// ---------------------------------------------- the actions
export const thunkPopulateProducts = (): ThunkAction<
  void,
  AppState,
  null,
  AnyAction
> => dispatch => {};

export const thunkAddProduct = (): ThunkAction<
  void,
  AppState,
  null,
  AnyAction
> => dispatch => {};

export const thunkUpdateProduct = (): ThunkAction<
  void,
  AppState,
  null,
  AnyAction
> => dispatch => {};

export const thunkDeleteProduct = (): ThunkAction<
  void,
  AppState,
  null,
  AnyAction
> => dispatch => {};
