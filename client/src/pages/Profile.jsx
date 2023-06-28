import { useState, useEffect } from "react";
import api from "../services/data.js";
import PendingInvites from "../components/PendingInvites.jsx";
import { useNavigate } from "react-router-dom";

export default function Profile() {
	const [user, setUser] = useState(null);
	const [data, setData] = useState(null);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

	useEffect(() => {
		fetchUser();
	}, []);

	const fetchUser = async () => {
		try {
			const user = await api.getMyProfile();

			console.log("the user is", user);
			setUser(user);
		} catch (error) {
			console.log(error);
			setData(error.message);
		}
	};

	const handleChange = (e) => {
		setPassword(e.target.value);
	};

	async function resetPassword(password) {
		try {
			await api.resetPassword(password);
			console.log("Password has been reset");
		} catch (error) {
			console.log(error);
			setData(error.message);
		}
	}

	return (
		<div className="profile-page">
			<h1 className="profile-heading">Profile</h1>
			<div className="profile-content">
				<div className="profile">
					<div className="profile-details">
						<h3>My Details</h3>
						<p>Name: {user?.name}</p>
            <p>Username: {user?.username}</p>
            <div className="reset-pass">
              <p>Reset my password:</p>
              <input
                value={password}
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="New password"
                className="register-input"
              />
                <button onClick={resetPassword}>Reset Password</button>
              </div>
					</div>

					{/* <PendingInvites className="profile-invites" /> */}
				</div>
				<div className="extra-profile">
          <button onClick={() => navigate("/notifications")}>Notifications</button>
          <button onClick={api.logout}>Past Dates</button>
				</div>
			</div>
		</div>
	);
}
