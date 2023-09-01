import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";

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

  if (isOpen) {
    document.querySelectorAll("menu-link").forEach((entry) => {
      entry.classList.toggle("slide-in");
    });
  }

  const menuLinks = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <>
      <header
        style={{ zIndex: "999" }}
        className="sticky-header container-xxl bg-white d-flex justify-content-between align-items-center"
      >
        <Link
          to={"/"}
          className="d-flex justify-content-start gap-2 navbar-brand"
        >
          <Link to={"/"}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "47px", height: "47px" }}
              className="img-fluid"
            />
          </Link>
          <div className="d-flex flex-column d-none d-md-flex justify-content-center align-items-start fw-bolder">
            <span className="fw-bolder">Tran Trong Hien</span>
            <span className="fw-bold text-muted">WEB & UI DESIGNER</span>
          </div>
        </Link>

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
        <div>
          <div className="float-start">ABC</div>
          <button
            className="float-end btn closebtn d-flex align-items-center"
            onClick={closeNav}
          >
            <span className="fs-5 mt-2">Close</span>
            <span aria-hidden="true" className="display-3">
              &times;
            </span>
          </button>
        </div>

        <div className="overlay-content d-flex flex-column">
          <ul>
            <li>
              <span className="fs-5" style={{ color: "#adadad" }}>
                MENU
              </span>
            </li>
            {menuLinks.map((menu, index) => (
              <li>
                <a
                  key={index}
                  href={menu.href}
                  className={`menu-link navbar-hover-link ${
                    isOpen ? "slide-in" : ""
                  }`}
                  alt={menu.name}
                >
                  {menu.name}
                </a>
              </li>
            ))}
            ;
            {/* <li>
              <span className="fs-5" style={{ color: "#adadad" }}>
                MENU
              </span>
            </li>
            <li>
              <a className="menu-link navbar-hover-link active" href={"#"}>
                Home
              </a>
            </li>
            <li>
              <a className="menu-link navbar-hover-link" href={"#projects"}>
                Projects
              </a>
            </li>
            <li>
              <a className="menu-link navbar-hover-link" href={"#about"}>
                About
              </a>
            </li>
            <li>
              <a className="menu-link navbar-hover-link" href={"#contact"}>
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
