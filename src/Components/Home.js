import React, { useEffect } from "react";
import bgGif from "./Images/bgGif.gif";
import profile from "./Images/profile.jpg";
import AboutHome from "./AboutHome";

const Home = (props) => {
  useEffect(() => {
    document.title = "Home | Kanika";
  }, []);

  return (
    <div>
      <div
        className="mask position-relative top-0 start-0"
        style={{ width: "100%", height: "100vh" }}
      >
        <img
          src={bgGif}
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
        <img
          src={profile}
          className="rounded-circle my-2"
          alt="profile"
          style={{ width: "250px", height: "250px" }}
        />
        <h1
          className="fw-bold text-center my-3 animate__animated animate__zoomIn"
          style={{
            color: "white",
            fontSize: "25px",
            fontFamily: "-moz-initial",
          }}
        >
          Hello, I am{" "}
          <span
            style={{
              color: "#3c969e",
              fontSize: "30px",
              fontFamily: "-moz-initial",
            }}
          >
            Kanika Dobliyal.
          </span>
        </h1>
        <p
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "30px",
            fontFamily: "-moz-initial",
          }}
        >
          {props.designation}
        </p>
      </div>
      <AboutHome
        heading="Who am I ?"
        paragraph=" I am proficient in building responsive and dynamic web applications
            using HTML, CSS, and JavaScript. My expertise lies in frontend
            development, where I leverage frameworks like React.js and libraries
            like Bootstrap to create modern and user-friendly interfaces."
      />
    </div>
  );
};

export default Home;
