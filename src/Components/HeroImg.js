import React from "react";
import heroImg from "./Images/heroImg.jpeg";

function HeroImg(props) {
  return (
    <div>
      <div
        className="mask position-relative top-0 start-0"
        style={{ width: "100%", height: "70vh" }}
      >
        <img
          src={heroImg}
          className="bg-image opacity-50 object-fit-cover"
          alt="bg-img"
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className="container position-absolute top-50 start-50 translate-middle text-center">
        <h1
          style={{
            color: "white",
            fontSize: "50px",
            fontWeight: "bold",
            fontFamily: "cursive",
          }}
        >
          {props.heading}
        </h1>
        <p
          className="mt-4"
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "cursive",
          }}
        >
          {props.paragraph}
        </p>
      </div>
    </div>
  );
}

export default HeroImg;
