import React, { useState, useEffect } from "react";

import "./Navbar.css";

function NetflixNavbar() {
  const [Show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return ()=>{
      window.addEventListener("scroll")
    }
  }, []);

  return (
    <>
      <nav className={`nav ${Show&& "activeNav"} `}>
        <img
          className="BrandName"
          src="images/netflix.png"
          alt="netflix logo"
        />
        <img className="avatar" src="images/avatar.webp" alt="netflix avatar" />
      </nav>
    </>
  );
}

export default NetflixNavbar;
