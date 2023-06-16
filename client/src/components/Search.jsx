import api from "../services/data";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

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
		try {
			const data = await api.getUsername(userSearch);


			(data && setUser(data)) || setErrorMsg(true);
			data && setErrorMsg(false);
			console.log(errorMsg);
			console.log(data);

		} catch (error) {
			console.log(error);
		}
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

      <button onClick={handleStart}>Start</button></div>}

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
