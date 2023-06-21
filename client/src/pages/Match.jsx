import React from "react";
import { useState, useEffect, useRef } from "react";
import api from "../services/data.js";
import Map from "../components/Map";
import header from "../assets/match-title.png";
import { useNavigate, useParams } from "react-router-dom";

export default function Match() {
  const navigate = useNavigate();
  const scrollReference = useRef(null);
  const [plan, setPlan] = useState({});
  const [event, setEvent] = useState({});
  const [user, setUser] = useState({});
  const [eventShouldBeDisplayed, setEventShouldBeDisplayed] = useState(false);
  const [userIsInviter, setUserIsInviter] = useState(false);

  //get the eventId from url params
  const { event_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const event = await api.getEventById(event_id);
      setEvent(event);

      const user = await api.getMyProfile();
      setUser(user);

      console.log(event.inviter.id);

      if (
        event.status === false &&
        (event.inviter.id === user.id || event.invitee.id === user.id)
      )
        setEventShouldBeDisplayed(true);

      if (event.inviter.id === user.id) setUserIsInviter(true);

      const planID = event.chosenPlanId;
      // console.log(planID);

      const plan = await api.getPlan(planID);
      setPlan(plan);
    };
    fetchData();
  }, []);

  function goHome() {
    navigate("/home");
  }

  function goNotifications() {
    navigate("/notifications");
  }

  // function to scroll the page down to the map
  function readMore() {
    executeScroll();
  }
  const executeScroll = () =>
    scrollReference.current.scrollIntoView({
      inline: "center",
      behavior: "smooth",
      alignToTop: true,
      block: "nearest",
    });

  return (
    <div>
      {eventShouldBeDisplayed ? (
        <div>
          <div className="top-window">
            <img src={header} alt="It's a Date!" className="match-title" />

            <h2>
              You and {userIsInviter ? event.invitee.name : event.inviter.name}{" "}
              both chose: {plan.name}
            </h2>

            <div className="featured-date">
              <div className="image-card">
                <img className="match-image" src={plan.imageSrc} />
              </div>
            </div>

            <button className="btn-readMore" onClick={readMore}>
              Read more
            </button>
          </div>

          <div ref={scrollReference}>
            <div className="featured-text">
              <h2>Read a little more about your date</h2>
              <p className="match-longDesc">{plan.longDescription}</p>
            </div>

            {plan.searchKeyword ? (
              <div className="map-div">
                <h2>Here are some useful places for your date</h2>
                <Map />
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="no-event">
          <h2>This event doesn't have a match yet 😢</h2>
          <p>
            Go to the home page and create a new event or check your
            notifications to see if you have an invitation!
          </p>
          <button className="btn-home" onClick={goHome}>
            Create event
          </button>
          <button onClick={goNotifications}>Notifications</button>
        </div>
      )}
    </div>
  );
}
