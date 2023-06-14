import React from "react";
import { useState, useEffect, useRef } from "react";
import api from "../services/data.js";

export default function Match() {
  const scrollReference = useRef(null);
  const [plan, setPlan] = useState({});

  const planID = 1;

  useEffect(() => {
    const fetchData = async () => {
      const plan = await api.getPlan(planID);
      setPlan(plan);
    };
    fetchData();
  }, []);

  // console.log(plan);
  // console.log(plan.longDescription);

  // function to scroll the page down to the map
  function readMore() {
    executeScroll();
  }

  const executeScroll = () =>
    scrollReference.current.scrollIntoView({
      inline: "center",
      behavior: "smooth",
      alignToTop: false,
      block: "nearest",
    });

  return (
    <div>
      <div>
        <h1>It's a Date!</h1>

        <img src={plan.imageSrc} />

        <h3>{plan.name}</h3>

        <p>{plan.longDescription}</p>

        <button onClick={readMore}>Read more</button>
      </div>

      <div ref={scrollReference}>
        {plan.keyword ? (
          <div>
            <h2>Check out some place where you could go {plan.name}</h2>
            {/* <div>  ////  MAP   ////   </div> */}
          </div>
        ) : null}
      </div>
    </div>
  );
}
