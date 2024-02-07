import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = (props) => {
  const [scrollY, setScrollY] = useState(0);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const handleLinkClick = () => {
    setIsOffcanvasOpen(false);
  };

  const handleOffcanvasLinkClick = () => {
    setIsOffcanvasOpen(false);
  };

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

  const offcanvasStyle = {
    backgroundColor: "#343a40",
    color: "white",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  const activeLinkStyle = {
    borderBottom: "2px solid white", // Add a bottom border for the active link
    paddingBottom: "2px",
    color: "white",
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg border-body" style={navbarStyle}>
        <div className="container-fluid">
          <Link
            className="navbar-brand text-light"
            to="/"
            onClick={handleLinkClick}
          >
            Portfolio
          </Link>

          {/* Use offcanvasRight only for small-sized screens */}
          <button
            className={`navbar-toggler d-lg-none`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            onClick={toggleOffcanvas}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Regular navbar links for large screens */}
          <div className="collapse navbar-collapse d-lg-block justify-content-center">
            <ul
              className="navbar-nav"
              style={{ fontSize: "20px", fontFamily: "cursive" }}
            >
              <li className="nav-item mx-3">
                <Link
                  className={`nav-link text-light ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                  onClick={handleLinkClick}
                  style={
                    location.pathname === "/" ? activeLinkStyle : linkStyle
                  }
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className={`nav-link text-light ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                  onClick={handleLinkClick}
                  style={
                    location.pathname === "/about" ? activeLinkStyle : linkStyle
                  }
                >
                  About
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className={`nav-link text-light ${
                    location.pathname === "/projects" ? "active" : ""
                  }`}
                  to="/projects"
                  onClick={handleLinkClick}
                  style={
                    location.pathname === "/projects"
                      ? activeLinkStyle
                      : linkStyle
                  }
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className={`nav-link text-light ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  to="/contact"
                  onClick={handleLinkClick}
                  style={
                    location.pathname === "/contact"
                      ? activeLinkStyle
                      : linkStyle
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Offcanvas component for small-sized screens */}
          <div
            className={`offcanvas offcanvas-end ${
              isOffcanvasOpen ? "show" : ""
            } d-lg-none`}
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
            style={offcanvasStyle}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                Portfolio
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={toggleOffcanvas}
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul
                className="navbar-nav"
                style={{ fontSize: "20px", fontFamily: "cursive" }}
              >
                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    to="/"
                    onClick={handleOffcanvasLinkClick}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    to="/about"
                    onClick={handleOffcanvasLinkClick}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    to="/projects"
                    onClick={handleOffcanvasLinkClick}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    to="/contact"
                    onClick={handleOffcanvasLinkClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
