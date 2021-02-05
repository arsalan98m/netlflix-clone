import React, { useState, useEffect } from "react";
import "./Nav.css";

import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { useHistory } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);
  const history = useHistory();

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
        <img
          src={logo}
          onClick={() => history.push("/")}
          className="nav__logo"
          alt="netflix logo"
        />
        <img
          src={avatar}
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          alt="netflix avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
