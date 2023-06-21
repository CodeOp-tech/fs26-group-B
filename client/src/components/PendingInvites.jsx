import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/data";
// import AuthContext from "../contexts/AuthContext";

export default function PendingInvites() {
  const [pendingInvites, setPendingInvites] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    console.log(`The pending invites are ${pendingInvites}`);
  }, []);
  
  

  const fetchData = async () => {
      try {
        const data = await api.getOpenEvents();
        data && setPendingInvites(data);
        data && console.log(data);
    } catch (error) {
      console.error("Error fetching open events", error);
      }
    pendingInvites && console.log(`The pending invites are ${pendingInvites[0].inviter.username}`);
  };

  const handleAcceptInvitation = () => {
    localStorage.setItem("event_hash", pendingInvites.hash);
    navigate("/event");
  };

  const goHome = () => {
    navigate("/home");
  };

  return (
    <div className="pending-page">
      <h3>Pending Invitations</h3>
      {pendingInvites.length > 0 ? ( pendingInvites.map((invite, i) => (
        < >
          
          <div key={i} className="invitation-card">
            <p >
              You have one pending invitation with{" "}
              <strong>{invite.invitee.username}</strong>{" "}
            </p>

            <button  onClick={handleAcceptInvitation}>Accept</button>
          </div>
        </>
      ))
      )
       : (
        <div className="no-invites">
          <h3>Pending Invitations</h3>
          <h5>You have no pending invitations</h5>
          <button onClick={goHome}>Send an invite</button>
        </div>
        )}
       <h3>Unfinished Matches</h3>
      {pendingInvites.length > 0 ? ( pendingInvites.map((invite, i) => (
        < >
          
          <div key={i} className="invitation-card">
            <p >
              Continue to find a match with{" "}
              <strong>{invite.inviter.username}</strong>{" "}
            </p>

            <button  onClick={handleAcceptInvitation}>Continue</button>
          </div>
        </>
      ))
      )
       : (
        <div className="no-invites">
          <h3>Pending Invitations</h3>
          <h5>You have no pending invitations</h5>
          <button onClick={goHome}>Send an invite</button>
        </div>
      )}
    </div>
  );
}
