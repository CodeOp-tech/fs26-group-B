import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/data.js";

export default function Invitation() {
  const navigate = useNavigate();
  const [event, setEvent] = useState({});

  // use url params to get event ID
  // const { hash } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      const invitation = await api.getEvent(hash);
      setEvent(invitation);
    };
    fetchEvent();
  }, []);
  // console.log(user);

  // create variable for url with params
  const url = `/events/${hash}`;
  function getStarted() {
    navigate(url);
  }

  return (
    <div>
      <h1 className="invite-header">
        {event.invitee.name}, you've received an invitation!
      </h1>

      <h2 className="invite-message">
        {event.inviter.name} wants to make plans with you
      </h2>

      <button className="invite-button" onClick={getStarted}>
        Get started
      </button>
    </div>
  );
}
