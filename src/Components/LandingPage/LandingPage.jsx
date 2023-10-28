import React from "react";
import Card from "./Card/Card";
import { BiSolidTruck } from "react-icons/bi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { IoReturnDownBackOutline } from "react-icons/io5";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="lp-div">
      <div className="first-div">
        <button>SHOP SEAMLESSLY</button>
        <h1> SHOP ON</h1>
        <h1 className="blu">PRODUCTS</h1>
        <h5 className="h5-text">30% of in store.</h5>
        <br />
        <h5 className="underline">SHOP NOW</h5>
        <br />
        <div className="sc-div">
          <Card icon={<BiSolidTruck />} title="Free Shipping" />
          <Card icon={<AiFillSafetyCertificate />} title="Free Shipping" />
          <Card icon={<IoCallOutline />} title="Free Shipping" />
          <Card icon={<IoReturnDownBackOutline />} title="Free Shipping" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
