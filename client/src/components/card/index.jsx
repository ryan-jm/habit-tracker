import React, { useEffect, useState } from "react";
import json from "../../data";

const Card = (props) => {
  const data = [...json];
  const imgSrc = `/icon-${props.type}.svg`;
  const [hours, setHours] = useState(0);
  const [lastHours, setLastHours] = useState(0);
  const [format, setFormat] = useState("daily");
  const [timeframe, setTimeframe] = useState("Yesterday");

  useEffect(() => {
    data.forEach((entry) => {
      if (entry.title === props.type) {
        console.log(entry);
        setHours(entry.timeframes[format].current);
        setLastHours(entry.timeframes[format].previous);
      }
    });
  }, [format]);

  const rotateFormat = (current) => {
    if (current === "daily") {
      setFormat("weekly");
      setTimeframe("Last Week");
    } else if (current === "weekly") {
      setFormat("monthly");
      setTimeframe("Last Month");
    } else {
      setFormat("daily");
      setTimeframe("Yesterday");
    }
  };

  return (
    <div className="Card" id={props.type}>
      <img src={imgSrc} alt={props.type} />
      <div className="Content">
        <div className="Head">
          <p>{props.type}</p>
          <img
            src="/icon-ellipsis.svg"
            alt="ellipsis"
            width="1rem"
            onClick={() => rotateFormat(format)}
          />
        </div>
        <h1>{hours}hrs</h1>
        <p>
          {timeframe} - {lastHours}hrs
        </p>
      </div>
    </div>
  );
};

export default Card;
