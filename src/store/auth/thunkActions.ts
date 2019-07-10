// ---------------------------------------------- modules import
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { AppState } from "../rootReducer";

// ---------------------------------------------- the actions
export const thunkRegister = (): ThunkAction<
  void,
  AppState,
  null,
  AnyAction
> => dispatch => {};

export const thunkLogin = (): ThunkAction<
  void,
  AppState,
  null,
  AnyAction
> => dispatch => {};

export const thunkLogout = (): ThunkAction<
  void,
  AppState,
  null,
  AnyAction
> => dispatch => {};
