import "./register.scss";
import { useRef, useState } from "react";
import { RegisterService } from "../../authContext/RegisterApiCall";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [emailaddress, setEmailaddress] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const userNameRef = useRef();
  const navigate = useNavigate();

  const btnHandlerStart = () => {
    console.log(emailRef.current.value);
    setEmailaddress(emailRef.current.value);
    setuserName(userNameRef.current.value);
  };

  const customNavigationRegister = () => {
    navigate("/login");
  };
  const btnHandlerEnd = e => {
    e.preventDefault();

    if (
      emailaddress.trim().length > 0 &&
      userName.trim().length > 0 &&
      passwordRef.current.value.trim().length > 0
    ) {
      RegisterService(
        {
          username: userName.trim(),
          email: emailaddress.trim(),
          password: passwordRef.current.value.trim(),
        },
        customNavigationRegister
      );
      return;
    }
    toast.error("Please Fill All fields");
  };

  return (
    <div className="register">
      <div className="conatiner">
        <div className="register_nav">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            className="logo"
          />
          <button className="signin" onClick={customNavigationRegister}>
            Sigin in
          </button>
        </div>
        <div className="search_section">
          <div className="email_section">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form>
              <div className="searchbar">
                {!(emailaddress || userName) && (
                  <>
                    <input
                      type="email"
                      className="email_input"
                      placeholder="email address"
                      ref={emailRef}
                    />
                    <input
                      className="username_input"
                      type="text"
                      placeholder="user Name"
                      ref={userNameRef}
                    />
                    <button className="startbtn" onClick={btnHandlerStart}>
                      Get Started
                    </button>
                  </>
                )}
                {emailaddress && userName && (
                  <>
                    <input
                      className="email_input"
                      placeholder="password"
                      type="password"
                      ref={passwordRef}
                    />
                    <button className="startbtn" onClick={btnHandlerEnd}>
                      End
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
