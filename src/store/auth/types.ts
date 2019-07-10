// ---------------------------------------------- state interface
export interface IAuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

// ---------------------------------------------- action type constants*
export const LOGIN_BEGIN = "LOGIN_BEGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";

// ---------------------------------------------- action interfaces
interface ILoginBegin {
  type: typeof LOGIN_BEGIN;
}

interface ILoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: {
    token: string;
  };
}

interface ILoginError {
  type: typeof LOGIN_ERROR;
  payload: {
    error: string;
  };
}

interface ILogout {
  type: typeof LOGOUT;
}

// ---------------------------------------------- exported action type**
export type AuthAction = ILoginBegin | ILoginSuccess | ILoginError | ILogout;

// ---- * action type constants were created so they won't be mispelled later.
// --- ** notice, the type which is exported out was actually the union of the interfaces
