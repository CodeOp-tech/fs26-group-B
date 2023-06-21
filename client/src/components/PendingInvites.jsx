import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/data";
// import AuthContext from "../contexts/AuthContext";

export default function PendingInvites() {
	const [pendingInvites, setPendingInvites] = useState([]);
	const { username } = localStorage.getItem("username");
	const [msg, setMsg] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		fetchData();
		pendingInvites && console.log(`The pending invites are ${pendingInvites}`);
	}, []);

	const fetchData = async () => {
		try {
			const data = await api.getOpenEvents();
			data && setPendingInvites(data);
			data && console.log(data);
		} catch (error) {
			console.error("Error fetching open events", error);
		}
		pendingInvites &&
			console.log(
				`The pending invites are ${pendingInvites}`
      );
    if (pendingInvites.length === 0) {
      setMsg("You have no pending invitations");
    }
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
                {invite.inviter.username === username ? (
                  <div key={i} className="invitation-card">
                    <p>
                      You have a pending invitation with{" "}
                      <strong>{invite.inviter.username}</strong>{" "}
                    </p>

                    <button onClick={() => handleAcceptInvitation(invite.id)}>
                      Accept
                    </button>
                  </div>
                ) : null
									// setMsg("You have no pending invitations")
								}
							</>
						))
					) : (
						<div className="no-invites">
							<h5>{msg}</h5>
							<button onClick={goHome}>Send an invite</button>
						</div>
					)}
					{ msg }
				</div>

				<div className="unfinished">
					<h3>Unfinished Matches</h3>
					{pendingInvites.length > 0 ? (
						pendingInvites.map((invite, i) => (
							<>
								{invite.inviter.username !== username && (
									<div key={i} className="invitation-card">
										<p>
											Continue to find a match with{" "}
											<strong>{invite.invitee.username}</strong>{" "}
										</p>

										<button onClick={() => handleAcceptInvitation(invite.id)}>
											Continue
										</button>
									</div>
								)}
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
