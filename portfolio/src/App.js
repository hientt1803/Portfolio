import { useEffect, useRef, useState } from "react";
import "./App.css";
import AboutSection from "./component/About";
import ContactSection from "./component/Contact";
import FooterSection from "./component/Footer";
import Menu from "./component/Menu";
import HeroSection from "./component/Hero";
import ProjectSection from "./component/Projects";

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
    }, 3000);
    return () => clearTimeout(timeout);
  }, [isLoading]);


  return (
    <div className="App">
      <Menu />
      <div className="container position-relative">
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
            style={{ cursor: "pointer", background: "#c0c0c0" }}
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
    </div>
  );
}

export default App;
