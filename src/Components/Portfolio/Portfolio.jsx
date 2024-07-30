import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import img1 from "../../assets/448994118_1137762390886514_3812724029900439029_n.jpg";

const Portfolio = () => {
  return (
    <>
      <div className="banner" id="portfolio">
        <h1 className="banner-text">Portfolio</h1>
        <div className="slider" style={{ "--quantity": "10" }}>
          <div className="item" style={{ "--position": "1" }}>
            <img src={img1} alt="" />
          </div>
          <div className="item" style={{ "--position": "2" }}>
            <img src={img1} alt="" />
          </div>
          <div className="item" style={{ "--position": "3" }}>
            <img src={img1} alt="" />
          </div>
          <div className="item" style={{ "--position": "4" }}>
            <img src={img1} alt="" />
          </div>
          <div className="item" style={{ "--position": "5" }}>
            <img src={img1} alt="" />
          </div>
          <div className="item" style={{ "--position": "6" }}>
            <img src={img1} alt="" />
          </div>
          <div className="item" style={{ "--position": "7" }}>
            <img src={img1} alt="" />
          </div>
          <div className="item" style={{ "--position": "8" }}>
            <img src={img1} alt="" />
          </div>
          <div className="item" style={{ "--position": "9" }}>
            <img src={img1} alt="" />
          </div>
          <div className="item" style={{ "--position": "10" }}>
            <img src={img1} alt="" />
          </div>
        </div>
        <Link to="https://www.behance.net/bedogamal" target="_blank">
          <button className="view-behance">View More</button>
        </Link>
      </div>

      {/* <div className="work-footer d-flex position-relative justify-content-between align-items-center">
          <Link to="/contact">
            <ArrowCircleDownIcon style={{ fontSize: "2.5rem" }} />
          </Link>

          <Link to="/">
            <ArrowCircleUpIcon style={{ fontSize: "2.5rem" }} />
          </Link>
        </div> */}
    </>
  );
};

export default Portfolio;
