import React from "react";
import { useState, useEffect } from "react";
import api from "../services/data.js";
import PendingInvites from "../components/PendingInvites.jsx";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState("");
  const [data, setData] = useState(null);
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const userId = localStorage.getItem("user_id");
      console.log(userId);
      setUserId(userId);

      const user = await api.getUser(userId);
      console.log(user);
      setUser(user);
    } catch (error) {
      console.log(error);
      setData(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassword({ [name]: value });
  };

  async function resetPassword(userId, password) {
    try {
      await api.resetPassword(userId, password);
      console.log("Password has been reset");
    } catch (error) {
      console.log(error);
      setData(error.message);
    }
  }

  // useEffect(() => {
  //   requestData();
  // }, []);

  // const requestData = async () => {
  //   try {
  //     const { data } = await axios("/api/auth/profile", {
  //       headers: {
  //         authorization: "Bearer " + localStorage.getItem("token"),
  //       },
  //     });
  //     setData(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //     setData(error.message);
  //   }
  // };

  return (
    <div>
      <h1 className="profile-heading">My Profile</h1>

      <div className="profile">
        <div className="profile-details">
          <h3>My Details</h3>
          <p>Name: {user?.name}</p>
          <p>Username: {user?.username}</p>
          <p>Reset my password:</p>
          <input
            value={password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="New password"
            className="register-input"
          />
          <button onClick={resetPassword}>Reset Password</button>
        </div>

        <PendingInvites className="profile-invites" />
      </div>
    </div>
  );
}
