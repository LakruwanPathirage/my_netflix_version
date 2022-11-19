import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logout } from "./AuthActions";
import { toast } from "react-toastify";

export const LoginService = (user, dispatch) => {
  dispatch(loginStart());
  console.log("Im here");

  const myPromise = new Promise((resolve, reject) =>
    axios
      .post("/auth/login", user)
      .then(response => {
        console.log(response);

        dispatch(loginSuccess(response.data));

        resolve(response);
      })
      .catch(err => {
        dispatch(loginFailure());
        reject(err);
      })
  );

  toast.promise(
    myPromise,

    {
      pending: "Authticating...",
      success: "Login sucessfully",
      error: "Authticating Failed",
    },
    {
      theme: "dark",
    }
  );
};

export const logOutService = dispatch => {
  localStorage.removeItem("user");
  dispatch(logout());
};
