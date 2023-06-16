// import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Menu from './Menu'
// import Api from "../services/data";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import Container from '@mui/material/Container';
import { theme } from "../styles";
// import AuthContext from "../../contexts/AuthContext";

export default function NavBar() {
  // const auth = useContext(AuthContext);
  const auth = true;
  // const [selectSignUp, setSelectSignUp] = useState(false);
  // const [selectHomePage, setSelectHomePage] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (selectHomePage === true) {
  //     navigate("/home");
  //   }
  // }, [selectHomePage]);

  // const handleSelectSignUp = () => {
  //   setSelectSignUp(true);
  // };

  // const handleClickLogo = () => {
  //   setSelectHomePage(true);
  // };

  return (
    <div className="navbar">
      <div className="navBar__logo">
        <Link to="/home">
          Logo
          {/* <img
                  src=""
                  alt=""
                  width=""
                /> */}
        </Link>
      </div>

      <div className="nav-links">
        {auth.user && <Link to="/profile">My Profile</Link>}

        {auth.user ? (
          <button onClick={auth.logout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}

        {/* {!auth.user && selectSignUp === false && (
          <Link to="/register" onClick={handleSelectSignUp}>
            Sign Up
          </Link>
        )}
        {!auth.user && selectSignUp === true && (
          <Link to="/login" onClick={() => setSelectSignUp(false)}>
            Login
          </Link>
        )}

        {auth.user ? (
          <button onClick={auth.logout}>Logout</button>
        ) : (
          <Link
            to="/login"
            className="btn-nav nav-link text-decoration-none text-center"
          >
            Login
          </Link>
        )}

        {auth.user && (
          <Link to="/login" onClick={auth.logout}>
            Logout
          </Link>
        )} */}
        <a>
          <MenuRoundedIcon />
        </a>
      </div>
    </div>
  );
}
