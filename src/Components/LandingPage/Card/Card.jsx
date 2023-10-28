import React from "react";
import { BiSolidTruck } from "react-icons/bi";
import "./Card.css";

const Card = ({ icon, title }) => {
  return (
    <div className="card-div">
      {icon}
      <h5>{title}</h5>
    </div>
  );
};

export default Card;
