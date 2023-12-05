import React from 'react';
import html from "./Images/html.png";
import css from "./Images/css.png";
import javascript from "./Images/javascript.png";
import react from "./Images/react.png";
import bootstrap from "./Images/bootstrap.jpeg";
import git from "./Images/git.png";
import github from "./Images/github.png";
import bgAbout from './Images/bgAbout.webp';

function About() {
  return (
    <div>
      <div className="mask position-relative top-0 start-0" style={{ width: "100%", height: "100vh" }}>
        <img
          src={bgAbout}
          className="bg-image opacity-25 object-fit-cover"
          alt="bg-img"
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      </div>

    <div className='container position-absolute top-50 start-50 translate-middle mt-5'>
    <div>
          <h1 className="mt-3 mx-4" style={{ color: "white", fontSize: "40px" }}>About Me</h1>
          <p className="mt-4 mx-4" style={{ color: "white", fontSize: "20px" }}>
            I am proficient in building responsive and dynamic web applications
            using HTML, CSS, and JavaScript. My expertise lies in <span style={{color: "yellow", fontWeight: "bold"}}>frontend
            development</span>, where I leverage frameworks like React.js and libraries
            like Bootstrap to create modern and user-friendly interfaces.
          </p>

          <div className="container my-5">
            <h1 className="my-2 mx-3" style={{ color: "white", fontSize: "40px"}}>My skills</h1>
            <div className="row d-flex justify-content-lg-evenly text-center mt-4">
            <div className="col my-3 mx-2">
              <img
                src={html}
                alt="html-img"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div className="col my-3  mx-2">
              <img
                src={css}
                alt="css-img"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div className="col my-3  mx-2">
              <img
                src={javascript}
                alt="javascript-img"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div className="col my-3  mx-2">
              <img
                src={react}
                alt="react-img"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div className="col my-3  mx-2">
              <img
                src={bootstrap}
                alt="bootstrap-img"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div className="col my-3  mx-2">
              <img
                src={git}
                alt="git-img"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div className="col my-3  mx-2">
              <img
                src={github}
                alt="github-img"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default About
