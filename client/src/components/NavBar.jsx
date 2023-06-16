import { useState, useEffect } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
// import Menu from './Menu'
import Api from '../services/data'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import Container from '@mui/material/Container';
import { theme } from '../styles';



export default function NavBar() {
    // const auth = useContext(AuthContext);
    const auth = true;
    const [selectSignUp, setSelectSignUp] = useState(false);
    const [selectHomePage, setSelectHomePage] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (selectHomePage === true) {
        navigate('/home');
      }
    }, [selectHomePage]);

    const handleSelectSignUp = () => {
        setSelectSignUp(true)
    }

    const handleClickLogo = () => {
        setSelectHomePage(true)
    }
    
  return (
    <div className='navbar'>
      <div className="navBar__logo" onClick={handleClickLogo}>
        <h2>Logo</h2>
      </div>
      
        <div className='nav-links' >
          {!auth && selectSignUp === false && (
            <Link to="/register" onClick={handleSelectSignUp}>
              Sign Up
            </Link>
          )}
          {!auth && selectSignUp === true && (
            <Link to="/login" onClick={() => setSelectSignUp(false)}>
              Login
            </Link>
          )}
          {auth && <a>Logout</a>}
          <a><MenuRoundedIcon /></a>
        </div>
     
    </div>
  );
}