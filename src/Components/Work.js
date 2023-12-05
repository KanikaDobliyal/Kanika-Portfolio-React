import React from 'react';
import { Link } from 'react-router-dom';

function Work(props) {
    let { imgsrc, title, description, view } = props;
  return (
    <div className="my-3 mx-3" >
      <div className="card">
  <img src={imgsrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <Link to={view} className="btn btn-dark">View Project</Link>
  </div>
</div>
    </div>
  )
}

export default Work
