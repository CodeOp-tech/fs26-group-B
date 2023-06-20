import React from "react";
import { useState, useEffect, useRef } from "react";
import api from "../services/data.js";
import Map from "../components/Map";
import { useNavigate } from "react-router-dom";

export default function Match() {
  const navigate = useNavigate();
  const scrollReference = useRef(null);
  const [plan, setPlan] = useState({});
  const [hash, setHash] = useState("");

  //get the hash from local storage
  useEffect(() => {
    setHash(localStorage.getItem("event_hash"));
  }, []);

  useEffect(() => {
    console.log(hash);
    if (hash) {
      console.log("Saved event", hash);
      fetchData();
    } else {
      console.log("there is nothing at this hash", hash);
    }
  }, [hash]);

  useEffect(() => {
    const fetchData = async () => {
      const event = await api.getEventByID(hash);
      const planID = event.chosenPlanId;

      const plan = await api.getPlan(planID);
      setPlan(plan);
    };
    fetchData();
  }, []);
  // console.log(plan);
  // console.log(plan.longDescription);

  function goHome() {
    navigate("/home");
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
      {hash ? (
        <div>
          <div>
            <img src="../assets/match-title.png" alt="It's a Date!" />
            <h1>It's a Date!</h1>

            <div className="featured-date">
              <div className="image-card">
                <img className="match-image" src={plan.imageSrc} />
              </div>

              <div className="featured-text">
                <h2>You both chose: {plan.name}</h2>
                <p className="match-longDesc">{plan.longDescription}</p>
              </div>
            </div>

            <button className="btn-readMore" onClick={readMore}>
              Read more
            </button>
          </div>

          <div ref={scrollReference}>
            {plan.searchKeyword ? (
              <div>
                <h2>Check out some useful places for your date</h2>
                <img className="match-image" src={plan.imageSrc} />
                <Map />
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="no-event">
          <h2>There is no event to show</h2>
          <p>Go to the home page and create a new event</p>
          <button onClick={goHome}>Create event</button>
        </div>
      )}
    </div>
  );
}
