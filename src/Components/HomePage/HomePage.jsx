import React from "react";
import img from "../../assets/photo_2023-11-17_00-26-41.jpg";
import "./HomePage.css";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

const HomePage = () => {
  return (
    <div className="hero d-flex align-items-center" id="hero">
      <div className="w-50 d-flex flex-column justify-content-center align-items-start">
        <span style={{ fontSize: "1.3rem" }}>I'm</span>
        <span
          style={{
            fontSize: "3.5rem",
            width: "100%",
            whiteSpace: "nowrap",
            fontWeight: "bold",
            display: "inline-block",
            borderRight: ".15em solid transperant",
            overflow: "hidden",
            animation: "typing 3.5s steps(40, end) infinite",
          }}
        >
          Abdulrahman Gamal
        </span>
        <span style={{ fontSize: "1.3rem" }}>
          an Egyptian graphic designer, with 8 years of experience in the field
          of graphic design.
        </span>
        <ul className="d-flex gap-3 mt-3">
          <li>
            <Link to="https://www.facebook.com/bedogamal74" target="_blank">
              <FacebookOutlinedIcon
                style={{ color: "inherit !important", fontSize: "2.5rem" }}
              />
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/bedogamal74" target="_blank">
              <XIcon
                style={{ color: "inherit !important", fontSize: "2.5rem" }}
              />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/bedo_designs_/" target="_blank">
              <InstagramIcon
                style={{ color: "inherit !important", fontSize: "2.5rem" }}
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="img-container w-50 d-flex justify-content-end align-items-center">
        <img
          className="img rounded-circle"
          style={{ width: "65%" }}
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default HomePage;
