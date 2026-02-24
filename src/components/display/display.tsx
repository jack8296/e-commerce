import type { JSX } from "react";
import { FaUserCircle } from "react-icons/fa";
//components
import Cards from "../cards/cards";
//types
import type { CardsProps } from "../../types/types";

const Display = (): JSX.Element => {
  const cardsDetails: CardsProps[] = [
    {
      name: "User",
      number: 10,
      icon: <FaUserCircle />,
    },
    {
      name: "Products",
      number: 50,
      icon: <FaUserCircle />,
    },
    {
      name: "Carts",
      number: 20,
      icon: <FaUserCircle />,
    },
  ];

  return (
    <div className="display-container">
      <h2>Dashboard Overview</h2>
      <p>Welcome back!. Here;s whats happening your bussiness today</p>
      <div className="cards-section">
        {cardsDetails.map((data) => {
          return (
            <Cards name={data?.name} number={data?.number} icon={data?.icon} />
          );
        })}
      </div>
    </div>
  );
};

export default Display;
