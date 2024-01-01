import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FooterSection from "../component/Footer";
import Menu from "../component/Menu";

// Education
import edu4 from "../assets/image/education/1-fullscr.png";
import edu5 from "../assets/image/education/2-fullscr.png";
import edu6 from "../assets/image/education/3-fullscr.png";
import edu7 from "../assets/image/education/10-full.png";
import edu8 from "../assets/image/education/4-fullscr.png";
import edu9 from "../assets/image/education/6-fullscr.png";
import edu10 from "../assets/image/education/7-fullsrc.png";
import edu11 from "../assets/image/education/9-full.png";
import edu12 from "../assets/image/education/classResult.png";
import edu13 from "../assets/image/education/teacher-class_result.png";

const projects = [
  {
    id: 1,
    path: "/project",
    date: "09-2023 - 12-2023",
    title: "EDUCATION SYSTEM MANAGER",
    listImage: [
      {
        id: 1,
        image: edu4,
      },
      {
        id: 2,
        image: edu5,
      },
      {
        id: 3,
        image: edu6,
      },
      {
        id: 4,
        image: edu7,
      },
      {
        id: 5,
        image: edu8,
      },
      {
        id: 6,
        image: edu9,
      },
      {
        id: 7,
        image: edu10,
      },
      {
        id: 8,
        image: edu11,
      },
      {
        id: 9,
        image: edu12,
      },
      {
        id: 10,
        image: edu13,
      },
    ],
    introText:
      "Introducing F4 Education System Manager - Your Ultimate Solution for Programming Center Management" +
      "Welcome to F4 Education System Manager, the cutting-edge platform designed to revolutionize the way management your center",
    feature: [
      "login, log-out, forgot-password,.. ",
      "cart, checkout (PayPal, VNPay)",
      "Client (Client can view, searching courses, best course, newest course and course have good comment)",
      "Student dashboard (Student can access to schedule, class Result, certificate, checkout history, attendance history,..) ",
      "Teacher dashboard (Teachers can take attendance of students, grade students, give task, set assignment,...)",
      "Admin dashboard (Admin can manager subject, course, schedule, questions, examination,...)",
    ],
    github: "https://github.com/alexnguyen03/f4education",
    technology: [
      "React",
      "Mantine",
      "Figma",
      "Spring boot",
      "RestFullAPI",
      "SQL Server",
      "POSTMAN",
      "Bootstrap",
      "...",
    ],
    devlopLink: null,
  },
  {
    id: 2,
    path: "/project",
    date: "06-2023 - 08-2023",
    title: "E-Commerce Website",
    listImage: [],
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
    github:
      "https://github.com/hientt1803/e-commerce-app-springboot-and-reactjs",
    technology: [
      "React",
      "Mantine",
      "Figma",
      "Spring boot",
      " RestFullAPI",
      "Bootstrap",
      "...",
    ],
    devlopLink: null,
  },
  {
    id: 3,
    path: "/project",
    date: "08-2023",
    title: "Ranking anime website",
    listImage: [],
    introText:
      "A small project using NextJS with animation by framer motion when learning NextJS",
    github: "https://github.com/hientt1803/anime-vault",
    technology: ["Nextjs 14", "Framer motion", "tailwind", "..."],
    devlopLink: "https://anime-vault-ten-beige.vercel.app/",
  },
  {
    id: 4,
    path: "/project",
    date: "12-2023",
    title: "Blog Website",
    listImage: [],
    introText: "Coming soon",
    github: "https://github.com/hientt1803/anime-vault",
    technology: ["Nextjs 14", "NodeJS", "Prisma", "..."],
    devlopLink: null,
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
            <h5 className="hidden-element text-start fw-bold mb-5">
              {project.date}
            </h5>
            <h5
              className="hidden-element text-start"
              style={{ color: "#9e9e9e" }}
            >
              GITHUB
            </h5>
            <h5 className="hidden-element text-start fw-bold mb-5">
              <a
                href={project.github}
                className="hidden-element text-dark text-start fw-bold"
              >
                {project.github}
              </a>
            </h5>
            <h5
              className="hidden-element text-start"
              style={{ color: "#9e9e9e" }}
            >
              TEACHNOLOGY
            </h5>
            <h5>
              {project.technology.map((item) => (
                <span className="hidden-element text-start">{item}, </span>
              ))}
            </h5>
          </div>
          {/* Item */}
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <h5 className="hidden-element fw-bold" style={{ color: "#9e9e9e" }}>
              DESCRIPTION
            </h5>
            <h4 className="hidden-element fw-bold text-dark">
              {project.introText}
            </h4>
            <h4
              className="hidden-element fw-bold mt-5"
              style={{ color: "#9e9e9e" }}
            >
              Main feature of project
            </h4>
            <ul>
              {project?.feature?.map((item) => (
                <li className="hidden-element text-dark" key={item}>
                  <h5>{item}</h5>
                </li>
              ))}
            </ul>

            {project.devlopLink !== null && (
              <h5 className="mt-5">
                Devploy link:{" "}
                <a href={project.devlopLink} style={{ color: "#000" }}>
                  {project.devlopLink}
                </a>
              </h5>
            )}
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
            Take a tour around the project
          </h1>
          <div className="col-12 my-5">
            {/* Third row image */}
            {listImage?.map((image, index) => (
              <div className="col-12 mb-5" key={index}>
                {/* <div
                  className="hidden-element project-page-img text-decoration-none border"
                  style={{
                    background: `url(${image.image}) no-repeat`,
                    backgroundSize: "100%",
                    objectFit: "contain",
                  }}
                ></div> */}
                <img
                  src={`${image.image}`}
                  alt="index"
                  loading="lazy"
                  className="w-100 h-100 mb-5 object-cover border shadow"
                />
              </div>
            ))}
            {listImage.length === 0 && (
              <div className="my-5 py-5">
                <h3 className="hidden-element fw-bolder text-center mb-2 text-start delay-200">
                  Images'll be updated as soon as possible
                </h3>
                <h4
                  className="hidden-element text-center"
                  style={{ color: "#9e9e9e" }}
                >
                  Sorry for the inconvenience.
                </h4>
              </div>
            )}
          </div>

          {/* Comeback section */}
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
