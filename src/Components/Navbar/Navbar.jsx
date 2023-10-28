// components/Navbar.js
import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";

const MyNavbar = () => {
  return (
    <div className="nav-div">
      {/* First Layer */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">LOGO</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <form action="/search" method="get">
              <div class="search-box">
                <select className="nav-select" name="category">
                  <option value="">All Category</option>
                </select>
                <input
                  type="text"
                  name="q"
                  className="nav-input"
                  placeholder="Search Products Here..."
                />
                <button className="nav-button" type="submit">
                  Search
                </button>
              </div>
            </form>

            <Link to="/profile" className="nav-link">
              <FiUser size={30} />
            </Link>

            <Link to="/favorites" className="nav-link">
              <AiOutlineHeart size={30} />
            </Link>

            <Link to="/orders" className="nav-link">
              <AiOutlineShoppingCart size={30} />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Second Layer */}
      <Navbar bg="light" expand="lg">
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/shops" className="nav-link">
            Shops
          </Link>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <Link to="/faqs" className="nav-link">
            FAQs
          </Link>
          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
