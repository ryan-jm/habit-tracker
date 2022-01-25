import React from 'react';

const Wrapper = (props) => {
  return (
    <div className="Wrapper">
      {props.children[0]}
      <div className="Habits">{props.children.slice(1)}</div>
    </div>
  );
};

export default Wrapper;
