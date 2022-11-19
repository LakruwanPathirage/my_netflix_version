import axios from "axios";
import { toast } from "react-toastify";

export const RegisterService = (user, customNavigation) => {
  const myPromise = new Promise((resolve, reject) =>
    axios
      .post("/auth/register", user)
      .then(response => {
        resolve(response);
        customNavigation();
      })
      .catch(err => {
        reject(err);
      })
  );

  toast.promise(
    myPromise,

    {
      pending: "Registering...",
      success: "Registered sucessfully",
      error: "Registering Failed",
    },
    {
      theme: "dark",
    }
  );
};
