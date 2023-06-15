import { useState, useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
// import "..css/register.css";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/data.js";

function Register() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  // const { register } = api;

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [data, setData] = useState(null);

  const { username, email, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const register = async () => {
    try {
      const { data } = await axios("/api/auth/register", {
        method: "POST",
        data: credentials,
      });

      console.log(data.message);
      setData(data.message);
      auth.login();
    } catch (error) {
      console.log(error);
      setData(error.response.data.message);
    }
  };

  return (
    <div>
      <div>
        <h3 className="text-center mt-5">Sign up to get started</h3>
        <div className="d-flex mt-4 justify-content-center">
          <input
            value={username}
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="username"
            className="form-control mb-2 w-25"
          />
          <input
            value={email}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="email"
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
          <button className="btn btn-primary" onClick={register}>
            Sign Up
          </button>
        </div>
        <p>Already have an account?</p>
        <Link to="/login">Log in</Link>
        <div>
          <h5 className="text-center mt-5">{data}</h5>
        </div>
      </div>
    </div>
  );
}

export default Register;
