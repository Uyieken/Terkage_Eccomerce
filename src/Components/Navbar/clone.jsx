// // components/Navbar.js
// import React from "react";
// import { Navbar, Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { FiUser } from "react-icons/fi";
// import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
// import "./Navbar.css";

// const MyNavbar = () => {
//   return (
//     <div>
//       <Navbar bg="light" expand="lg">
//         <Container>
//           <Row className="align-items-center">
//             <Col xs={12} md={4}>
//               <Link to="/">LOGO</Link>
//             </Col>
//             <Col xs={12} md={4}>
//   <div className="search-box">
//     <select name="category">
//       <option value="">All Category</option>
//     </select>
//     <input
//       type="text"
//       name="q"
//       placeholder="Search Products Here..."
//     />
//     <button type="submit">Search</button>
//   </div>
//             </Col>
//             <Col
//               xs={12}
//               md={4}
//               className="d-flex justify-content-center justify-content-md-end"
//             >
//               <div className="user-profile">
//                 <Link to="/profile" className="nav-link">
//                   <FiUser size={30} />
//                 </Link>
//               </div>
//               <div className="favorites">
//                 <Link to="/favorites" className="nav-link">
//                   <AiOutlineHeart size={30} />
//                 </Link>
//               </div>
//               <div className="cart">
//                 <Link to="/orders" className="nav-link">
//                   <span className="span">
//                     <AiOutlineShoppingCart size={30} />
//                     <p>My cart</p>
//                   </span>
//                 </Link>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </Navbar>

//       {/* Second Layer */}
<Navbar bg="light" expand="lg">
  <Container>
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
  </Container>
</Navbar>;
//     </div>
//   );
// };

// export default MyNavbar;
