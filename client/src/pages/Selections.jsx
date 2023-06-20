import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import api from "../services/data";

export default function Selections() {
	var user_id = localStorage.getItem("user_id");
	const [selected, setSelected] = useState(false);
	const [selectedPlanId, setSelectedPlanId] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [plans, setPlans] = useState([]);
	const [cardA, setCardA] = useState({ name: null, imageSrc: null });
	const [cardB, setCardB] = useState({});
	const [cardC, setCardC] = useState({});
	const [showLast, setShowLast] = useState(false);
	const [finishedCards, setFinishedCards] = useState(false);
	const [event, setEvent] = useState({});
	const {event_id} = useParams();
	const [showMgs, setShowMgs] = useState("")
	//get the hash from local storage
	
	useEffect(() => {
		
		console.log(event_id);
		if (event_id) {
			api.getEventById(event_id).then((data) => {
				console.log(data);
				setEvent(data);
				console.log(event.status);
				if (event.status === true) {
					console.log("is open");
					fetchData();
				}
				else {
					console.log("event is close");
					setShowMgs("This event is closed")

				}
			});

		} else {
			console.log("there is no" + event_id);
		}
		
		
	}, [event_id]);


	const fetchData = async () => {

		try {
			const plansData = await api.getAllPlans();
			setPlans(plansData);
			if (plansData.length === 0) {
				console.log("no plans");
				return;
			}
			setCardB(plansData[currentIndex]);
			setCardC(plansData[currentIndex + 1]);
		} catch (error) {
			console.error("Error fetching plans:", error);
		}
	};

	useEffect(() => {
		setSelected(selectedPlanId.includes(cardB.id));
		console.log(finishedCards);
	}, [currentIndex]);

	const handleInteraction = () => {
		if (currentIndex === 0 && showLast) {
			setCardA({ name: null, imageSrc: null });
			setCardB(plans[currentIndex]);
			setCardC(plans[currentIndex + 1]);
			setFinishedCards(true);
			setShowLast(false);
			setCurrentIndex(currentIndex + 1);
			console.log("is 0");
		} else if (currentIndex + 1 === plans.length) {
			setCardB({
				name: "No more options",
				imageSrc: "https://i.gifer.com/19E6.gif",
			});
			setCardC({ name: null, imageSrc: null });
			setCurrentIndex(0);
			setShowLast(true);
			console.log("is last");
		} else {
			console.log("is not 0 or last card");
			setCardA(plans[currentIndex]);
			setCardB(plans[currentIndex + 1]);
			setCardC(plans[currentIndex + 2]);
			setCurrentIndex(currentIndex + 1);
			setShowLast(false);
			if (currentIndex + 2 === plans.length) {
				setCardC({
					name: "No more options",
					imageSrc: "https://i.gifer.com/19E6.gif",
				});
			}
		}
	};

	const handleSelection = async () => {
		console.log(event);
		setSelected(!selected);
		// adds the focus eventid to the selectedPlanIds array
		if (!selectedPlanId.includes(cardB.id)) {
			setSelectedPlanId([...selectedPlanId, cardB.id]);
		}
		try {
			const data = await api.addSelection(event.id, 2, 1, cardB.id);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleTryAgain = () => {
		setShowLast(false);
		setCardA({ name: null, imageSrc: null });
		setCardB(plans[currentIndex]);
		setCardC(plans[currentIndex + 1]);
		setCurrentIndex(0);
		setFinishedCards(true);
	};

	return (
		<div className="event-selection">
			{!showMgs.length ?
				(<div className="selection-view">
					{plans && (
						<div className="cards-group">
							<div className="back-card ">
								<Card planContent={cardA} />
							</div>
							<div className="main-card focus selected">
								<Card planContent={cardB} />
							</div>
							<div className="next back-card" onClick={handleInteraction}>
								{ !showLast && <p className="text">Next</p>}
								<Card planContent={cardC} />
							</div>
						</div>
					)}
					<div className="select-button">
						{showLast ? (
							<button onClick={handleTryAgain}>Try again</button>
						) : (
							<>
								{!selected && (
									<a onClick={handleSelection}>
										<FavoriteBorderIcon />
									</a>
								)}
								{selected && (
									<a onClick={handleSelection}>
										<FavoriteIcon style={{ color: "var(--pink)" }} />
									</a>
								)}
							</>
						)}
					</div>
				</div>) :
				(<div className="no-event">
						{showMgs && <h2>{showMgs}</h2>}
						<h2>There is no event to show</h2>
						<p>Go to the home page and create a new event</p>
					
					<button>Create event</button>
				</div>)
			}
			
			</div>
	);
}
