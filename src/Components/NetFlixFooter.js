import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const footer = {
  height: "40vh",
  width: "100wh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  flexDirection: "column",
};

function NetFlixFooter() {
  return (
    <div style={footer}>
      <h1>
        This Netflix clone is developed by <br />
        <strong>"Shivam choudhary"</strong>
      </h1>

      <div
        style={{
          width: "60%",
          marginTop: "50px",
          fontSize: "30px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <a href="https://github.com/Shivam-dev925">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}

export default NetFlixFooter;
