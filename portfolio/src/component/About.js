import { React } from "react";
import image from "../authorImage.jpg";

const AboutSection = () => {
    return (
        <section className="section" id="about">
            <h1 className="display-1 text-center fw-bold mb-5">Passion Fuels Purpose!</h1>
            <div className="row justify-content-between align-items-center g-2">
                <div className="col-xl-3 col-lg-3 col-sm-12 col-sm-12 text-start">
                    <h3 className="text-secondary">BIOGRAPHY</h3>
                    <p className="fs-5">Hi, i'm <strong>Tran Trong Hien</strong>, a <strong>Front-end Developer</strong>.
                        Now i'm in school with 6 months experience but i always learn new things
                        everyday to make myself better.
                    </p>
                    <p className="fs-5">I'm love design and devlop beautiful UI. Beside design and coding
                        I'm also in love with instrument. Playing guitar, piano in freetime is very comfortable.
                    </p>
                    <a href={"mailTo:tronghientran18@gmail.com"} className="btn btn-dark">
                        <span className="fw-semibold fs-4">Hire me</span>
                        <i className="fa-regular ms-2 fa-share-from-square"></i>
                    </a>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-12 col-sm-12">
                    <img
                        src={image}
                        className="image-fluid"
                        width={"100%"}
                        height={"95%"}
                        alt="authorImage"
                    />
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-12 col-sm-12 text-end">
                    <h3 className="text-secondary">EDUCATION</h3>
                    <p className="fs-5"><strong>FPT Polytechnic </strong> Can Tho college.</p>
                    <p className="fs-5">Average marks: <strong>8.5</strong></p>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;