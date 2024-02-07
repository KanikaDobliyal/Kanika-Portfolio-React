import React from "react";
import aboutGif from "./Images/aboutGif.gif";

function AboutHome(props) {
  return (
    <div>
      <div className="row my-5 mx-3 justify-content-evenly">
        <div className="col-lg-5 mb-4 text-center">
          <img
            src={aboutGif}
            className="img-rounded"
            alt="about-img"
            style={{ width: "auto", height: "250px", borderRadius: "20px" }}
          />
        </div>

        <div className="col-lg-5 mx-3 text-center">
          <h1
            style={{ color: "white", fontSize: "50px", fontFamily: "cursive" }}
          >
            {props.heading}
          </h1>
          <p
            className="mt-4"
            style={{
              color: "white",
              fontSize: "20px",
              fontFamily: "-moz-initial",
            }}
          >
            {props.paragraph}
          </p>
          <div>
            <a
              href="https://drive.google.com/file/d/1UfGBtDm6LkCkkyky6iD5U_5iy_ze_fnp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-info my-2"
              style={{
                color: "black",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Download CV <i className="fa-solid fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHome;
