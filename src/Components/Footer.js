import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div>
      <div
        className="row justify-content-evenly mx-0"
        style={{ color: "white", fontSize: "25px", backgroundColor: "#011d21" }}
      >
        <div className="col-md-3 my-4 text-center">
          <h3 className="mb-3">
            <i className="fa-solid fa-house mx-2"></i>Address
          </h3>
          <p>
            <i className="fa-solid fa-location-dot mx-2"></i>
            {props.address}
          </p>
          <p>
            <i className="fa-solid fa-phone mx-2"></i>: {props.phone}
          </p>
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13779.069335325314!2d77.93521958373803!3d30.3006845821669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092ae7a47bddcb%3A0x6ed4e6e4e20bd79e!2sBadowala%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1692258624561!5m2!1sen!2sin"
            style={{ border: "0", width: "100%", height: "250" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-md-3 my-4">
          <h3 className="mb-3 text-center">Important Links</h3>
          <p className="text-center">
            <Link className="nav-link text-light" to="/">
              Home
            </Link>
            <Link className="nav-link text-light" to="/about">
              About
            </Link>
            <Link className="nav-link text-light" to="/projects">
              Projects
            </Link>
            <Link className="nav-link text-light" to="/contact">
              Contacts
            </Link>
          </p>
        </div>

        <div className="col-md-3 my-4">
          <h3 className="mb-3 text-center">Social Links</h3>
          <div className="d-flex justify-content-evenly">
            <a
              href="https://www.linkedin.com/in/kanika-dobliyal-aa3b90228/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa-brands fa-linkedin mt-2"
                style={{ fontSize: "50px", color: "white" }}
              ></i>
            </a>

            <a
              href="https://github.com/KanikaDobliyal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa-brands fa-github mt-2"
                style={{ fontSize: "50px", color: "white" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
