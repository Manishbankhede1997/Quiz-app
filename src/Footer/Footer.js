import "./Footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div
      className="footer"
      style={{ textAlign: "center", marginBottom: "10px" }}
    >
      made by the-bankhede ♥
      <FontAwesomeIcon className="icon" icon={faHeart} />
    </div>
  );
}

export default Footer;
