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
      return {
        ...state,
        token: null,
        loading: true,
        error: null
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        loading: false,
        error: null
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        token: null,
        loading: false,
        error: action.payload.error
      };
    }
    case LOGOUT: {
      return {
        ...state,
        token: null,
        loading: false,
        error: null
      };
    }
    default:
      return state;
  }
};

export default authReducer;
