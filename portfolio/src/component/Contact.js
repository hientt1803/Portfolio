import { React } from "react";

const ContactSection = () => {
  return (
    <section className="section" id="contact">
      <p className="hidden-element text-center" style={{ color: "#9e9e9e" }}>
        NEED A WEB DEVELOPER
      </p>
      <a
        href="mailTo:tronghientran18@gmail.com"
        className="hidden-element display-4 fw-bolder text-dark text-decoration-none hover-link"
      >
        Let's work together <i className="fa-solid fa-arrow-right-long"></i>
      </a>
    </section>
  );
};

export default ContactSection;
