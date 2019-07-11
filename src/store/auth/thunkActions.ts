// ---------------------------------------------- modules import
import axios from "axios";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { loginBegin, loginSuccess, loginError, logout } from "./actions";
import { AppState } from "../rootReducer";

// ---------------------------------------------- the actions
export const thunkRegister = (
  email: string,
  password: string
): ThunkAction<void, AppState, null, AnyAction> => dispatch => {
  let url = "/register";

  axios
    .post(url, { email, password })
    .then(response => {
      url = "/login";

      dispatch(loginBegin());

      axios
        .post(url, { email, password })
        .then(response => {
          const token = response.data.token as string;

          dispatch(loginSuccess(token));
        })
        .catch(error => {
          if (error.response) {
            dispatch(loginError(error.response.data.error.msg));
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log(`Error: ${error.message}`);
          }
        });
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(`Error: ${error.message}`);
      }
    });
};

export const thunkLogin = (
  email: string,
  password: string
): ThunkAction<void, AppState, null, AnyAction> => dispatch => {
  const url = "/login";

  dispatch(loginBegin());

  axios
    .post(url, { email, password })
    .then(response => {
      const token = response.data.token as string;

      dispatch(loginSuccess(token));
    })
    .catch(error => {
      if (error.response) {
        dispatch(loginError(error.response.data.error.msg));
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(`Error: ${error.message}`);
      }
    });
};

export const thunkLogout = (): ThunkAction<
  void,
  AppState,
  null,
  AnyAction
> => dispatch => {
  dispatch(logout());
};
