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
    

	useEffect(() => {
		// navigate('/selections')

        setUser({});
     
	}, []);

	const handleSearch = (e) => {
		e.preventDefault();
        searchUser();
        setUserSearch("");
		
	};

	const searchUser = async () => {
		try {
			const data = await api.getUsername(userSearch);
            data && setUser(data) || setErrorMsg(true);
            data && setErrorMsg(false) 
            console.log(user);
            console.log(errorMsg);
            console.log(data);
		} catch (error) {
			console.log(error);
        }
	};

	const handleInvitation = async () => {
		try {
			const data = await api.sendInvitation(1);
			if (data) console.log("invitation sent" + data);
			navigate("/selections");
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e) => {
		setUserSearch(e.target.value);
	};

	return (
		<div>
			<form onSubmit={handleSearch}>
				<div className="search-field">
					<label htmlFor="eventTitle">Search for your partner</label>
					<div>
						<input
							type="text"
							id="eventTitle"
							name="eventTitle"
							value={userSearch}
							onChange={handleChange}
							required
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
                {user.username &&
                    <div className="found msg">
                        <p>{user.username}    <span>user found!</span></p>
                    
                    	
							<button
								onClick={handleInvitation}
							>
								Invite
                        </button>
                    </div>
					
                }
            </form>
            

			{errorMsg === true && (
				<div className="msg not-found">
					<p>Sorry, user not found </p>
				</div>
			)}

			{/* <div className="share-link">
                <a>Or send registration Link </a><a><SendIcon /></a>
                </div> */}
		</div>
	);
}
