import React from "react";
import bgImg from "./Images/bgImg.jpg";
import './Contact.css';

function Contact() {
  return (
    <div>
      <div
        className="mask position-relative top-0 start-0"
        style={{ width: "100%", height: "100vh" }}
      >
        <img
          src={bgImg}
          className="bg-image opacity-25 object-fit-cover"
          alt="bg-img"
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div
        className="container position-absolute top-50 start-50 translate-middle my-3 text-center"
        style={{ color: "white", fontSize: "25px"}}
      >
        <p className="mx-2 slide-in-left">
          <i
            className="fa-solid fa-house mx-2"
            style={{ fontSize: "25px", color: "yellow" }}
          ></i>{" "}
          54, HNB Colony, Lane No.1, Ajabpur Khurd
        </p>
        <p className="mx-5 slide-in-left">Dehradun, Uttarakhand</p>
        <p className="mx-5 slide-in-left">248001</p>
        <p className="mx-2 slide-in-left">
          <i
            className="fa-solid fa-phone mx-2"
            style={{ fontSize: "25px", color: "pink" }}
          ></i>{" "}
          +91-9761382290
        </p>
        <p className="mx-2 slide-in-left">
          <i
            className="fa-solid fa-envelope mx-2"
            style={{ fontSize: "25px", color: "green" }}
          ></i>{" "}
          kanikadob@gmail.com
        </p>

        <div className="d-flex justify-content-center mt-5 mx-3">
          <p>
            <a href="https://www.linkedin.com/in/kanika-dobliyal-aa3b90228/">
              <i
                className="fa-brands fa-linkedin mx-3 slide-in-left"
                style={{ fontSize: "50px", color: "white" }}
              ></i>
            </a>
          </p>
          <p>
            <a href="https://github.com/KanikaDobliyal">
              <i
                className="fa-brands fa-github mx-3 slide-in-left"
                style={{ fontSize: "50px", color: "white" }}
              ></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
