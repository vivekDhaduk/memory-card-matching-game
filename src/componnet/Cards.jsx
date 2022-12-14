import React, { useState } from "react";
import Card from "./Card";
import "./card.css";

const Cards = () => {
  const [items, setItems] = useState(
    [
      { id: 1, color: "red", stat: "" },
      { id: 1, color: "red", stat: "" },
      { id: 2, color: "yellow", stat: "" },
      { id: 2, color: "yellow", stat: "" },
      { id: 3, color: "green", stat: "" },
      { id: 3, color: "green", stat: "" },
      { id: 4, color: "blue", stat: "" },
      { id: 4, color: "blue", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  const allEqual = (items) => items.every((v) => v["stat"] === "correct");

  return (
    <>
      {allEqual(items) === true ? <h1>You Win !</h1> : <h1>Memory</h1>}
      <div className="container">
        {items.map((item, index) => (
          <Card key={index} item={item} id={index} handleClick={handleClick} />
        ))}
      </div>
      {allEqual(items) === true ? (
        <button
          style={{ marginTop: "20px" }}
          onClick={() => window.location.reload()}
        >
          Restart
        </button>
      ) : null}
    </>
  );
};

export default Cards;

