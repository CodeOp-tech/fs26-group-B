
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Menu from './Menu'
import api from '../services/data'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import AuthContext from "../contexts/AuthContext";


// need endpoint to get open events for user

export default function NavBar() {
    const auth = useContext(AuthContext);
    
    const id = 2;
  const [selectSignUp, setSelectSignUp] = useState(false);
  const [selectHomePage, setSelectHomePage] = useState(false);
  const navigate = useNavigate();
    const [pendingInvites, setPendingInvites] = useState([]);
    //const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.getOpenEvents(id);
                setPendingInvites(res);
            } catch (error) {
                console.error("Error fetching open events", error);
            }
        };
        fetchData();
        }, []);


    // useEffect(() => {
    //   if (selectHomePage === true) {
    //       navigate('/home');
    //       setSelectHomePage(false);
    //   }
    // }, [selectHomePage]);

  const handleSelectSignUp = () => {
    setSelectSignUp(true);
  };

    // const handleClickLogo = () => {
    //     setSelectHomePage(true)
    // }

    const handleNotification = () => {
        navigate('/pending');
        setPendingInvites([null]);
        // console.log(pendingInvites)
    }
    
  return (
    <div className="navbar">
      <div className="navBar__logo">
        <Link to="/home">
          
          <img
                  src="../assets/its-a-date.png"
                  alt="It’s a date!"
                  width="200px"
                />
        </Link>
      </div>
      
          <div className='nav-links' >
              
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
              {auth.user && <div className='auth-links'>  
                  {pendingInvites.id ?
                      <a onClick={handleNotification}><NotificationsActiveRoundedIcon /></a>
                      : <a><NotificationsNoneRoundedIcon /></a>}
                  <a onClick={auth.logout}>Logout</a>
                </div>}
          
          <a><MenuRoundedIcon /></a>
        </div>
     
    </div>
  );
}
