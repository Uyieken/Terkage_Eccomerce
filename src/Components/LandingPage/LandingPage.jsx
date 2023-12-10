import { React, useEffect, useState } from "react";
import Card from "./Card/Card";
import UCards from "../UCards/UCards";
import { Link } from "react-router-dom";
import { LiaShippingFastSolid } from "react-icons/lia";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { TbLock } from "react-icons/tb";
import { CgArrowLongRight } from "react-icons/cg";
import { PiArrowUUpLeftDuotone } from "react-icons/pi";

import { axiosInstance } from "../../business_logic/auth-logic";

import Pagination from "@mui/material/Pagination";
import woman from "../../Assets/woman.png";
import img1 from "../../Assets/1.png";
import img2 from "../../Assets/2.png";
import img3 from "../../Assets/3.png";
import img4 from "../../Assets/4.png";
import img5 from "../../Assets/5.png";
import img6 from "../../Assets/6.png";

import "./LandingPage.css";

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(1); // State to manage current page
  const [products, setProducts] = useState([]);
  const[newestProducts,setNewestProducts]=useState([])

  const itemsPerPage = 8;
  const imgData = [img1, img2, img3, img4, img5, img6];

  // Calculate the indexes of items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = imgData.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("store/product/");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchNewestProducts = async () => {
      try {
        const response = await axiosInstance.get("store/newest-product/");
        setNewestProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewestProducts();
  }, []);
  
  // Handle page change
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };
  // function ProductDetail({ slug }) {
    
    
  return (
    <div className="lp-div">
      <div className="divided">
        <div className="first-div">
          <div className="fd-text">
            <h1> Shop Seamlessly on Products that you actually like</h1>
            <h2>
              We offer our best products of over 5,000.... our goal is you
              comfort
            </h2>
            <span className="span">
              <h5 className="h5-text">30% of in store...Shop Now</h5>
              <button className="orange-btn">
                <CgArrowLongRight />
              </button>
            </span>

            <br />
          </div>
          <br />
        </div>
        <div className="backg-pic">
          <img src={woman} alt="woman" />
        </div>
      </div>

      <div className="sc-div">
        <Card icon={<LiaShippingFastSolid />} title="Free Shipping" />
        <Card icon={<PiArrowUUpLeftDuotone />} title="Free Return" />
        <Card icon={<BiSupport />} title="Support 24/7" />
        <Card icon={<TbLock />} title="Secured Payments" />
      </div>
      <div className="grey-div">
        <div className="lp-pagination">
          <h5>FLASH SALES</h5>
          {/* <Pagination
            count={Math.ceil(imgData.length / itemsPerPage)} // Calculate total number of pages
            page={currentPage}
            color="primary"
            onChange={handlePageChange}
          /> */}
          <Pagination count={10} color="primary" />
          <Link>
            <p>View All</p>
          </Link>
        </div>
        <div className="center-div">
          
          <div className="UCard-div">
            {products.map((product) => (
              
              <UCards
              key={product.slug}  
              img={product.image}
              itemCaption={
                product.caption
              }
              itemName={product.name}
              itemPrice={`₦${ product.price}`}
              value={5}
              />
              ))}
            {/* <UCards
            img={img2}
            itemCaption={
              "The world and star platinum are the same type of stand"
            }
            itemName={"Normal"}
            itemPrice={19000}
            value={5}
            />
            
            <UCards
            img={img4}
            itemCaption={
              "The world and star platinum are the same type of stand"
            }
              itemName={"Normal"}
              itemPrice={19000}
              value={5}
            />
            <UCards
              img={img5}
              itemCaption={
                "The world and star platinum are the same type of stand"
              }
              itemName={"Normal"}
              itemPrice={19000}
              value={5}
              />
              <UCards
              img={img5}
              itemCaption={
                "The world and star platinum are the same type of stand"
              }
              itemName={"Normal"}
              itemPrice={19000}
              value={5}
              />
              <UCards
              img={img6}
              itemCaption={
                "The world and star platinum are the same type of stand"
              }
              itemName={"Normal"}
              itemPrice={19000}
              value={5}
            /> */}
          </div>
            
        </div>
      </div>
      <div className="filter">
        <div className="h1-div">
          <h1>Shop By Filter</h1>
        </div>
        <div className="filter-options">
          <h3>New In Store</h3>
          <h3>Best Seller</h3>
          <h3>Top Rated</h3>
          <h3>Top Seller</h3>
        </div>
        <div className="center-div1">
          <div className="filter-cards">
            {newestProducts.map((product) => (
              
              <UCards
              key={product.slug}
              img={product.image}
              itemCaption={product.caption}
              itemName={product.name}
              itemPrice={`₦${ product.price}`}
              value={5}
              />
              ))}
            <UCards
              img={img4}
              itemCaption={
                "The world and star platinum are the same type of stand"
              }
              itemName={"Normal"}
              itemPrice={19000}
              value={5}
            />
            <UCards
              img={img5}
              itemCaption={
                "The world and star platinum are the same type of stand"
              }
              itemName={"Normal"}
              itemPrice={19000}
              value={5}
            />
            <UCards
              img={img4}
              itemCaption={
                "The world and star platinum are the same type of stand"
              }
              itemName={"Normal"}
              itemPrice={19000}
              value={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
