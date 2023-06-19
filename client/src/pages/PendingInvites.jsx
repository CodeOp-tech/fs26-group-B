
import { useState, useContext,  useEffect } from 'react'
import { useNavigate  } from 'react-router-dom'
import api from '../services/data'
import AuthContext from "../contexts/AuthContext";


export default function PendingInvites() {
    const auth = useContext(AuthContext);
    // const auth = true;
    const id = 2;
    const [pendingInvites, setPendingInvites] = useState([]);
    const [eventHash, setEventHash] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.getOpenEvents(id);
                setPendingInvites(res);
            } catch (error) {
                console.error("Error fetching open events", error);
            }
        };
        fetchData();
       
    }, []);
    
    console.log(pendingInvites)
    const handleAcceptInvitation = async () =>
    {
        try {
            const res = await api.acceptInvitation(id, pendingInvites[0].id);
            console.log(res);
            setEventHash(res); //saving the res that should be a hash to state
            
        } catch (error) {
            console.error("Error accepting invitation", error);
        }
        // navigate(`/invitation/${eventHash}`);
        navigate(`/event/123444`);
    }

    return (
        <div className='pending-page'>
            <h3>Pending Invitations</h3>
            {pendingInvites ? 
                    <div className='invitation-card'>
                        <p>{pendingInvites.userId_1} has invited you to match a date</p>
                        
                        <button onClick={handleAcceptInvitation}>Accept</button>
                    </div>
                
            : <h3>No pending invites</h3>}

        </div>
    )
}