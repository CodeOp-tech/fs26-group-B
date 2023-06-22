import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/data";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import AuthContext from "../contexts/AuthContext";
import Pusher from "pusher-js";
import Menu from "../components/Menu";

// need endpoint to get open events for user

const PUSHER_KEY = import.meta.env.VITE_PUSHER_KEY;
let channel;
export default function NavBar() {
  const auth = useContext(AuthContext);
  const [selectSignUp, setSelectSignUp] = useState(false);
  // const [selectHomePage, setSelectHomePage] = useState(false);
  const navigate = useNavigate();
  const [pendingInvites, setPendingInvites] = useState([]);
  const [isNotification, setIsNotification] = useState(false);
  const [user, setUser] = useState({});
  //const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    auth.user && fetchData();

    Pusher.logToConsole = true;

    var pusher = new Pusher(PUSHER_KEY, {
      cluster: "eu",
      forceTLS: true,
    });

    if (user?.id && channel !== "invitation") {
      channel = pusher.subscribe(`user-${user.id}`);
      channel.bind("invitation", function (data) {
        console.log(data);
        alert(JSON.stringify(data));
        setIsNotification(true);
      });
    }

    if (user?.id && channel !== "match") {
      channel = pusher.subscribe(`user-${user.id}`);
      channel.bind("match", function (data) {
        console.log(data);
        alert(JSON.stringify(data));
        setIsNotification(true);
      });
    }
  }, [auth.user, user]);

  const fetchData = async () => {
    try {
      const data = await api.getOpenEvents();
      data && setPendingInvites(data);
      console.log("data is: ", data);
    } catch (error) {
      console.error("Error fetching open events", error);
    }
    pendingInvites.length > 0
      ? setIsNotification(true)
      : setIsNotification(false);

    console.log(pendingInvites);
  };

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    const user = await api.getMyProfile();
    setUser(user);
  }

  const handleSelectSignUp = () => {
    setSelectSignUp(true);
  };

  const handleNotification = () => {
    navigate("/notifications");
    setIsNotification(false);
    // console.log(pendingInvites)
  };

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
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
        <div>
          <a onClick={handleMenuOpen}>
            <MenuRoundedIcon />
          </a>
          <Menu open={menuOpen} onClose={handleMenuClose} />
        </div>
      </div>
    </div>
  );
}
