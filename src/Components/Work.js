import React from "react";
import "./Work.css";

function Work(props) {
  let { imgsrc, title, description, view } = props;
  return (
    <div className="my-3 mx-3">
      <div className="card" style={{ cursor: "pointer" }}>
        <img src={imgsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={view}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
