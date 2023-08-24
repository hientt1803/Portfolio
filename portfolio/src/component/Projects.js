import { React } from "react";
import image from "../admin.jpg";

const ProjectSection = () => {
  const cardStyle = {
    "border-radius": "7px",
    "box-shadow":
      "rgba(0, 0, 0, 0.4) 5px 5px, rgba(63, 63, 63, 0.3) 10px 10px," +
      " rgba(48, 48, 48, 0.2) 15px 15px, rgba(10, 8, 8, 0.1) " +
      " 20px 20px, rgba(136, 136, 136, 0.05) 25px 25px",
  };

  return (
    <section className="section" id="projects">
      <h5 className="text-muted text-left">SELECTED PROJECTS</h5>
      <h1 className="fw-bolder display-3 my-3 text-left">Case studies</h1>

        

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
