import React from "react";
import NavbarComponent from "../NavbarComponent";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    if (
      e.target.message.value !== "" ||
      e.target.fullName.value !== "" ||
      e.target.email.value !== ""
    ) {
      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      ).then((e) => e.status === 200 && toast("The email was sent successfully"))
    } else {
      toast("Missing Data");
    }
  };
  return (
      <div className="d-flex align-items-center flex-column" id="contact">
        <ToastContainer />
        <h1 className="mb-5">Contact Me</h1>
        <form className="d-flex flex-column w-75" onSubmit={sendEmail}>
          <label htmlFor="InputGroup1">Full Name</label>
          <input
            type="fullName"
            name="fullName"
            className="form-control mt-2 mb-4"
            id="InputGroup1"
            placeholder="Full Name"
          />
          <label htmlFor="Input">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control mt-2 mb-4"
            id="Input"
            placeholder="name@example.com"
          />
          <label htmlFor="Textarea2">Message</label>
          <textarea
            className="form-control mt-2 mb-4"
            name="message"
            placeholder="Leave a comment here"
            id="Textarea2"
            style={{ height: "150px" }}
          ></textarea>
          <button className="emailBtn align-self-center mb-4">
            Send Email
          </button>
        </form>
      </div>
  );
};

export default Contact;
