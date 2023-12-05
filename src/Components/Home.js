import React from "react";
// import bgImg from "./Images/bgImg.jpg";
import bgGif from './Images/bgGif.gif';
import profile from "./Images/profile.jpg";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div style={{width: "100%", height: "100%"}}>
      <div className="mask position-relative top-0 start-0" style={{ width: "100%", height: "100vh" }}>
        <img
          src={bgGif}
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
        <div className="container position-absolute top-50 start-50 translate-middle text-center my-4">
          <img
            src={profile}
            className="rounded-circle my-2"
            alt="profile"
            style={{ width: "250px", height: "250px"}}
          />          
          <p
            className="fw-bold text-center my-3 text-capitalize"
            style={{ color: "white", fontSize: "25px"}}
          >
            Hello, I am{" "}
            <span style={{ color: "yellow", fontSize: "25px" }}>
              Kanika Dobliyal.
            </span>
          </p>
          <h1 style={{color: "white", fontWeight: "bold", fontSize: "60px"}}>Web Developer</h1>
          <div>
          <Link to="/about" className="btn btn-warning m-4" style={{color: "black", fontWeight: "bold", textDecoration: "none"}}>About Me</Link>
      
      <a href="https://drive.google.com/file/d/1YZ9ZlQo4yajrdwZS-UaGO1DrZv1mYlG3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-warning m-4" style={{color: "black", fontWeight: "bold", textDecoration: "none"}}>Resume <i className="fa-solid fa-download"></i></a>
          </div>
          </div>
    </div>
  );
};

export default Home;
