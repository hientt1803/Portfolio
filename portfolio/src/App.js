import { useEffect, useState } from "react";

// CSS
import "./App.css";

// component import
import AboutSection from "./component/About";
import ContactSection from "./component/Contact";
import FooterSection from "./component/Footer";
import Menu from "./component/Menu";
import HeroSection from "./component/Hero";
import ProjectSection from "./component/Projects";
import Loading from "./component/Loading";

function App() {
  // Show on scroll
  const [isVisible, setIsVisible] = useState(false);

  // Loading screen
  const [isLoading, setIsLoading] = useState(false);
  const [emailActive, setEmailActive] = useState(false);

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

  useEffect(() => {
    setIsLoading(true);
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

  return (
    <div className="App">
      {/* Menu */}
      <Menu />

      <div className="position-relative">
        {/* Hero section */}
        <HeroSection {...{ isVisible }} />

        {/* Project */}
        <ProjectSection {...{ isVisible }} />

        {/* About */}
        <AboutSection {...{ isVisible }} />

        {/* Contact */}
        <ContactSection />

        <div className="container-xxl d-flex justify-content-between align-items-center">
          {/* Email button*/}
          <div
            className="position-fixed"
            style={{ bottom: "20px", transition: "all 0.5s ease" }}
          >
            <a
              className="d-flex justify-content-center align-items-center p-3
            rounded-5 text-white text-decoration-none 
            email-fixed-bottom"
              href={"mailTo:tronghientran18@gmail.com"}
              onMouseEnter={() => {
                setEmailActive(true);
              }}
              onMouseLeave={() => {
                setEmailActive(false);
              }}
            >
              {emailActive ? (
                <>
                  <span style={{ transition: "all 0.5s ease" }}>
                    <i className="fa-regular fa-envelope me-2" />
                    contact me
                  </span>
                </>
              ) : (
                <>
                  <i
                    className="fa-regular fa-envelope"
                    style={{ transition: "all 0.5s ease" }}
                  />
                </>
              )}
            </a>
          </div>

          {/* Scroll to Top button */}
          <div className="scrollTopButton" onClick={scrollToTop}>
            <span
              className="d-flex justify-content-center align-items-center p-3
            rounded-5 text-white text-decoration-none"
            >
              <i className="fa-solid fa-arrow-up"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />

      {/* Loading animate */}
      {isLoading && (
        <>
          {/* Loading */}
          <Loading />
        </>
      )}
    </div>
  );
}

export default App;
