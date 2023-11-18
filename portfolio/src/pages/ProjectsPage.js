import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FooterSection from "../component/Footer";
import Menu from "../component/Menu";
import eCommerceImage from "../assets/image/e-commerce.jpg";

const projects = [
  {
    id: 1,
    path: "/project",
    date: "11-2023",
    title: "EDUCATION SYSTEM MANAGER",
    firstSmallImage: eCommerceImage,
    secondSmallImage: eCommerceImage,
    firstLargeImage: eCommerceImage,
    secondLargeImage: eCommerceImage,
    listImage: [
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/3769139/pexels-photo-3769139.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
    ],
    introText:
      "Introducing F4 Education System Manager - Your Ultimate Solution for Programming Center Management" +
      "Welcome to F4 Education System Manager, the cutting-edge platform designed to revolutionize the way" +
      "programming centers operate and thrive. Our website serves as a comprehensive solution for both selling and" +
      "efficiently managing programming education programs. Whether you are an educational institution, coding bootcamp, " +
      "or an individual instructor, F4 Education System Manager is tailored to meet your unique needs and elevate the entire learning experience." +
      "Efficient Program Management: From scheduling classes to tracking student progress, our system offers a robust set of tools to streamline the " +
      "day-to-day operations of your programming center. Manage course materials, assignments, and assessments with ease, allowing you to focus more on delivering quality education...",
  },
  {
    id: 2,
    path: "/project",
    date: "08-2023",
    title: "E-Commerce Website",
    firstSmallImage: eCommerceImage,
    secondSmallImage: eCommerceImage,
    firstLargeImage: eCommerceImage,
    secondLargeImage: eCommerceImage,
    listImage: [
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/3769139/pexels-photo-3769139.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
    ],
    introText:
      "At 4MEMS, we understand the importance of technology in enhancing our daily lives. Whether you're a" +
      " music enthusiast seeking high-quality audio experiences or a tech-savvy individual looking for the latest" +
      " gadgets, our platform offers a convenient and reliable way to explore and purchase the tech products you desire." +
      "Our extensive catalog features a diverse selection of earpods, allowing you to enjoy your favorite music, podcasts," +
      "and phone calls with exceptional sound quality and comfort. We carefully curate our collection to ensure that you have" +
      " access to the most innovative and reliable brands and models in the market" +
      "In addition to earpods, we also offer a range of speakers that deliver immersive" +
      "audio experiences for your home, office, or on-the-go. Whether you're hosting a party, watching a movie, or simply " +
      "enjoying your favorite tunes, our speakers will elevate your audio experience to new heights...",
  },
];

const ProjectPage = () => {
  // Param
  const { id } = useParams();
  const project = projects.find((pj) => pj.id.toString() === id);

  // Show on scroll
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [listImage, setListImage] = useState(project.listImage);

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

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  useEffect(() => {
    setListImage(project.listImage);
  }, []);

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
              GROUP PROJECT
            </h6>
            <h1 className="hidden-element fw-bolder display-2 mb-5 text-start delay-200">
              {project.title}
            </h1>
            <h5
              className="hidden-element text-start"
              style={{ color: "#9e9e9e" }}
            >
              YEAR
            </h5>
            <h5 className="hidden-element text-start fw-bold">
              {project.date}
            </h5>
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
            Some image of project
          </h1>
          <div className="col-12 my-5">
            {/* First row image */}
            <div className="row">
              <div className="col-lg-7 col-xl-7 col-md-7 col-sm-12">
                <div
                  className="hidden-element project-page-img text-decoration-none"
                  style={{
                    background: `url(${project.firstLargeImage})`,
                  }}
                >
                  <div className="item-content m-5 pt-5 d-flex flex-column ">
                    <span className="fs-4" style={{ color: "#9e9e9e" }}>
                      Client
                    </span>
                    <strong className="fs-1">Shop Page</strong>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-5 col-md-5 col-sm-12">
                <div
                  className="hidden-element project-page-img text-decoration-none"
                  style={{
                    background: `url(${project.firstSmallImage})`,
                  }}
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

            {/* Second row image */}
            <div className="row">
              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12">
                <div
                  className="hidden-element project-page-img text-decoration-none"
                  style={{
                    background: `url(${project.firstSmallImage})`,
                  }}
                >
                  <div className="item-content m-5 pt-5 d-flex flex-column ">
                    <span className="fs-4" style={{ color: "#9e9e9e" }}>
                      Client
                    </span>
                    <strong className="fs-1">Shop Page</strong>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-xl-8 col-md-8 col-sm-12">
                <div
                  className="hidden-element project-page-img text-decoration-none"
                  style={{
                    background: `url(${project.firstLargeImage})`,
                  }}
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

            {/* Third row image */}
            <h1 className="mt-5 mb-3 text-decoration-underline fw-bold">
              More Image
            </h1>
            {listImage.map((image) => (
              <>
                <div className="col-12" key={image.id}>
                  <div
                    className="hidden-element project-page-img text-decoration-none"
                    style={{
                      background: `url(${image.image}) no-repeat`,
                    }}
                  ></div>
                </div>
              </>
            ))}

            {/* Comeback section */}
          </div>
          <div className="col-12 my-5 py-5 text-center">
            <p
              className="hidden-element text-center"
              style={{ color: "#9e9e9e" }}
            >
              DOESN'T SEE ANYTHING LEFT
            </p>
            <Link
              to="/"
              className="hidden-element display-4 fw-bolder text-dark text-decoration-none hover-link"
            >
              Get back
              <i className="fa-solid fa-arrow-right-long ms-4"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </>
  );
};

export default ProjectPage;
