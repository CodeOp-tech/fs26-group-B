import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../services/data.js";

export default function Invitation() {
  const navigate = useNavigate();
  const [queryParams, setQueryParams] = useSearchParams();
  const [inviter, setInviter] = useState({});
  const [invitee, setInvitee] = useState({});

  // use url params to get inviter's and invitee's user ID and event ID
  const inviterID = 1;
  const inviteeID = 2;
  const eventID = 1;

  useEffect(() => {
    const fetchInviter = async () => {
      const user = await api.getUser(inviterID);
      setInviter(user);
    };
    fetchInviter();

    const fetchInvitee = async () => {
      const user = await api.getUser(inviteeID);
      setInvitee(user);
    };
    fetchInvitee();
  }, []);

  // console.log(user);

  // create variable for url with params
  // maybe we should hash these so they are protected?
  // or do we do an auth check that the id's match with the logged in user?

  const url = `/selections/event=${eventID}/invitee=${invitee.id}`;

  function getStarted() {
    navigate(url);
  }

  return (
    <div>
      <h1 className="invite-header">
        {invitee.name}, you've received an invitation!
      </h1>

      <h2 className="invite-message">
        {inviter.name} wants to make plans with you
      </h2>

      <button className="invite-button" onClick={getStarted}>
        Get started
      </button>
    </div>
  );
}
