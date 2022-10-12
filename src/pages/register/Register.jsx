import "./register.scss";
import { useRef, useState } from "react";
const Register = () => {
  const [emailaddress, setEmailaddress] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const btnRef = useRef();
  const btnHandler = () => {
    if (btnRef.current.innerText == "Get Started") {
      setEmailaddress(emailRef.current.value);
    } else {
      setPassword(passwordRef.current.value);
    }
    console.log(btnRef.current.innerText, btnRef.current.innerText == "Start");
  };
  return (
    <div className="register">
      <div className="conatiner">
        <div className="register_nav">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            className="logo"
          />
          <button className="signin">Sigin in</button>
        </div>
        <div className="search_section">
          <div className="email_section">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="searchbar">
              {!emailaddress && (
                <input
                  type="email"
                  className="email_input"
                  placeholder="email address"
                  ref={emailRef}
                />
              )}
              {emailaddress && (
                <input
                  className="email_input"
                  placeholder="password"
                  type="password"
                  ref={passwordRef}
                />
              )}
              <button className="startbtn" onClick={btnHandler} ref={btnRef}>
                {emailaddress ? "End" : "Get Started"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
