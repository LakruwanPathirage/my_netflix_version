import "./login.scss";

const Login = () => {
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
                placeholder="email or phone number"
                type="text"
              />
              <input
                className="email_input"
                placeholder="password"
                type="password"
              />
              <button>Sign In</button>
              <span>
                New to Netflix? <b>Sign up now.</b>
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
