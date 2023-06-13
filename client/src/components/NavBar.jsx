import { useState } from 'react'
import { Link  } from 'react-router-dom'
// import Menu from './Menu'
// import Api from '../Api'
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import {theme, nav_bar} from '../styles'



export default function NavBar() {
    // const auth = useContext(AuthContext);
  
    const auth = true;
    const [selectSignUp, setSelectSignUp] = useState(false)

    // useEffect(() => {
    // }, [selectSignUp, auth]);

    const handleSelectSignUp = () => {
        setSelectSignUp(true)
    }


    
  return (
    <div>
      <div className="navBar__logo">
        <h1>Logo</h1>
      </div>
      <ThemeProvider theme={theme}>
        <Container sx={nav_bar}>
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
          <button>Logout</button>
          <button>menu</button>
        </Container>
      </ThemeProvider>
    </div>
  );
}