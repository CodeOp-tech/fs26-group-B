import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  const [loading, setLoading] = useState(false);

  // const auth = useContext(AuthContext);
  const auth = {user: "fakeuser"}; // just for testing and access to search page

  useEffect(() => {
    // const token = localStorage.getItem("token"); just for testing and access to search page
    // if (!token) {
    //   auth.logout();
    // } else {
    //   auth.login();
    // }

    setLoading(false);
  });

  if (!auth.user && !loading) {
    return (
      <div>
        <Navigate to="/login" />
      </div>
    );
  } else if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
}
