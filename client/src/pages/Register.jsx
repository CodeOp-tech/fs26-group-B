import { useState, useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/data.js";

function Register() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [credentials, setCredentials] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const { name, username, email, password } = credentials;

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

      // const data = await api.createUser(credentials);

      console.log(data.message);
      setData(data.message);
      auth.login(data);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setData(error.response.data.message);
    }
  };

  return (
    <div className="sign-log">
      <div>
        <h2>Sign up to get started</h2>
        <div className="register-box">
          <div className="input-div">
            <input
              value={name}
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Name"
              className="register-input"
            />
          </div>
          <div className="input-div">
            <input
              value={username}
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="Username"
              className="register-input"
            />
          </div>
          <div className="input-div">
            <input
              value={email}
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              className="register-input"
            />
          </div>
          <div className="input-div-bottom">
            <input
              value={password}
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
              className="register-input"
            />
          </div>
          <div>
            <button className="signup-btn" id="cta-btn" onClick={register}>
              Sign Up
            </button>
          </div>

          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>

        <div className="error-message">
          <p>{data}</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
