// ---------------------------------------------- modules import
import {
  IAuthState,
  AuthAction,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT
} from "./types";

// ---------------------------------------------- initialize the state
const initialState: IAuthState = {
  token: null,
  loading: false,
  error: null
};

// ---------------------------------------------- the reducer
const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case LOGIN_BEGIN: {
      return state;
    }
    case LOGIN_SUCCESS: {
      return state;
    }
    case LOGIN_ERROR: {
      return state;
    }
    case LOGOUT: {
      return state;
    }
    default:
      return state;
  }
};

export default authReducer;
