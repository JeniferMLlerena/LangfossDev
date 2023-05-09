import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <SlSocialInstagram />
        <SlSocialTwitter />
        <SlSocialFacebook />
        <SlSocialLinkedin />
      </div>
      <p> &copy; 2023 jenwebsolutions.com</p>
    </div>
  );
}

export default Footer;