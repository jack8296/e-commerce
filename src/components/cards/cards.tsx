import React from "react";
//types
import type { CardsProps } from "../../types/types";

const Cards = ({ name, number, icon }: CardsProps) => {
  return (
    <div className="card-container">
      <div className="card-details">
        <div className="card-details__title">Total {name}</div>
        <div className="card-details__num">{number}</div>
      </div>
      <div className="card-icon">{icon}</div>
    </div>
  );
};

export default Cards;
