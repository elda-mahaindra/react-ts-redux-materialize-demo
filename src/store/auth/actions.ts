// ---------------------------------------------- modules import
import {
  AuthAction,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT
} from "./types";

// ---------------------------------------------- the actions
export const loginBegin = (): AuthAction => ({
  type: LOGIN_BEGIN
});

export const loginSuccess = (token: string): AuthAction => ({
  type: LOGIN_SUCCESS,
  payload: {
    token
  }
});

export const loginError = (error: string): AuthAction => ({
  type: LOGIN_ERROR,
  payload: {
    error
  }
});

export const logout = (): AuthAction => ({
  type: LOGOUT
});
