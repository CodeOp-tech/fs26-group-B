import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Match from "./pages/Match";
import PendingInvites from "./components/PendingInvites";
import Invitation from "./pages/Invitation";
import NavBar from "./components/NavBar";
import Selections from "./pages/Selections";
import AuthContext from "./contexts/AuthContext";
import RequireAuth from "./components/RequireAuth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(true);
    }
  }, []);

  function login(data) {
    if (data) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
    }
    setUser(true);
    console.log("login");
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser(false);
    console.log("logout");
  }

  const authObject = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authObject}>
      <div>
        <NavBar />

        <Routes>
          {/* {user ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<Navigate replace to="/login" />} />
          )} */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          ></Route>
          {/* <Route
            path="/pending"
            element={
              <RequireAuth>
                <PendingInvites />
              </RequireAuth>
            }
          />
          <Route
            path="/invitation"
            element={
              <RequireAuth>
                <Invitation />
              </RequireAuth>
            }
          /> */}
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/its-a-date/:event_id"
            element={
              <RequireAuth>
                <Match />
              </RequireAuth>
            }
          />
          <Route
            path="/event/:event_id"
            element={
              <RequireAuth>
                <Selections />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
