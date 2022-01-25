import React, { useEffect, useState } from 'react';

const Card = (props) => {
  const [hours, setHours] = useState(0);
  const [lastHours, setLastHours] = useState(0);

  useEffect(() => {}, []);

  return (
    <div className="Card" id={props.type}>
      <div className="Content">
        <p>{props.type}</p>
      </div>
    </div>
  );
};

export default Card;
