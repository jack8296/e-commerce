//types
import type { CardsProps } from "../../types/types";
//utilities
import clsx from "clsx";

const Cards = ({ name, number, icon }: CardsProps) => {
  const combineClassName = clsx("card-container", name.toLocaleLowerCase());
  return (
    <div className={combineClassName}>
      <div className="card-details">
        <div className="card-details__title">Total {name}</div>
        <div className="card-details__num">{number}</div>
      </div>
      <div className="card-icon">{icon}</div>
    </div>
  );
};

export default Cards;
