import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/data";
// import AuthContext from "../contexts/AuthContext";

export default function PendingInvites() {
  var user_id = localStorage.getItem("user_id");
  const [pendingInvites, setPendingInvites] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    console.log(`The pending invites are ${pendingInvites}`);
  }, []);

  const fetchData = async () => {
    try {
      const data = await api.getOpenEvents(user_id);
      setPendingInvites(data);
    } catch (error) {
      console.error("Error fetching open events", error);
    }
  };

  const handleAcceptInvitation = () => {
    localStorage.setItem("event_hash", pendingInvites.hash);
    navigate("/event");
  };

  return (
    <div className="pending-page">
      {pendingInvites && pendingInvites.invitee ? (
        <>
          <h3>Pending Invitations</h3>
          <div className="invitation-card">
            <p>
              You have one pending invitation with{" "}
              <strong>{pendingInvites.inviter.username}</strong>{" "}
            </p>

            <button onClick={handleAcceptInvitation}>Accept</button>
          </div>
        </>
      ) : (
        <h3>No pending invites</h3>
      )}
    </div>
  );
}
