import React from 'react'
import Work from './Work';
import projectData from './workData';
// import bgProjects from './Images/bgProjects.jpeg';

function Projects() {
  return (
    <div>
      {/* <div className="mask position-relative top-0 start-0" style={{ width: "100%", height: "auto" }}>
        <img
          src={bgProjects}
          className="bg-image opacity-50 object-fit-cover"
          alt="bg-img"
          style={{
            width: "100%",
            height: "auto",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      </div> */}
{/* <div className="container position-absolute top-0 start-50 translate-middle text-center" style={{marginTop: "250px"}}>
  <h1 style={{color: "white", fontWeight: "bold", fontSize: "50px", fontFamily: "cursive"}}>Projects</h1>
  <p style={{color: "white", fontWeight: "bold", fontSize: "30px"}}>Here are some of my works.</p>
</div> */}
<h1 className='text-center mb-4' style={{marginTop: "130px", color: "white", fontWeight: "bold", fontSize: "50px", fontFamily: "cursive"}}>Projects</h1>
        
      <div className="container">
          <div className="row">
            {projectData.map((element) => {
              return (
                <div className="col-md-4" key={element.imgsrc}>
                  <Work
                  imgsrc={element.imgsrc}
                    title={element.title}
                    description={element.description}
                    view={element.view}
                  />
                </div>
              );
            })}
          </div>
        </div>
    </div>
  )
}

export default Projects
