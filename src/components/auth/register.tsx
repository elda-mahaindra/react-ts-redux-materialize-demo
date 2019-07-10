// ---------------------------------------------- modules import
import M from "materialize-css";
import React, {
  ChangeEvent,
  FormEvent,
  FunctionComponent,
  useEffect,
  useState
} from "react";

// ---------------------------------------------- the component
const Register: FunctionComponent = () => {
  // ---------------------------------------------- local state
  const [user, setUser] = useState({ email: "", password: "" });

  // ---------------------------------------------- handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.currentTarget.id]: e.currentTarget.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("register user");
    console.log(user);
  };

  // ---------------------------------------------- effects
  useEffect(() => {
    M.AutoInit();
  }, []);

  // ---------------------------------------------- content
  return (
    <div className="container">
      <h5 className="center-align">REGISTER</h5>
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
              Register
            </button>
          </div>
          <div className="input-field red-text center">
            <p>Error register/login here.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
