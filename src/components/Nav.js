import React, { useState, useEffect } from "react";
import "./Nav.css";

import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";

function Nav() {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img src={logo} className="nav__logo" alt="netflix logo" />
        <img src={avatar} className="nav__avatar" alt="netflix avatar" />
      </div>
    </div>
  );
}

export default Nav;
