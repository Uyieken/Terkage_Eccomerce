// components/Navbar.js
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FiUser } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { FaWindowClose } from "react-icons/fa";
import "./Navbar.css";

const MyNavbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="nav-div">
      <div className="nav-logo">
        <h2>LOGO</h2>
      </div>

      <ul className="navbar-links">
        <li>Home</li>
        <li>Shops</li>
        <li>Blogs</li>
        <li>FAQs</li>
        <li>Contact</li>
      </ul>

      <div className="signin-div">
        <Link>
          <p>Login</p>
        </Link>
        <Link>
          <p>Sign Up</p>
        </Link>
      </div>

      <div className="small-navbar">
        <IoMenu color="#17bbdb" fontSize={27} onClick={() => setToggle(true)} />

        {toggle && (
          <div className="small-navbar-overlay">
            <FaWindowClose
              className="overlay__close"
              onClick={() => setToggle(false)}
            />
            <ul className="small-navbar-overlay-links">
              <li>Home</li>
              <li>Shops</li>
              <li>Blogs</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MyNavbar;
