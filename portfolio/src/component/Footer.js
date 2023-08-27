import { React } from "react";

const FooterSection = () => {
  return (
    <footer className="container mt-5">
      <hr style={{ color: "#9e9e9e" }} />

      <div className="d-flex justify-content-between align-items-center">
        <span className="fs-6">2023 &copy; All Rights Reserved.</span>
        <span className="fs-5">
          Built with
          <i class="fa fa-heart-o ms-2" aria-hidden="true"></i> by
          TranHien
        </span>
        <span className="fs-5">
          <a
            className="text-dark fw-bold"
            href="mailTo:tronghientran18@gmail.com"
          >
            Say Hello
          </a>
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
