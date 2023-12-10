import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import Rating from "@mui/material/Rating";
import "./UCards.css";

const UCards = ({ img, itemName, itemCaption, itemPrice, value }) => {
  return (
    <div className="ucard-div">
      <div className="main-content">
        <div className="heart-icon">
          <AiOutlineHeart size={30} />
        </div>
        <img src={img} alt="" />
        <div className="ucard-description">
          <h5>{itemName}</h5>
          <h6>{itemCaption}</h6>
        </div>
        <div className="price">
          <div className="price-description">
            <h5>{itemPrice}</h5>
            <Rating name="read-only size-small" value={value} readOnly />
          </div>
          <div className="add">
            <IoIosAddCircle size={35} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UCards;
