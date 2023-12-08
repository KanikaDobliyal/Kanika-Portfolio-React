import React, { useEffect } from "react";
import html from "./Images/html.png";
import css from "./Images/css.png";
import javascript from "./Images/javascript.png";
import react from "./Images/react.png";
import bootstrap from "./Images/bootstrap.jpeg";
import git from "./Images/git.png";
import github from "./Images/github.png";
import AboutHome from "./AboutHome";
import HeroImg from "./HeroImg";

function About(props) {
  useEffect(() => {
    document.title = "About | Kanika";
  }, []);

  const skillsIcon = {
    width: "70px",
    height: "70px",
  };

  return (
    <div>
      <HeroImg heading="About Me" />
      <AboutHome
        heading="Who am I ?"
        paragraph=" I am proficient in building responsive and dynamic web applications
            using HTML, CSS, and JavaScript. My expertise lies in frontend
            development, where I leverage frameworks like React.js and libraries
            like Bootstrap to create modern and user-friendly interfaces."
      />

      <div className="container my-5 text-center">
        <h1 className="my-3 mx-3" style={{ color: "white", fontSize: "50px" }}>
          {props.heading}
        </h1>
        <div className="row d-flex justify-content-lg-evenly text-center mt-4">
          <div className="col-3 my-4 mx-3">
            <a
              href="https://en.wikipedia.org/wiki/HTML5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={html} alt="html-img" style={skillsIcon} />
            </a>
          </div>
          <div className="col-3 my-4 mx-3">
            <a
              href="https://en.wikipedia.org/wiki/CSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={css} alt="css-img" style={skillsIcon} />
            </a>
          </div>
          <div className="col-3 my-4 mx-3">
            <a
              href="https://en.wikipedia.org/wiki/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={javascript} alt="javascript-img" style={skillsIcon} />
            </a>
          </div>
          <div className="col-3 my-4 mx-3">
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={react} alt="react-img" style={skillsIcon} />
            </a>
          </div>
          <div className="col-3 my-4 mx-3">
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={bootstrap} alt="bootstrap-img" style={skillsIcon} />
            </a>
          </div>
          <div className="col-3 my-4 mx-3">
            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={git} alt="git-img" style={skillsIcon} />
            </a>
          </div>
          <div className="col-3 my-4 mx-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github-img" style={skillsIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
