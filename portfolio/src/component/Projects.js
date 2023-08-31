import { React } from "react";
import eCommerceImage from "../image/e-commerce.jpg";
import videoPlatform from "../image/video-platform.jpg";

const ProjectSection = ({ isVisible }) => {
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
        <a
          href="#home"
          className="hidden-element project-item text-decoration-none"
          style={{ background: `url(${eCommerceImage})` }}
        >
          <div className="item-content m-5 d-flex flex-column ">
            <span className="fs-4" style={{ color: "#9e9e9e" }}>
              08-2023
            </span>
            <strong className="fs-1">E-Commerce Website</strong>
          </div>
          {/* Over lay */}
          <div className="overlay-project">
            <div className="item-content-overlay m-5 d-flex flex-column text-white">
              <span className="fs-4" style={{ color: "#9e9e9e" }}>
                08-2023
              </span>
              <strong className="fs-1 mb-2">E-Commerce Website</strong>
              <a href="#" className="text-white delay-200">
                view project{" "}
                <i className="fa-solid fa-arrow-right-long ms-2"></i>
              </a>
            </div>
          </div>
        </a>
        {/* Item */}
        <a
          href="#home"
          className="hidden-element project-item text-decoration-none"
          style={{ background: `url(${videoPlatform})` }}
        >
          <div className="item-content m-5 d-flex flex-column ">
            <span className="fs-4" style={{ color: "#9e9e9e" }}>
              12-2022
            </span>
            <strong className="fs-1">Video platform Website</strong>
          </div>
          {/* Over lay */}
          <div className="overlay-project">
            <div className="item-content-overlay m-5 d-flex flex-column text-white">
              <span className="fs-4" style={{ color: "#9e9e9e" }}>
                12-2022
              </span>
              <strong className="fs-1 mb-2">Video platform Website</strong>
              <a href="#" className="text-white delay-200">
                view project <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ProjectSection;
