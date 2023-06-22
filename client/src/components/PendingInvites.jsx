import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/data";
import AuthContext from "../contexts/AuthContext";

export default function PendingInvites() {
	const [pendingInvites, setPendingInvites] = useState([]);
	const [unfinishedMatch, setUnfinishedMatch] = useState([]);
	// const { username } = localStorage.getItem("username");
	const [msg, setMsg] = useState("");
	const auth = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		fetchInvitations();
		fetchUnfinishedMatched();

		if (pendingInvites.length === 0) {
			setMsg("You have nothing pending here");
		}
		if (unfinishedMatch.length === 0) {
			setMsg("You have nothing pending here");
		}
	}, []);

	const fetchInvitations = async () => {
		try {
			const data = await api.getOpenEvents("invitee");
			data && setPendingInvites(data);
			data && console.log(data);
		} catch (error) {
			console.error("Error fetching open events", error);
		}
	};

	const fetchUnfinishedMatched = async () => {
		try {
			const data = await api.getOpenEvents("inviter");
			data && setUnfinishedMatch(data);
			data && console.log(data);
		} catch (error) {
			console.error("Error fetching open events", error);
		}

		unfinishedMatch &&
			console.log("this are your infinished" + unfinishedMatch);
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
										Pending invitation from{" "}
										<strong>{invite.inviter.username}</strong>{" "}
									</p>

									<button
										onClick={() => handleAcceptInvitation(invite.id)}
									>
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

									<button
										onClick={() => handleAcceptInvitation(invite.id)}
									>
										Continue
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
			</div>
		</>
	);
}