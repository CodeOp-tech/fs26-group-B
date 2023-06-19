import api from "../services/data";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";


// USER FLOW

// 1. user1 search for user2
// 2. is its found, user1 have the option of sending invitation to user2
// 3. user1 press invitation button and back end register a new event with user 1 and user2 and send back the new event hash
// 4. user1 receive invitation confirmation and a option to start the selection
// 5. user1 press start and is redirect to selection/event page with the hash of the event

//// notification page would check on events table if there is an open event for the user and if there is, it would show the invitation there

// 6. user2 login and sees a notification of a new invitation
// 7. user2 press the notification and has the option to open the invitation
// 8. user2 press accept and is redirect to selection/event page with the hash of the event

export default function Search() {
	const [userSearch, setUserSearch] = useState("");
	const [user, setUser] = useState("");
	const navigate = useNavigate();
	const [errorMsg, setErrorMsg] = useState(false);
	const [invitationMsg, setInvitationMsg] = useState("");
	const [eventHash, setEventHash] = useState("");

	useEffect(() => {
		setUser({});
	}, []);

	const handleSearch = (e) => {
		e.preventDefault();
		setInvitationMsg("");
		searchUser();
		setUserSearch("");
	};

	const searchUser = async () => {
		console.log(userSearch)
		try {
			const data = await api.getUsername(userSearch);
			(data && setUser(data)) || setErrorMsg(true);
			data && setErrorMsg(false);
			console.log(errorMsg);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
		console.log(user);
	};

	const handleInvitation = async () => {
		try {
			const data = await api.sendInvitation(1);
			if (data) setInvitationMsg("Invitation sent successfully!");

			setEventHash(data); //should receive event hash from api
		} catch (error) {
			console.log(error);
		}
		setUser({});
	};

	const handleStart = () => {
		navigate("/event/1");
		// navigate(`/event/${eventHash}`) with real api call
	};

	const handleChange = (e) => {
		setUserSearch(e.target.value);
	};

	return (
		<div>
			<div className="search-box">
				<form>
					<div className="search-field">
						<label htmlFor="eventTitle">
							Search for your partner
						</label>
						<div>
							<input
								type="text"
								id="eventTitle"
								name="eventTitle"
								value={userSearch}
								onChange={handleChange}
							/>
							<button
								className="submit-button"
								type="submit"
								onClick={handleSearch}
							>
								<SearchIcon />
							</button>
						</div>
					</div>
				</form>
				{user.username && (
					<div className="found msg">
						<p>
							{user.username} <span>user found!</span>
						</p>
						<button onClick={handleInvitation}>Invite</button>
					</div>
				)}

				{errorMsg === true && (
					<div className="msg not-found">
						<p>Sorry, user not found </p>
					</div>
				)}
				{invitationMsg && (
					<div className="confirmation">
						{invitationMsg}
						<p>Press Start to begin your selection</p>
						<button onClick={handleStart}>Start</button>
					</div>
				)}
			</div>

			{/* <div className="share-link">
                <a>Or send registration Link </a><a><SendIcon /></a>
                </div> */}
		</div>
	);
}
