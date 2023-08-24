import React from "react";
import image from "../admin.jpg";

const HeroSection = ({ isVisible }) => {
  const textStroke = {
    fontSize: "100px",
    top: "-150px",
    opacity: "0.150",
    color: "#f2f2f2",
    textShadow: "6px 5px 3px rgba(167,167,167,0.78)",
  };

  return (
    <section className="section" id="home">
      <div className="row justify-content-between align-items-center g-5 text-start position-relative over-flow-hidden">
        <h1
          className="display-3 position-absolute"
          style={textStroke}
        >
          FRONT END WEB DEVELOPER
        </h1>
        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
          <span className="text-muted fs-5">TRAN TRONG HIEN</span>
          <h1 className="fw-bolder display-3 my-3">
            Website and user interface designer.
          </h1>
          <p className="fs-3 fw-normal">
            Tran Trong Hien, Front-end Developer base on Can Tho, Viet Nam. As a
            Front-end Developer, i am dedicated to turning ideas an design into
            web applications.
          </p>
          <div
            className={`hidden-element ${
              isVisible ? "visible d-flex justify-content-start gap-3 " : ""
            }`}
          >
            <a
              href={"#projects"}
              className="fw-bolder text-decoration-none text-dark fs-4"
            >
              View Projects
            </a>
            <span className="text-muted fs-4">or</span>
            <a
              href={"#about"}
              className="fw-bolder text-decoration-none text-dark fs-4"
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
