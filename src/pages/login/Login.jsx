import { useState, useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";
import { LoginService } from "../../authContext/AuthApiCall";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginInHandler = e => {
    e.preventDefault();
    if ((email.trim().length > 0, password.trim().length > 0)) {
      LoginService({ email, password }, dispatch);
      return;
    }
    toast.error("Please Fill All fields");
  };

  return (
    <div className="login">
      <div className="conatiner">
        <div className="register_nav">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            className="logo"
          />
        </div>
        <div className="form_container">
          <form>
            <div className="form_wrapper">
              <h2>Sign in</h2>
              <input
                className="email_input"
                placeholder="email"
                type="text"
                onChange={e => setEmail(e.target.value)}
              />
              <input
                className="email_input"
                placeholder="password"
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
              <button onClick={LoginInHandler}>Sign In</button>
              <span>
                New to Netflix?
                <Link to="/register" className="link">
                  <b> Sign up now.</b>
                </Link>
              </span>
              <small>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <b>Learn more</b>.
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
