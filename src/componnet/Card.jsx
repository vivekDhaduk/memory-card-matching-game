import React from "react";
import './card.css'

const Card = ({ item, id, handleClick }) => {
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <div className="card-container">
      <div className={"card" + itemClass} onClick={() => handleClick(id)}>
        <div className="color-card" style={{ backgroundColor: item.color }}></div>
      </div>
    </div>
  );
};

export default Card;

