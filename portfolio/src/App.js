import { useEffect, useState } from "react";
import "./App.css";
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
    }, 4400);
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
    <div
      className="App"
      data-bs-spy="scroll"
      data-bs-target="#myNav"
      tabindex="0"
    >
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
            rounded-5 text-white text-decoration-none 
            email-fixed-bottom"
            href={"mailTo:tronghientran18@gmail.com"}
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
          <Loading />
        </>
      )}
    </div>
  );
}

export default App;
