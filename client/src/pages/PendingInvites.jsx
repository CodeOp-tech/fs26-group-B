
import { useState,  useEffect } from 'react'
import { useNavigate  } from 'react-router-dom'
import api from '../services/data'
// import AuthContext from "../contexts/AuthContext";


export default function PendingInvites() {
    var user_id = localStorage.getItem("user_id");
    const [pendingInvites, setPendingInvites] = useState([]);
   
    const navigate = useNavigate();


    useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const data = await api.getOpenEvents(user_id);
			setPendingInvites(data);
		} catch (error) {
			console.error("Error fetching open events", error);
		}
	};
    
    const handleAcceptInvitation = () =>  {
    // {
    //     try {
    //         const res = await api.acceptInvitation(id, pendingInvites[0].id);
    //         console.log(res);
    //         setEventHash(res); //saving the res that should be a hash to state
            
    //     } catch (error) {
    //         console.error("Error accepting invitation", error);
    //     }
        navigate(`/event/${pendingInvites.hash}`);
    }

    return (
        <div className='pending-page'>
            <h3>Pending Invitations</h3>
            {pendingInvites && pendingInvites.invitee ? 
                    <div className='invitation-card'>
                        <p><strong>{pendingInvites.invitee.username}</strong> has invited you to match a date</p>
                        
                        <button onClick={handleAcceptInvitation}>Accept</button>
                    </div>
                
            : <h3>No pending invites</h3>}

        </div>
    )
}