import { useState, useContext } from "react";
import AuthContext from "../contexts/AuthContext";
// import axios from "axios";
// import "..css/login.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/data.js";

function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { login } = api;

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [data, setData] = useState(null);

  const { username, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const login = async () => {
    try {
      const { data } = await axios("/api/auth/login", {
        method: "POST",
        data: credentials,
      });

      //store it locally
      localStorage.setItem("token", data.token);
      auth.login();
      console.log(auth);
      console.log(data.message, data.token);
      setData(data.message);
    } catch (error) {
      console.log(error);
      setData("Login failed, please try again");
    }
  };

  return (
    <div>
      <div>
        <h3 className="text-center mt-5">Log in to get started</h3>
        <div className="d-flex mt-4 justify-content-center">
          <input
            value={username}
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="username"
            className="form-control mb-2 w-25"
          />
        </div>
        <div className="d-flex justify-content-center">
          <input
            value={password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="password"
            className="form-control mb-4 w-25"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" onClick={login}>
            Log in
          </button>
        </div>
        <p>Not a user yet?</p>
        <Link to="/register">Sign Up</Link>
        <div>
          <h5 className="text-center mt-5">{data}</h5>
        </div>
      </div>
    </div>
  );
}

export default Login;
