import React from "react";
import image from "../admin.jpg";

const HeroSection = ({ isVisible }) => {
  const textStroke = {
    position: "absolute",
    top: "80px",
    left: "0",
    right: "0",
    fontSize: "6rem",
    opacity: "0.150",
    color: "#f2f2f2",
    textShadow: "6px 5px 3px rgba(167,167,167,0.78)",
  };

  return (
    <section className="section position-relative" id="home">
      <h1 className="fw-bold d-none d-lg-block d-xl-block" style={textStroke}>
        FRONTEND DEVELOPER
      </h1>
      <div className="row justify-content-between align-items-center g-5 mt-lg-5 mt-xl-5 text-start position-relative over-flow-hidden">
        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
          <span className="fs-6" style={{ color: "#9e9e9e" }}>
            TRAN TRONG HIEN
          </span>
          <h1 className="fw-bolder display-2 my-3">
            Website and user interface designer.
          </h1>
          <p className="fs-3 text-muted">
            I'm Tran Trong Hien, Front-end Developer base on Can Tho, Viet Nam.
            As a Front-end Developer, i am dedicated to turning ideas an design
            into web applications.
          </p>
          <a
            href={"/files/Tran-Trong-Hien-CV.pdf"}
            type="button"
            className="btn btn-dark fw-semibold my-3"
          >
            Resume <i className="fa-regular fa-share-from-square"></i>
          </a>
          <div
            className={`hidden-element ${
              isVisible ? "visible d-flex justify-content-start gap-3 " : ""
            }`}
          >
            <a
              href={"#projects"}
              className="fw-bolder text-decoration-none text-dark fs-4 hover-link"
            >
              View Projects
            </a>
            <span className="text-muted fs-4">or</span>
            <a
              href={"#about"}
              className="fw-bolder text-decoration-none text-dark fs-4 hover-link"
            >
              Read About Me
            </a>
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
          <img
            src={image}
            className="image-fluid"
            width={"100%"}
            height={"100%"}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
