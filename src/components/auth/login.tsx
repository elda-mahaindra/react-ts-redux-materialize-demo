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
import { Redirect } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { ILoginProps } from "./types";
import { AppState } from "../../store/rootReducer";
import { thunkLogin } from "../../store/auth/thunkActions";

// ---------------------------------------------- the component
const Login: FunctionComponent<ILoginProps> = ({
  token,
  loading,
  error,
  login
}) => {
  // ---------------------------------------------- local state
  const [user, setUser] = useState({ email: "", password: "" });

  // ---------------------------------------------- handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.currentTarget.id]: e.currentTarget.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = user;
    login(email, password);
  };

  // ---------------------------------------------- effects
  useEffect(() => {
    M.AutoInit();
  }, []);

  // ---------------------------------------------- content
  return token ? (
    <Redirect to="/" />
  ) : (
    <div className="container">
      <h5 className="center-align">LOGIN</h5>
      <div className="row">
        <form className="col s12 m6 offset-m3" onSubmit={handleSubmit}>
          <div className="input-field">
            <input type="email" id="email" onChange={handleChange} required />
            <label htmlFor="email">Your email</label>
          </div>
          <div className="input-field">
            <input
              type="password"
              id="password"
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field center">
            <button
              type="submit"
              className={`btn grey darken-4 ${
                user.email.length && user.password.length ? "" : "disabled"
              }`}
            >
              Login
            </button>
          </div>
          <div className="input-field red-text center">
            {loading ? (
              <p>authenticating ...</p>
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
  login: (email: string, password: string) =>
    dispatch(thunkLogin(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
