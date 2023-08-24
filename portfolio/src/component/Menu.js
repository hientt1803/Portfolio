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
        className="container sticky-top bg-white d-flex justify-content-between align-items-center"
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
          <div className="d-flex flex-column justify-content-center align-items-start fw-bolder">
            <span>Tran Trong Hien</span>
            <span>WEB & UI DESIGNER</span>
          </div>
        </div>
        <div
          className="d-flex justify-content-center fw-bold"
          onClick={openNav}
        >
          <span style={{ marginTop: "17px" }}>MENU</span>
          <button
            className="btn"
            style={{ fontSize: "30px", cursor: "pointer" }}
          >
            &#9776;
          </button>
        </div>
      </header>

      {/* Nav Open */}
      <div id="myNav" className={`overlay ${isOpen ? "open" : ""}`}>
        <button class="float-end btn closebtn" onClick={closeNav}>
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="overlay-content">
          <a href={"#"}>Home</a>
          <a href={"#about"}>About</a>
          <a href={"#projects"}>Projects</a>
          <a href={"#"}>Clients</a>
          <a href={"#"}>Contact</a>
        </div>
      </div>
    </>
  );
};

export default Menu;
