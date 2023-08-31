import { useEffect, useState } from "react";
import "./App.css";
import AboutSection from "./component/About";
import ContactSection from "./component/Contact";
import FooterSection from "./component/Footer";
import Menu from "./component/Menu";
import HeroSection from "./component/Hero";
import ProjectSection from "./component/Projects";

import logo from "./image/logo.png";
import loadingImage from "./image/loadingBackground.jpg";

function App() {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // IsLoading
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
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

  return (
    <div className="App">
      <Menu />
      <div className="container-xxl position-relative">
        <HeroSection {...{ isVisible }} />
        <ProjectSection {...{ isVisible }} />
        {/* <div className="hidden-element" ref={animationRef}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, quasi
          quia eaque ea eligendi sunt tempore aliquam fugit veritatis quae!
        </div> */}
        <AboutSection {...{ isVisible }} />
        <ContactSection />

        <div className="position-fixed" style={{ bottom: "20px" }}>
          <a
            className="d-flex justify-content-center align-items-center p-3
            rounded-5 text-white text-decoration-none"
            href={"mailTo:tronghientran18@gmail.com"}
            style={{
              cursor: "pointer",
              background: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
        <div className="scrollTopButton" onClick={scrollToTop}>
          <span
            className="d-flex justify-content-center align-items-center p-3
            rounded-5 text-white text-decoration-none"
          >
            <i className="fa-solid fa-arrow-up"></i>
          </span>
        </div>
      </div>
      <FooterSection />
      {isLoading && (
        <>
          {/* Loading */}
          <div className="loading loading-fade-out">
            <div className="w-100 h-100">
              <div className="w-100 h-100 container p-5 loading-content position-relative">
                <div className="infinity-water"></div>
                <img
                  src={loadingImage}
                  alt=""
                  className="loadingImage position-absolute start-0"
                />
                <div className="d-flex justify-content-start gap-2 navbar-brand">
                  <a href={"#"}>
                    <img
                      src={logo}
                      alt="Logo"
                      style={{ width: "47px", height: "47px" }}
                      className="img-fluid img-loading-logo "
                    />
                  </a>
                  <div
                    className="d-flex flex-column d-none d-md-flex justify-content-center
              align-items-start fw-bolder"
                    style={{ zIndex: "200" }}
                  >
                    <span className="fw-bolder">Tran Trong Hien</span>
                    <span className="fw-bold">WEB & UI DESIGNER</span>
                  </div>
                </div>
                <div
                  className="position-absolute bottom-0 loading-content d-flex flex-column
            align-items-start mb-5"
                  style={{ zIndex: "300" }}
                >
                  <span className="fs-3 text-white-50 fw-bolder">WELCOME</span>
                  <span className="display-1 text-white fw-bolder">
                    Wait a bit ...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
