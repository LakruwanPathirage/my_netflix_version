import "./navbar.scss";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { logOutService } from "../../authContext/AuthApiCall";
const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const { dispatch } = useContext(AuthContext);
  window.onscroll = () => {
    setScroll(window.pageYOffset == 0 ? false : true);

    return () => (window.onscroll = null);
  };
  console.log("jj");
  return (
    <div className={scroll ? "navbar scroll" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link home_link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link series_link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link movies_link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          {/* <span>New and Popular</span> */}
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span className="kid">KID</span>
          <NotificationsIcon className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon drop_down_arrow" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => logOutService(dispatch)}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
