import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../component/Menu";
import eCommerceImage from "../image/e-commerce.jpg";
import videoPlatform from "../image/video-platform.jpg";

const ProjectPage = () => {
  // Show on scroll
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".hidden-element");
      const position = element.getBoundingClientRect();
      const windowHeight = window.innerHeight - 30;

      if (position.top < windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // IsLoading
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2400);
    return () => clearTimeout(timeout);
  }, [isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden-element");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const projects = [
    {
      id: 1,
      path: "/project",
      background: eCommerceImage,
      date: "08-2023",
      title: "E-Commerce Website",
      introText:
        "At 4MEMS, we understand the importance of technology in enhancing our daily lives. Whether you're a" +
        " music enthusiast seeking high-quality audio experiences or a tech-savvy individual looking for the latest" +
        " gadgets, our platform offers a convenient and reliable way to explore and purchase the tech products you desire." +
        "Our extensive catalog features a diverse selection of earpods, allowing you to enjoy your favorite music, podcasts," +
        "and phone calls with exceptional sound quality and comfort. We carefully curate our collection to ensure that you have" +
        " access to the most innovative and reliable brands and models in the market" +
        "In addition to earpods, we also offer a range of speakers that deliver immersive" +
        "audio experiences for your home, office, or on-the-go. Whether you're hosting a party, watching a movie, or simply " +
        "enjoying your favorite tunes, our speakers will elevate your audio experience to new heights.",
    },
    {
      id: 2,
      path: "/project",
      background: videoPlatform,
      date: "08-2023",
      title: "Video-platform Website",
      introText:
        "Welcome to VIT, your ultimate video platform where creativity meets community! Our website is designed" +
        "to provide you with an immersive experience in the world of online videos, allowing you to upload, discover, " +
        "like, share, and engage with a diverse range of content.At VIT, we understand the power of video as a medium of" +
        "expression and entertainment. Whether you are a budding content creator looking to showcase your talent, or a passionate" +
        "viewer seeking captivating videos, our platform offers a seamless and user-friendly environment to fulfill your needs.For creators," +
        " VIT provides a dynamic space to share your unique vision with the world. Whether you're an aspiring filmmaker, a talented musician, an " +
        "inspiring vlogger, or an innovative animator, our platform welcomes all forms of video content. With easy upload options, you can effortlessly" +
        "share your creations and connect with a global audience hungry for fresh, compelling videos.As a viewer, VIT offers an endless array of video content" +
        " to explore. Our intuitive search and recommendation algorithms ensure that you'll always find something that piques your interest. From heartwarming stories" +
        " to thrilling adventures, from thought-provoking documentaries to hilarious comedy sketches, VIT has it all. You can easily navigate through various categories, " +
        "trending videos, or even follow your favorite creators to stay up-to-date with their latest releases",
    },
  ];
  const { id } = useParams();

  const project = projects.find((pj) => pj.id.toString() === id);

  return (
    <>
      <Menu />
      <section className="container-xxl">
        <div className="row" style={{ margin: "150px 0" }}>
          {/* Item */}
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex flex-column align-items-start">
            <h6
              className="hidden-element text-start"
              style={{ color: "#9e9e9e" }}
            >
              PERSONAL PROJECT
            </h6>
            <h1 className="hidden-element fw-bolder display-2 mb-5 text-start delay-200">
              {project.title}
            </h1>
            <h6
              className="hidden-element text-start"
              style={{ color: "#9e9e9e" }}
            >
              YEAR
            </h6>
            <h6 className="hidden-element text-start fw-bold">
              {project.date}
            </h6>
          </div>
          {/* Item */}
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <h5 className="hidden-element fw-bold" style={{ color: "#9e9e9e" }}>
              {project.introText}
            </h5>
          </div>
        </div>
        {/* Project Overviw */}
        <div className="row">
          <h6
            className="hidden-element text-start"
            style={{ color: "#9e9e9e" }}
          >
            PROJECT OVERVIEW
          </h6>
          <h1 className="hidden-element fw-bolder display-2 mb-5 text-start delay-200">
            Some images of the project
          </h1>
          <div className="col-12 my-5">
            <div
              className="hidden-element text-decoration-none"
              style={{ background: `url(${eCommerceImage})`, height: "600px" }}
            >
              <div className="item-content m-5 pt-5 d-flex flex-column ">
                <span className="fs-4" style={{ color: "#9e9e9e" }}>
                  Client
                </span>
                <strong className="fs-1">Shop Page</strong>
              </div>
            </div>
          </div>
          <div className="col-12 my-5">
            <div
              className="hidden-element text-decoration-none"
              style={{ background: `url(${videoPlatform})`, height: "600px" }}
            >
              <div className="item-content m-5 pt-5 d-flex flex-column ">
                <span className="fs-4" style={{ color: "#9e9e9e" }}>
                  Client
                </span>
                <strong className="fs-1">Home</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
