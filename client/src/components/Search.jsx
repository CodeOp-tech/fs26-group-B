import api from "../services/data";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from '@mui/icons-material/Send';

export default function Search() {
	const [user, setUser] = useState({
		id: "",
		name: "",
		username: "",
		email: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("searching for partner");
		api.searchPartner();
	};

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="search-field">
					<label htmlFor="eventTitle">Search for your partner</label>
					<div>
						<input
							type="text"
							id="eventTitle"
							name="eventTitle"
							value={user.username}
							onChange={handleChange}
							required
						/>
						<button className="submit-button" type="submit">
							<a>
								<SearchIcon />
							</a>
						</button>
					</div>
				</div>
            </form>
            <div className="share-link">
                <a>Or send invitation Link </a><a><SendIcon /></a>
                </div>
		</div>
	);
}
