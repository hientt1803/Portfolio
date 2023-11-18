import { React } from "react";
import logo from "../assets/image/logo.png";
import loadingImage from "../assets/image/loadingBackground.jpg";

const Loading = () => {
  return (
    <>
      <div className="loading loading-fade-out">
        <div className="w-100 h-100">
          <div className="w-100 h-100 container p-5 loading-content position-relative">
            <div className="infinity-water"></div>
            <img
              src={loadingImage}
              alt=""
              className="loadingImage position-absolute start-0"
            />
            <div className="d-flex justify-content-start gap-2 navbar-brand">
              <a href={"#"}>
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "47px", height: "47px" }}
                  className="img-fluid img-loading-logo "
                />
              </a>
              <div
                className="d-flex flex-column d-none d-md-flex justify-content-center
              align-items-start fw-bolder"
                style={{ zIndex: "200" }}
              >
                <span className="fw-bolder">Tran Trong Hien</span>
                <span className="fw-bold">WEB & UI DESIGNER</span>
              </div>
            </div>
            <div
              className="position-absolute bottom-0 loading-content d-flex flex-column
            align-items-start mb-5"
              style={{ zIndex: "300" }}
            >
              <span className="fs-3 text-white-50 fw-bolder">WELCOME</span>
              <span className="display-1 text-white fw-bolder">
                Wait a bit ...
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
