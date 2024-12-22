import React from "react";
import "../assets/styles/Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <a href="">About</a>
        <a href="">Contact US</a>
        <Link
          to="https://www.linkedin.com/in/jashwanth-sai-tandamalla-0725js/"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <Link to="https://github.com/Jashwanth0725" target="_blank">
          <GitHubIcon />
        </Link>
      </div>
      <div className="lastLogo">
        <img src="/images/FooterLogo.png" alt=" button logo"></img>
        <p>@Copyright 2003</p>
      </div>
    </div>
  );
}

export default Footer;
