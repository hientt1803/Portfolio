import React, { useState } from "react";
import logo from "../image/logoAdmin.png";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
    document.getElementById("myNav").style.height = "100%";
  };

  const closeNav = () => {
    setIsOpen(false);
    document.getElementById("myNav").style.height = "0%";
  };

  return (
    <>
      <header
        style={{ zIndex: "999" }}
        className="sticky-header container-fluid bg-white d-flex justify-content-between align-items-center"
      >
        <div className="d-flex justify-content-start gap-2">
          <a href={"#"} className="navbar-brand fw-bolder">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "80px", height: "80px" }}
              className="img-fluid"
            />
          </a>
          <div className="d-flex flex-column d-none d-md-flex justify-content-center align-items-start fw-bolder">
            <span>Tran Trong Hien</span>
            <span>WEB & UI DESIGNER</span>
          </div>
        </div>

        {/* Right side navbar */}
        <div className="right-side-nav d-flex align-items-center gap-5">
          <a
            href={"/files/Tran-Trong-Hien-CV.pdf"}
            type="button"
            className="btn btn-dark fw-semibold my-3"
          >
            My Resume
          </a>
          <div
            className="d-flex justify-content-center fw-bold"
            onClick={openNav}
            style={{ cursor: "pointer" }}
          >
            <span style={{ marginTop: "17px" }}>MENU</span>
            <button className="btn" style={{ fontSize: "30px" }}>
              &#9776;
            </button>
          </div>
        </div>
      </header>

      {/* Nav Open */}
      <div id="myNav" className={`overlay ${isOpen ? "open" : ""}`}>
        {/* Right side navbar  */}
        <button
          className="float-end btn closebtn d-flex align-items-center"
          onClick={closeNav}
        >
          <span className="fs-5 mt-2">Close</span>
          <span aria-hidden="true" className="display-3">
            &times;
          </span>
        </button>

        <div className="overlay-content d-flex flex-column">
          <ul>
            <li>
              <span className="fs-5" style={{ color: "#adadad;" }}>
                MENU
              </span>
            </li>
            <li>
              <a className="navbar-hover-link active" href={"#"}>
                Home
              </a>
            </li>
            <li>
              <a className="navbar-hover-link" href={"#projects"}>
                Projects
              </a>
            </li>
            <li>
              <a className="navbar-hover-link" href={"#about"}>
                About
              </a>
            </li>
            <li>
              <a className="navbar-hover-link" href={"#contact"}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
