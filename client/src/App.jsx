import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Match from "./pages/Match";
import NavBar from "./components/NavBar";
import AuthContext from "./contexts/AuthContext";
import RequireAuth from "./components/RequireAuth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // const token = localStorage.getItem("token"); just for testing and access to search page
    const token = true;
    if (token) {
      setUser(true);
    }
  }, []);

  function login(username, password) {
    setUser(true);
    console.log("login");
  }

  function logout() {
    localStorage.removeItem("token");
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
          <Route path="/" element={<Navigate replace to="/login" />} />
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
          <Route
            path="/invitation"
            element={
              <RequireAuth>
                <Invitation />
              </RequireAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/its-a-date"
            element={
              <RequireAuth>
                <Match />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
