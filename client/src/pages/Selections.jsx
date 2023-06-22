import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import api from "../services/data";
import { useNavigate } from "react-router-dom";
import Pusher from "pusher-js";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import Noty from "noty";
import "noty/src/noty.scss";
import "noty/src/themes/bootstrap-v4.scss";

const PUSHER_KEY = import.meta.env.VITE_PUSHER_KEY;
let channel;

export default function Selections() {
  const navigate = useNavigate();
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
  const { event_id } = useParams();
  const [showMgs, setShowMgs] = useState("");
  const [endMsg, setEndMsg] = useState("");
  const [otherUser, setOtherUser] = useState({});
  const [user, setUser] = useState({});
  const [unable, setUnable] = useState(false);

  useEffect(() => {
    Pusher.logToConsole = true;

    var pusher = new Pusher(PUSHER_KEY, {
      cluster: "eu",
      forceTLS: true,
    });

    console.log("user id and channel", user.id, channel);
    if (user.id && !channel) {
      channel = pusher.subscribe(`user-${user.id}`);
      console.log("subscribed to channel in selections page");
      channel.bind("match", function (data) {
        // console.log("match pusher data is", data);

        if (+data.eventId === +event_id) {
          navigate(`/its-a-date/${event_id}`);

          new Noty({
            type: "info",
            layout: "topCenter",
            theme: "bootstrap-v4",
            closeWith: ["click"],
            timeout: 4000,
            text: "You have a new date!",
          }).show();
        }
      });
    }
  }, [user]);

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    const user = await api.getMyProfile();
    setUser(user);
  }

  useEffect(() => {
    fetchDataEvent();
    fetchOtherUser();
  }, []);

  useEffect(() => {
    if (showLast) {
      fetchOtherSelections();
    }
    console.log(endMsg);
  }, [showLast]);

  useEffect(() => {
    console.log(event && event.status === true ? "Open event" : "Close event");
    if (event && event.status === true) {
      fetchPlansData();
    } else {
      setShowMgs("This event is closed");
    }
  }, [event]);

  useEffect(() => {
    setSelected(selectedPlanId.includes(cardB.id));
    console.log(finishedCards);
    checkMatch();
    fetchOtherSelections();
  }, [currentIndex]);

  const fetchOtherSelections = async () => {
    try {
      const otherHasStarted = await api.getOtherSelections(
        otherUser.id,
        event.id
      );
      console.log(otherHasStarted);
      if (otherHasStarted.length > 0) {
        setEndMsg(`You and ${otherUser.username} haven't match yet.  Try selecting different plans`);
        setUnable(true);
      } else {
        setEndMsg(
          `Wait for ${otherUser.username} to start the selection`
        );
      }
    } catch (error) {
      console.log("Error al obtener el evento:", error);
    }
    console.log(endMsg);
  };

  const fetchDataEvent = async () => {
    console.log(event_id);
    if (event_id) {
      try {
        const event = await api.getEventById(event_id);
        console.log(event);
        setEvent(event);
        if (event.chosenPlanId) {
          navigate(`/its-a-date/${event_id}`);
        }
      } catch (error) {
        console.log("Error al obtener el evento:", error);
      }
    } else {
      console.log("No hay un event_id definido.");
    }
  };

  const fetchOtherUser = async () => {
    if (event) {
      try {
        const otherUser = await api.getUserToMatch(event_id);
        console.log(otherUser);
        if (otherUser) {
          setOtherUser(otherUser);
        }
      } catch (error) {
        console.log("Error al obtener el evento:", error);
      }
    }
  };

  const checkMatch = async () => {
    if (event) {
      try {
        const chosenPlanId = await api.getChosenPlanId(event_id);
        console.log(chosenPlanId);
        if (chosenPlanId) {
          navigate(`/its-a-date/${event_id}`);
        }
      } catch (error) {
        console.log("Error al obtener el evento:", error);
      }
    }
  };

  const fetchPlansData = async () => {
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

  const handleInteraction = () => {
    if (currentIndex === 0 && showLast) {
      setCardA({ name: null, imageSrc: null, shortDescription: endMsg });
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
        shortDescription: endMsg,
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
      const data = await api.addSelection(event.id, cardB.id);
      console.log(data);
      if (data.includes("Match")) {
        navigate(`/its-a-date/${event.id}`);
      }
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
      <h2>Selections to match with {otherUser.username}</h2>
      {setEvent ? (
        <div className="selection-view">
          {plans && (
            <div className="cards-group">
              <div className="back-card ">
                <Card planContent={cardA} />
              </div>
              <div className="main-card focus selected">
                <Card planContent={cardB} />
              </div>
              <div className="next back-card" onClick={handleInteraction}>
                {!showLast && <p className="text">Next</p>}
                <Card planContent={cardC} />
              </div>
            </div>
          )}
          <div className="select-button">
            {showLast ? (
              <button onClick={handleTryAgain}>
                <ReplayRoundedIcon /> <p>Try again</p>
              </button>
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
        </div>
      ) : (
        <div className="no-event">
          {showMgs && <h2>{showMgs}</h2>}
          <h2>There is no event to show</h2>
          <p>Go to the home page and create a new event</p>

          <button>Create event</button>
        </div>
      )}
    </div>
  );
}
