import { React } from "react";
import logo from "../assets/image/logo.png";

const FooterSection = () => {
  return (
    <footer className="container" style={{ marginTop: "100px" }}>
      <hr style={{ color: "#9e9e9e" }} />
      <div
        className="d-flex justify-content-start 
            gap-5 flex-wrap text-start"
      >
        {/* Item */}
        <div className="d-flex flex-column" style={{ maxWidth: "350px" }}>
          <div className="hidden-element flex flex-column fw-bold mb-3">
            <span className="fs-4 fw-bold">Contact</span> <br />
            <span className="fs-4 fw-bold text-line-end">information</span>
          </div>
          <p className="hidden-element" style={{ color: "#9e9e9e" }}>
            Feel free to reach out to me any time. I prefer to talk over email.
            I can reply your email for a few hours.
          </p>
          <div className="hidden-element d-flex flex-column">
            <p>
              <span style={{ color: "#9e9e9e" }}>Email: </span>
              <a
                href="mailTo:tronghientran18@gmail.com"
                className="text-dark fw-normal"
              >
                tronghientran18@gmail.com
              </a>
            </p>
            <p>
              <span style={{ color: "#9e9e9e" }}>Phone: </span>
              <span className="fw-normal">+84 706802119</span>
            </p>
          </div>
          <div className="hidden-element d-flex justify-content-start gap-2">
            <a href={"#"} className="navbar-brand fw-bolder">
              <img
                src={logo}
                alt="Logo"
                style={{ width: "47px", height: "47px" }}
                className="img-fluid"
              />
            </a>
            <div className="d-flex flex-column d-none d-md-flex justify-content-center align-items-start fw-bolder">
              <span>Tran Trong Hien</span>
              <span>WEB & UI DESIGNER</span>
            </div>
          </div>
        </div>
        {/* Item */}
        <div className="d-flex flex-column me-5">
          <div className="hidden-element flex flex-column fw-bold mb-3">
            <span className="fs-4 fw-bold">Socials</span> <br />
            <span className="fs-4 fw-bold text-line-end">And Works</span>
          </div>
          <ul className="hidden-element list-unstyled">
            <li>
              <a
                href="https://www.facebook.com/tran.trong.hien.vl/"
                className="text-decoration-none text-dark fw-bold"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://github.com/hientt1803"
                className="text-decoration-none text-dark fw-bold"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hi%E1%BA%BFn-tr%E1%BA%A7n-49b774256/"
                className="text-decoration-none text-dark fw-bold"
              >
                linkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
