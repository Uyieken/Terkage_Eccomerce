import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-div">
      <div className="logo-div">
        <h3 className="ff">Footer</h3>
      </div>

      <div className="rectangle"></div>
      <div className="useful-links">
        <ul>
          <h5>Usesful Links</h5>
          <li>Useful links</li>
          <li>Useful links</li>
          <li>Useful links</li>
        </ul>
      </div>
      <div className="rectangle"></div>
      <div className="newsletter">
        <h5>Suscribe To Our Newsletter</h5>
        <form action="/search" method="get">
          <div class="news-search-box">
            <input
              className="f-input"
              type="text"
              name="q"
              placeholder="Enter your email"
            />
            <button className="f-button" type="submit">
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
      <div className="rectangle"></div>
      <div className="social-media">
        <h5>Social media</h5>
        <div className="fs-buttons">
          <Link>
            <FaFacebook color="white" size={25} />
          </Link>
          <Link>
            <FaInstagramSquare color="white" size={25} />
          </Link>
          <Link>
            <AiFillTwitterCircle color="white" size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
