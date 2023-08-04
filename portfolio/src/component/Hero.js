import React from "react";
import image from "../admin.jpg";

const HeroSection = () => {
    return (
        <section className="section" id="home">
            <div className="row justify-content-between align-items-center g-5">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <img
                        src={image}
                        className="image-fluid"
                        width={"100%"}
                        height={"100%"}
                        alt=""
                    />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-start">
                    <h1 className="fw-semibold display-5">
                        Turning Vision Into Reality With Code And Design.
                    </h1>
                    <p className="fs-5">
                        Tran Trong Hien, Front-end Developer base on Can Tho, Viet Nam. As a
                        Front-end Developer, i am dedicated to turning ideas an design into
                        web applications.
                    </p>
                    <a
                        href={"/files/Tran-Trong-Hien-CV.pdf"}
                        type="button"
                        className="btn btn-dark fw-semibold"
                    >
                        Resume <i className="fa-regular fa-share-from-square"></i>
                    </a>
                    <a
                        className="text-decoration-underline ms-3 text-dark"
                        href={"mailTo:tronghientran18@gmail.com"}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
