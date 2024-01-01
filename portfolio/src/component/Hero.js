import React from "react";
import reactImage from "../assets/image/react.png";
import javaImage from "../assets/image/java.png";
import databaseImage from "../assets/image/github.png";
import githubImage from "../assets/image/database.png";

const HeroSection = () => {
  return (
    <section className="position-relative hero-background" id="home">
      <div className="row justify-content-between align-items-center g-5 text-start hero-container over-flow-hidden">
        <div className="hidden-element hero-content-container mx-auto col-12">
          <span className="fs-4" style={{ color: "#9e9e9e" }}>
            TRAN TRONG HIEN
          </span>
          <h1 className="hidden-element delay-200 fw-bolder display-1 mb-2">
            Front-end Developer <br /> Nice to meet ya!
          </h1>
          <p className="hidden-element delay-400 fs-3 text-muted">
            I'm Tran Trong Hien, Front-end Developer base on Can Tho, Viet Nam.
            As a Front-end Developer, i am dedicated to turning ideas an design
            into web applications with JS library and framework. I'm also have
            experience in back-end about RestFull-API application build in Java
            (Spring boot 3,1).
          </p>
          <div className="hidden-element delay-1000 d-flex flex-wrap justify-content-start align-items-end gap-3">
            <a
              href="#projects"
              className="fw-bolder text-decoration-none text-dark fs-4 hover-link"
            >
              View Projects
            </a>
            <span className="fs-5" style={{ color: "#9e9e9e" }}>
              or
            </span>
            <a
              href="#about"
              className="fw-bolder text-decoration-none text-dark fs-4 hover-link"
            >
              Read About Me
            </a>
          </div>
          <div className="d-flex justify-content-start align-items-center mt-5 pt-5 gap-5">
            <span className="text-dark h4">TECH |</span>
            <div className="d-flex justify-content-start gap-4">
              <img
                src={reactImage}
                alt="HTML"
                width={40}
                height={40}
                className="rouded"
                loading="lazy"
              />
              <img
                src={
                  "https://th.bing.com/th/id/OIP.Yzjjsf7_-1FEPmE-3SprGQHaIH?rs=1&pid=ImgDetMain"
                }
                alt="HTML"
                width={40}
                height={40}
                className="rouded"
                loading="lazy"
              />
              <img
                src={
                  "https://th.bing.com/th/id/R.2441cb996a3afd2ae91cf88fe008a623?rik=Y4dvtTYDsow8Lw&pid=ImgRaw&r=0"
                }
                alt="HTML"
                width={40}
                height={40}
                className="rouded"
                loading="lazy"
              />
              <img
                src={javaImage}
                alt="HTML"
                width={40}
                height={40}
                className="rouded"
                loading="lazy"
              />
              <img
                src={databaseImage}
                alt="HTML"
                width={40}
                height={40}
                className="rouded"
                loading="lazy"
              />
              <img
                src={githubImage}
                alt="HTML"
                width={40}
                height={40}
                className="rouded"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
          <img
            src={heroBaner}
            className="image-fluid hidden-element delay-1000"
            width={"100%"}
            height={"100%"}
            alt=""
          />
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
