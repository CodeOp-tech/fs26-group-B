
import { useState, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom'
import api from '../services/data'


export default function PendingInvites() {
    // const auth = useContext(AuthContext);
    const auth = true;
    const id = 2;
    const [pendingInvites, setPendingInvites] = useState([]);
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
    

    return (
        <div>
            
        </div>
    )
}