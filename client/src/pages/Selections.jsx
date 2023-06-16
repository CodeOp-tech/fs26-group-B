import { useState, useEffect } from "react";
import Card from "../components/Card";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import api from "../services/data";

export default function Selections() {
    const [selected, setSelected] = useState(false);
    const [selectedPlanId, setSelectedPlanId] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
    const [plans, setPlans] = useState([]);
    const [cardA, setCardA] = useState({name: null, imageSrc: null});
    const [cardB, setCardB] = useState({});
    const [cardC, setCardC] = useState({});
    const [lastCard, setLastCard] = useState(false);

    useEffect(() => {
	const fetchData = async () => {
		try {
			const plansData = await api.getAllPlans();
            setPlans(plansData);
            if (plansData.length === 0) {
                console.log("no plans")
                return;
            }
            // setCardA(plansData[currentIndex ]);
            setCardB(plansData[currentIndex ]);
            setCardC(plansData[currentIndex + 1]);
             
		} catch (error) {
			console.error("Error fetching plans:", error);
		}
	};
        fetchData();
    }, []);
    
    useEffect(() => {
        if (selectedPlanId.includes(cardB.id)) {
            console.log(selectedPlanId)
            setSelected(true);
        }
        else {
            setSelected(false);
        }
        // if (currentIndex === 0) {
        //     setCardA({ name: null, imageSrc: null });
        //     setCardB(plans[currentIndex]);
        //     setCardC(plans[currentIndex + 1]);
        // }
            
    }, [currentIndex]);

    const handleInteraction = () => {
        if (currentIndex === 0) {
            setCardA({ name: null, imageSrc: null });
            setCardB(plans[currentIndex]);
            setCardC(plans[currentIndex + 1]);
            setLastCard(false);
        }
        if (currentIndex + 1 === plans.length) {
            // setCardA(plans[currentIndex + 1]);
            setCardB({ name: "No more options", imageSrc: "https://i.gifer.com/19E6.gif" });
            setCardC({ name: null, imageSrc: null });
            setCurrentIndex(0)
            setLastCard(true);
        }
        else {
            setCurrentIndex(currentIndex + 1);
            setCardA(plans[currentIndex]);
            setCardB(plans[currentIndex + 1]);
            setCardC(plans[currentIndex + 2]);
            if (currentIndex + 2 === plans.length) {
                // setCardA(plans[currentIndex]);
                // setCardB(plans[currentIndex + 1]);
                setCardC({ name: "No more options", imageSrc:"https://i.gifer.com/19E6.gif" });
                // setCurrentIndex(0)
            }
    }
       

	};

	const handleSelection = async() => {
        setSelected(!selected);
        // adds the focus eventid to the selectedPlanIds array
        if (!selectedPlanId.includes(cardB.id)) {
            setSelectedPlanId([...selectedPlanId, cardB.id]);
        }
        try {
            const data = await api.addSelection(3, 2, 1, cardB.id);
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
        // console.log(selectedPlanId);

        
		//take main card id and send to backend
		// wait for an answer from backend to see if is there a match
		// if there is a match, navigate to match page
      
	};

    const handleTryAgain = () => {
        setSelectedPlanId([]);
        setLastCard(false);
        handleInteraction();
    }
       
    
	return (
        <div className="selection-view">
            {plans  &&
			<div className="cards-group">
				<div className="back-card ">
					<Card planContent={cardA} />
				</div>
				<div className="main-card focus selected">
					<Card planContent={cardB} />
				</div>
				<div className="back-card" onClick={handleInteraction}>
					<Card planContent={cardC} />
				</div>
			</div>}
            <div className="select-button" >
                {lastCard ? <button onClick={handleTryAgain}>Try again</button> : <>
				{!selected && (
					<a onClick={handleSelection}>
						<FavoriteBorderIcon />
					</a>
				)}
				{selected && (
					<a onClick={handleSelection}>
						<FavoriteIcon />
					</a>
                    )}
                </>
                }
			</div>
		</div>
	);
}
