import { useEffect, useState } from "react";
import "./App.css";
import AboutSection from "./component/About";
import ContactSection from "./component/Contact";
import FooterSection from "./component/Footer";
import Menu from "./component/Menu";
import HeroSection from "./component/Hero";
import ProjectSection from "./component/Projects";
import SkillSection from "./component/Skill";

function App() {
  // Show on scroll
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div className="App">
      <div className="container-fluid">
        <Menu />
      </div>
      <div className="container position-relative">
        <HeroSection {...{ isVisible }} />
        <ProjectSection {...{ isVisible }} />
        <SkillSection />
        <AboutSection {...{ isVisible }} />
        <ContactSection />

        <div className="position-fixed" style={{ bottom: "20px" }}>
          <a
            class="d-flex justify-content-center align-items-center p-3
            rounded-5 text-white text-decoration-none"
            href={"mailTo:tronghientran18@gmail.com"}
            style={{ cursor: "pointer", background: "#c0c0c0" }}
          >
            <i class="fa-regular fa-envelope"></i>
          </a>
        </div>
        <div
          className="position-fixed"
          style={{ bottom: "20px", right: "30px" }}
          onClick={scrollToTop}
        >
          <span
            class="d-flex justify-content-center align-items-center p-3
            rounded-5 text-white text-decoration-none"
            style={{ cursor: "pointer", background: "#c0c0c0" }}
          >
            <i class="fa-solid fa-arrow-up"></i>
          </span>
        </div>
      </div>
      <hr />
      <FooterSection />
    </div>
  );
}

export default App;
