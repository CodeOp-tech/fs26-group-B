import { useState, useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import api from "../services/data.js";

export default function api() {
  const auth = useContext(AuthContext);

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

  return <div>api</div>;
}
