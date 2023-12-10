import React from "react";
import { BiSolidTruck } from "react-icons/bi";
import "./Card.css";

const Card = ({ icon, title }) => {
  return (
    <div className="card-div">
      {icon}
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
