import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";

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
      imageURL:
        "https://images.pexels.com/photos/15118791/pexels-photo-15118791/free-photo-of-a-person-holding-a-picture.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      name: "Projects",
      href: "#projects",
      imageURL:
        "https://images.pexels.com/photos/15118791/pexels-photo-15118791/free-photo-of-a-person-holding-a-picture.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      name: "About",
      href: "#about",
      imageURL:
        "https://images.pexels.com/photos/15118791/pexels-photo-15118791/free-photo-of-a-person-holding-a-picture.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      name: "Contact",
      href: "#contact",
      imageURL:
        "https://images.pexels.com/photos/15118791/pexels-photo-15118791/free-photo-of-a-person-holding-a-picture.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
  ];

  return (
    <>
      <header style={{ zIndex: "999" }} className="sticky-header bg-white">
        <div className="container-xxl d-flex justify-content-between align-items-center">
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
        </div>
      </header>

      {/* Nav Open */}
      <div id="myNav" className={`overlay ${isOpen ? "open" : ""}`}>
        {/* Right side navbar  */}
        <div>
          {/* <div className="float-start">ABC</div> */}
          <button
            className="float-end btn closebtn d-flex align-items-center"
            onClick={closeNav}
          >
            <span className="fs-2 mt-2">Close</span>
            <span aria-hidden="true" className="display-2">
              &times;
            </span>
          </button>
        </div>

        <div className="overlay-content d-flex justify-content-center align-items-center flex-column">
          <ul>
            <li className="text-center">
              <span className="fs-4" style={{ color: "#adadad" }}>
                MENU
              </span>
            </li>
            {menuLinks.map((menu, index) => (
              <li key={index} className="text-center">
                <a
                  href={menu.href}
                  className={`menu-link navbar-hover-link ${menu.name} ${
                    isOpen ? "slide-in" : ""
                  }`}
                  alt={menu.name}
                  onClick={() => closeNav()}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
