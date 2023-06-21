import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/data";
// import AuthContext from "../contexts/AuthContext";

export default function PendingInvites() {
  const [pendingInvites, setPendingInvites] = useState([]);
  const [unfinishedMatch, setUnfinishedMatch] = useState([]);
	const { username } = localStorage.getItem("username");
	const [msg, setMsg] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
    fetchInvitations("invitee");
    fetchUnfinishedMatched("inviter");
    console.log(
      "Invitations",
      pendingInvites,
      "match unfinished",
      unfinishedMatch
    );
	}, []);

	const fetchInvitations = async (role) => {
		try {
			const data = await api.getOpenEvents(role);
			data && setPendingInvites(data);
			data && console.log(data);
		} catch (error) {
			console.error("Error fetching open events", error);
		}
		
    if (pendingInvites.length === 0) {
      setMsg("You have no pending invitations");
    }
   
  };
  
  const fetchUnfinishedMatched = async (role) => {
		try {
			const data = await api.getOpenEvents(role);
			data && setUnfinishedMatch(data);
			data && console.log(data);
		} catch (error) {
			console.error("Error fetching open events", error);
		}
		
    if (unfinishedMatch.length === 0) {
      setMsg("You have no pending invitations");
    }
    unfinishedMatch && console.log("this are your infinished" + unfinishedMatch);
	};



  const handleAcceptInvitation = (id) => {
    
		navigate(`/event/${id}`);
	};

	const goHome = () => {
		navigate("/home");
	};

	return (
		<>
			<h1>Notifications</h1>
			<div className="pending-page">
				<div className="pending">
					<h3>Pending Invitations</h3>
					{pendingInvites.length > 0 ? (
						pendingInvites.map((invite, i) => (
							<>
                  <div key={i} className="invitation-card">
                    <p>
                      You have a pending invitation with{" "}
                      <strong>{invite.inviter.username}</strong>{" "}
                    </p>

                    <button onClick={() => handleAcceptInvitation(invite.id)}>
                      Accept
                    </button>
                  </div>
                
							</>
						))
					) : (
						<div className="no-invites">
							<h5>{msg}</h5>
							<button onClick={goHome}>Send an invite</button>
						</div>
					)}
				
				</div>

				<div className="unfinishedMatched">
          <h3>Unfinished Matches</h3>
					{unfinishedMatch.length > 0 ? (
						unfinishedMatch.map((invite, i) => (
							<>
								
									<div key={i} className="invitation-card">
										<p>
											Continue to find a match with{" "}
											<strong>{invite.invitee.username}</strong>{" "}
										</p>

										<button onClick={() => handleAcceptInvitation(invite.id)}>
											Continue
										</button>
									</div>
								
							</>
						))
					) : (
						<div className="no-invites">
							<h3>Pending Invitations</h3>
							<h5>You have no pending invitations</h5>
							<button onClick={goHome}>Send an invite</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
