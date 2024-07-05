import React from "react";
import NavbarComponent from "../../Components/NavbarComponent";
import Container from "react-bootstrap/esm/Container";
import img from "../../assets/photo_2023-11-17_00-26-41.jpg";
import "./HomePage.css";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

const HomePage = () => {
  return (
    <>
      <Container
        className="d-grid"
        style={{ height: "100vh", gridAutoRows: "10% 75% 15%" }}
      >
        <NavbarComponent />
        <div className="hero d-flex align-items-center">
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
              an Egyptian graphic designer, with 7 years of experience in the
              field of graphic design.
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
                <Link
                  to="https://www.instagram.com/bedo_designs_/"
                  target="_blank"
                >
                  <InstagramIcon
                    style={{ color: "inherit !important", fontSize: "2.5rem" }}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-50 d-flex justify-content-center align-items-center">
            <img
              className="img rounded-circle"
              style={{ width: "65%" }}
              src={img}
              alt=""
            />
          </div>
        </div>
        <div className="home-footer d-flex align-items-center position-relative justify-content-start">
          <Link to="/portfolio">
            <ArrowCircleDownIcon style={{ fontSize: "2.5rem" }} />
          </Link>
        </div>
      </Container>
      {/* <motion.div
                className="slide slide-in d-flex justify-content-center align-items-center"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                {
                    localStorage.getItem("mode") === "light" ? (
                        <img src={LogoB} alt="" />
                    )
                        :
                        (
                            <img src={LogoW} alt="" />
                        )
                }
            </motion.div>
            <motion.div
                className="slide slide-out d-flex justify-content-center align-items-center"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                {
                    localStorage.getItem("mode") === "light" ? (
                        <img src={LogoB} alt="" />
                    )
                        :
                        (
                            <img src={LogoW} alt="" />
                        )
                }
            </motion.div> */}
    </>
  );
};

export default HomePage;
