import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Menu from './Menu'
import api from "../services/data";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import AuthContext from "../contexts/AuthContext";

// need endpoint to get open events for user

export default function NavBar() {
  const auth = useContext(AuthContext);
  const [selectSignUp, setSelectSignUp] = useState(false);
  // const [selectHomePage, setSelectHomePage] = useState(false);
  const navigate = useNavigate();
  const [pendingInvites, setPendingInvites] = useState([]);
  const [isNotification, setIsNotification] = useState(false);
  //const navigate = useNavigate();

  useEffect(() => {
    auth.user && fetchData();
  }, [auth.user]);

  const fetchData = async () => {
    try {
      const data = await api.getOpenEvents();
      data && setPendingInvites(data);
    } catch (error) {
      console.error("Error fetching open events", error);
    }
    pendingInvites ? setIsNotification(true) : setIsNotification(false);
    console.log(pendingInvites);
  };

  const handleSelectSignUp = () => {
    setSelectSignUp(true);
  };

  const handleNotification = () => {
    navigate("/notifications");
    setIsNotification(false);
    // console.log(pendingInvites)
  };

  return (
    <div className="navbar">
      <div className="navBar__logo">
        <Link to="/home">
          <img
            className="logo"
            src="https://i.postimg.cc/PJqyX8p7/its-a-date.png"
            alt="It's a date!"
          />
        </Link>
      </div>

      <div className="nav-links">
        {!auth.user && selectSignUp === false && (
          <Link to="/register" onClick={handleSelectSignUp}>
            Sign Up
          </Link>
        )}
        {!auth.user && selectSignUp === true && (
          <Link to="/login" onClick={() => setSelectSignUp(false)}>
            Login
          </Link>
        )}
        {auth.user && (
          <div className="auth-links">
            {isNotification ? (
              <a onClick={handleNotification}>
                <NotificationsActiveRoundedIcon />
              </a>
            ) : (
              <a>
                <NotificationsNoneRoundedIcon />
              </a>
            )}
            <a onClick={auth.logout}>Logout</a>
          </div>
        )}

        <a>
          <MenuRoundedIcon />
        </a>
      </div>
    </div>
  );
}
