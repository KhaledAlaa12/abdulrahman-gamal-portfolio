import React from "react";
import NavbarComponent from "../../Components/NavbarComponent";
import Container from "react-bootstrap/esm/Container";
import HomePage from "../../Components/HomePage/HomePage";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Contact from "../../Components/Contact/Contact";

const LandingPage = () => {
  return (
    <Container className="d-grid w-100"
    style={{ gridAutoRows: "0.2fr 1fr 1.5fr 1fr" }}>
      <NavbarComponent />
      <HomePage />
      <Portfolio />
      <Contact />
    </Container>
  );
};

export default LandingPage;
