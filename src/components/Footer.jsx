import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {

  return (
    <>
      <div className="footer-container">
        <Link to="contact">Contact Us</Link>
        <Link to="about">
          About
        </Link>
        <div className="footer-links">
          <h5>Follow Us</h5>
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </>
  );
}
