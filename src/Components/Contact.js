import React, { useEffect } from "react";
import HeroImg from "./HeroImg";
import contactBg from "./Images/contactBg.jpg";

function Contact() {
  useEffect(() => {
    document.title = "Contact | Kanika";
  }, []);

  const formStyle = {
    position: "relative",
  };

  const backgroundLayerStyle = {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `url(${contactBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: 0.5,
    zIndex: -1, // Place the background layer behind the form content
  };

  return (
    <div>
      <HeroImg heading="Contact" paragraph="Let's have a chat." />
      <form
        className="container my-4 justify-content-center text-light p-3"
        style={formStyle}
      >
        <div style={backgroundLayerStyle}></div>
        <div className="my-2 mx-auto col-lg-6 col-md-8 col-12">
          <label
            htmlFor="exampleInputText1"
            className="form-label fs-4 fw-semibold"
          >
            Full Name
          </label>
          <input type="text" className="form-control" id="exampleInputText1" />
        </div>
        <div className="my-2 mx-auto col-lg-6 col-md-8 col-12">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label fs-4 fw-semibold"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="my-2 mx-auto col-lg-6 col-md-8 col-12">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label fs-4 fw-semibold"
          >
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-success my-4 p-2 fs-4 fw-semibold"
            style={{ width: "150px" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
