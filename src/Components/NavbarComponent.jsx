import Navbar from "react-bootstrap/Navbar";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useEffect, useState } from "react";
import logoW from "../assets/Bedo-Logo.png";
import logoB from "../assets/Bedo-Logo2.png";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "dark"
  );

  function switchMode() {
    if (mode === "dark") {
      document.querySelector("body").style.backgroundImage =
        "radial-gradient(at 40% top, #121212 1%, #121212 99%)";
      document.querySelector("body").style.color = "white";
      document
        .querySelector(":root")
        .style.setProperty("--slide-color", "white");
    } else {
      document.querySelector("body").style.backgroundImage =
        "radial-gradient(at 40% top, #ffffff 1%, #ffffff 99%)";
      document.querySelector("body").style.color = "black";
      document
        .querySelector(":root")
        .style.setProperty("--slide-color", "black");
    }
  }

  const scrollToSection = (target) => {
    window.scrollTo({
      top: document.querySelector(target).offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    switchMode();
    localStorage.setItem("mode", mode);
  });

  return (
    <nav
      className="navbar "
      style={{ color: "inherit !important" }}
    >
      <div className="container">
        {mode === "dark" ? (
          <img style={{ width: "3rem" }} src={logoW} alt="" />
        ) : (
          <img style={{ width: "3rem" }} src={logoB} alt="" />
        )}

        <ul className="d-flex gap-4">
          <li
            style={{ cursor: "pointer" }}
            onClick={() => {
              scrollToSection("#portfolio");
            }}
          >
            Portfolio
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => {
              scrollToSection("#contact");
            }}
          >
            Contact Me
          </li>
          <li className="nav-item align-self-center">
            {mode === "dark" ? (
              <LightModeIcon
                onClick={() => {
                  setMode("light");
                }}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <DarkModeIcon
                onClick={() => {
                  setMode("dark");
                }}
                style={{ cursor: "pointer" }}
              />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarComponent;
