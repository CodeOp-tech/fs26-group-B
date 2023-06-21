import React from "react";
import { useState, useEffect } from "react";
import api from "../services/data.js";
import PendingInvites from "../components/PendingInvites.jsx";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const user = await api.getMyProfile();

      console.log("the user is", user);
      setUser(user);
    } catch (error) {
      console.log(error);
      setData(error.message);
    }
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  async function resetPassword(password) {
    try {
      await api.resetPassword(password);
      console.log("Password has been reset");
    } catch (error) {
      console.log(error);
      setData(error.message);
    }
  }

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
