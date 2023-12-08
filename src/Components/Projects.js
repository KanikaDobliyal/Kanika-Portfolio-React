import React, { useEffect } from "react";
import Work from "./Work";
import projectData from "./workData";
import HeroImg from "./HeroImg";

function Projects(props) {
  useEffect(() => {
    document.title = "Projects | Kanika";
  }, []);

  return (
    <div>
      <HeroImg heading="Projects" paragraph="Here are some of my works." />

      <div className="container mb-5">
        <h1 className="mt-5 text-center text-light">{props.heading}</h1>
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
  );
}

export default Projects;
