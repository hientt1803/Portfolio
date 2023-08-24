import { React } from "react";
import image from "../admin.jpg";

const ProjectSection = ({ isVisible }) => {
  const cardStyle = {
    "border-radius": "7px",
    "box-shadow":
      "rgba(0, 0, 0, 0.4) 5px 5px, rgba(63, 63, 63, 0.3) 10px 10px," +
      " rgba(48, 48, 48, 0.2) 15px 15px, rgba(10, 8, 8, 0.1) " +
      " 20px 20px, rgba(136, 136, 136, 0.05) 25px 25px",
  };

  return (
    <section className="section" id="projects">
      <h5
        className={`hidden-element ${isVisible ? "visible text-start " : ""}`}
        style={{ color: "#9e9e9e" }}
      >
        WEB DEVELOPMENT & DESIGN
      </h5>
      <h1
        className={`hidden-element ${
          isVisible
            ? "visible fw-bolder display-2 my-3 text-start delay-200"
            : ""
        }`}
      >
        Personal Projects
      </h1>
      <div className="projects">
        {/* Item */}
        <a
          href="#home"
          className={`hidden-element ${
            isVisible
              ? "visible project-item text-decoration-none delay-1000"
              : ""
          }`}
          style={{ background: `url(${image})` }}
        >
          <div className="item-content m-5 d-flex flex-column ">
            <span className="fs-4" style={{ color: "#9e9e9e" }}>
              2023
            </span>
            <strong className="fs-1">E-Commerce Website</strong>
          </div>
          {/* Over lay */}
          <div className="overlay-project">
            <div className="item-content-overlay m-5 d-flex flex-column text-white">
              <span className="fs-4" style={{ color: "#9e9e9e" }}>
                2023
              </span>
              <strong className="fs-1 mb-2">E-Commerce Website</strong>
              <a href="#" className="text-white delay-200">
                view project <i class="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </a>
        <div
          className="project-item"
          style={{ background: `url(${image})` }}
        ></div>
      </div>

      {/* <div className="row justify-content-center align-items-center g-4"> */}
      {/* Item */}
      {/* <div className="col-12">
          <a
            href={"#"}
            className="card mb-5 p-3 border border-3 text-start text-decoration-none"
            style={cardStyle}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={image}
                  alt="ProjectImage1"
                  className="img-fluid rounded-start"
                  srcset=""
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-primary">Project Feature</h5>
                  <a href={"#"} className="fs-3 text-dark fw-bold">
                    E-Commerce website
                  </a>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      A E-commerce platform for trading technology products
                      (Earpod, Headphone,...). This project use ReactJS,
                      Bootstrap 5 and RestFullAPI with Spring Boot and Database
                      by SQL Server.
                    </small>
                  </p>
                  <div className="button-group">
                    <a href={"#"} className="btn btn-dark fw-semibold">
                      Comming soon{" "}
                      <i className="fa-regular fa-share-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div> */}

      {/* Item */}
      {/* <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div class="card text-start p-3" style={cardStyle}>
            <img class="card-img-top" src={image} alt="Title" />
            <div class="card-body">
              <h5 className="card-title text-primary">Website</h5>
              <a href={"#"} className="fs-3 text-dark fw-bold">
                Video hosting platform.
              </a>{" "}
              <br />
              <div className="d-flex justify-content-between mt-3">
                <a
                  href={"https://github.com/hientt1803/Java-4-ASM"}
                  className="text-dark text-decoration-none"
                >
                  Github{" "}
                </a>
                <a href={"#"} className="btn btn-dark fw-semibold">
                  Comming soon{" "}
                  <i className="fa-regular fa-share-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div> */}

      {/* Item */}
      {/* <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div class="card text-start p-3" style={cardStyle}>
            <img class="card-img-top" src={image} alt="Title" />
            <div class="card-body">
              <h5 className="card-title text-primary">Portfolio Website</h5>
              <a href={"#"} className="fs-3 text-dark fw-bold">
                Portfolio
              </a>{" "}
              <br />
              <div className="d-flex justify-content-between mt-3">
                <a
                  href={"https://github.com/hientt1803/Portfolio"}
                  className="text-dark text-decoration-none"
                >
                  Github{" "}
                </a>
                <a href={"#"} className="btn btn-dark fw-semibold">
                  Comming soon{" "}
                  <i className="fa-regular fa-share-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div> */}
    </section>
  );
};

export default ProjectSection;
