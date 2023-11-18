import React from "react";
import heroBaner from "../assets/image/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="section position-relative" id="home">
      <div className="row justify-content-between align-items-center g-5 text-start position-relative over-flow-hidden">
        <div className="hidden-element col-xl-7 col-lg-7 col-md-12 col-sm-12">
          <span className="fs-5" style={{ color: "#9e9e9e" }}>
            TRAN TRONG HIEN
          </span>
          <h1 className="hidden-element delay-200 fw-bolder display-2 mb-2">
            Front End Website Developer
          </h1>
          <p className="hidden-element delay-400 fs-5 text-muted">
            I'm Tran Trong Hien, Front-end Developer base on Can Tho, Viet Nam.
            As a Front-end Developer, i am dedicated to turning ideas an design
            into web applications.
          </p>
          <div className="hidden-element delay-1000 d-flex justify-content-start align-items-end  gap-3 ">
            <a
              href={"#projects"}
              className="fw-bolder text-decoration-none text-dark fs-5 hover-link"
            >
              View Projects
            </a>
            <span className="fs-6" style={{ color: "#9e9e9e" }}>
              or
            </span>
            <a
              href={"#about"}
              className="fw-bolder text-decoration-none text-dark fs-5 hover-link"
            >
              Read About Me
            </a>
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
          <img
            src={heroBaner}
            className="image-fluid hidden-element delay-1000"
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
