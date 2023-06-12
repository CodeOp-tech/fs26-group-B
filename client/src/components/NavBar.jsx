import { useState, useEffect } from 'react'
import { Link  } from 'react-router-dom'
import SignUp from './SignUp'
import Menu from './Menu'
import AuthContext from "../context/AuthContext"



export default function NavBar() {
    const auth = useContext(AuthContext);
    const [selectSignUp, setSelectSignUp] = useState(false)

    useEffect(() => {
    }, [selectSignUp, auth]);

    handleSelectSignUp = () => {
        setSelectSignUp(true)
    }


    return (
        <div className="navBar">
            <div className="navBar__logo">
                <h1>Logo</h1>
            </div>
            <div className="navBar__links">
                <Link to={"/register"} onClick={handleSelectSignUp}>Sign Up</Link>
                <Link to="/login" onClick={() => setSelectSignUp(true)}>Login</Link>
               { auth && <Link to="/menu" onClick={handleSelectHome}>menu</Link>}
            </div>
        </div>
    )



    
}