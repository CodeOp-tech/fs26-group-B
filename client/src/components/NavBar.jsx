import { useState } from 'react'
import { Link  } from 'react-router-dom'
// import Menu from './Menu'
// import Api from '../Api'
import { ThemeProvider } from '@mui/material/styles';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import Container from '@mui/material/Container';
import { theme } from '../styles';



export default function NavBar() {
    // const auth = useContext(AuthContext);
  
    const auth = false;
    const [selectSignUp, setSelectSignUp] = useState(false)

    // useEffect(() => {
    // }, [selectSignUp, auth]);

    const handleSelectSignUp = () => {
        setSelectSignUp(true)
    }
    
  return (
    <div className='navbar'>
      <div className="navBar__logo">
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
          {auth && <button>Logout</button>}
          <a><MenuRoundedIcon /></a>
        </div>
     
    </div>
  );
}