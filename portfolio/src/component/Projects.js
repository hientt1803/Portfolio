import { React } from "react";
import { Link } from "react-router-dom";
import eCommerceImage from "../assets/image/e-commerce.jpg";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      path: "/project",
      background:
        "https://images.pexels.com/photos/1848731/pexels-photo-1848731.jpeg?auto=compress&cs=tinysrgb&w=640",
      date: "12-2023",
      title: "Education System Manager",
    },
    {
      id: 2,
      path: "/project",
      background: eCommerceImage,
      date: "08-2023",
      title: "E-Commerce Website",
    },
  ];

  return (
    <section className="section" id="projects">
      <h6 className="hidden-element text-start" style={{ color: "#9e9e9e" }}>
        WEB DEVELOPMENT
      </h6>
      <h1 className="hidden-element fw-bolder display-2 mb-5 text-start delay-200">
        Personal Projects
      </h1>
      <div className="projects pt-5">
        {/* Item */}
        {projects.map((project) => (
          <Link
            key={project.id}
            to={{ pathname: `project/${project.id}` }}
            className="hidden-element project-item text-decoration-none"
            style={{ background: `url(${project.background}) no-repeat` }}
          >
            <div className="item-content m-5 d-flex flex-column ">
              <span className="fs-4" style={{ color: "#9e9e9e" }}>
                {project.date}
              </span>
              <strong className="fs-1">{project.title}</strong>
            </div>
            <div className="overlay-project">
              <div className="item-content-overlay m-5 d-flex flex-column text-white">
                <span className="fs-4" style={{ color: "#9e9e9e" }}>
                  {project.date}
                </span>
                <strong className="fs-1 mb-2">{project.title}</strong>
                <Link
                  to={{ pathname: `project/${project.id}` }}
                  className="text-white delay-200"
                >
                  view project
                  <i className="fa-solid fa-arrow-right-long ms-2"></i>
                </Link>
              </div>
            </div>
          </Link>
        ))}

        {/* <Link
          to={"/project"}
          className="hidden-element project-item text-decoration-none"
          style={{ background: `url(${eCommerceImage})` }}
        >
          <div className="item-content m-5 d-flex flex-column ">
            <span className="fs-4" style={{ color: "#9e9e9e" }}>
              08-2023
            </span>
            <strong className="fs-1">E-Commerce Website</strong>
          </div>
          <div className="overlay-project">
            <div className="item-content-overlay m-5 d-flex flex-column text-white">
              <span className="fs-4" style={{ color: "#9e9e9e" }}>
                08-2023
              </span>
              <strong className="fs-1 mb-2">E-Commerce Website</strong>
              <Link to={"/project"} className="text-white delay-200">
                view project{" "}
                <i className="fa-solid fa-arrow-right-long ms-2"></i>
              </Link>
            </div>
          </div>
        </Link> */}
        {/* Item */}
        {/* <Link
          to={"/project"}
          className="hidden-element project-item text-decoration-none"
          style={{ background: `url(${videoPlatform})` }}
        >
          <div className="item-content m-5 d-flex flex-column ">
            <span className="fs-4" style={{ color: "#9e9e9e" }}>
              12-2022
            </span>
            <strong className="fs-1">Video platform Website</strong>
          </div>
          <div className="overlay-project">
            <div className="item-content-overlay m-5 d-flex flex-column text-white">
              <span className="fs-4" style={{ color: "#9e9e9e" }}>
                12-2022
              </span>
              <strong className="fs-1 mb-2">Video platform Website</strong>
              <Link to={"/project"} className="text-white delay-200">
                view project <i className="fa-solid fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </Link> */}
      </div>
    </section>
  );
};

export default ProjectSection;
