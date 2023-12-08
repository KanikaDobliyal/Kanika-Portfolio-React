import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrollY > 5 ? "#095057" : "transparent",
    color: scrollY > 5 ? "black" : "white",
    transition: "background-color 0.3s ease-in-out",
    padding: "15px",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1,
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg border-body" style={navbarStyle}>
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            Portfolio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item mx-3">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link text-light" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link text-light" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link text-light" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
