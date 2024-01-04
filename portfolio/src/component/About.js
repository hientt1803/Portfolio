import { React } from "react";
import image from "../assets/image/authorImage.jpg";

const AboutSection = () => {
  return (
    <section className="section" id="about">
      <div className="container-xxl">
        {/* About My Self */}
        <div className="about-introduce">
          <span className="hidden-element fs-6" style={{ color: "#9e9e9e" }}>
            A FEW WORDS ABOUT ME
          </span>
          <p className="hidden-element fs-1 fw-bolder">
            I'm Tran Trong Hien, a Full Stack Developer. I've graduate since
            19/12/2023 in FPT Polytechnic college Can Tho and i've 6 months
            experience with Front-end and Back-end programing but i always learn
            new things everyday to make myself better and better.
          </p>
          <p
            className="hidden-element fs-5 my-5 fw-bold px-5 px-sm-0"
            style={{ color: "#9e9e9e" }}
          >
            I'm in love design and devlopment a beautiful UI. Beside design and
            coding I'm also in love with instrument. Playing guitar, piano in
            freetime is very comfortable.
          </p>
          <div className="hidden-element author-img d-block">
            <img
              src={image}
              className="image-fluid"
              width={"50%"}
              height={"50%"}
              alt="authorImage"
              style={{
                filter:
                  "brightness(85%) contrast(100%) saturate(20%) brightness(150%)",
              }}
            />
          </div>
          <div className="hidden-element">
            <a
              href={"/files/Tran-Trong-Hien-CV.pdf"}
              type="button"
              className="btn btn-outline-dark fw-semibold fs-4 w-sm-50 w-100 my-5 p-3"
            >
              Download Resume
            </a>
          </div>
        </div>
        <hr style={{ color: "#9e9e9e" }} />

        {/* My SKill */}
        <div className="yourself skill my-5">
          <span className="hidden-element fs-6" style={{ color: "#9e9e9e" }}>
            DEVELOPMENT - DESIGN - OTHER
          </span>
          <p className="hidden-element fs-1 fw-bolder mb-5">Personal Skill</p>
          <div className="row justify-content-center">
            {/* Column  */}
            <div className="hidden-element col-xl-6 col-lg-6 col-md-6 col-sm-12 fs-5 fw-bold">
              <div className="fs-5 my-2" style={{ color: "#9e9e9e" }}>
                FRONT-END
              </div>
              <div
                className="skills d-flex justify-content-center align-items-center flex-wrap"
                style={{ padding: "0 100px" }}
              >
                {/* Item */}
                <span className="skill item">
                  <span className="fs-5">HTML5, CSS3</span>
                  <span className="mx-2" style={{ color: "#9e9e9e" }}>
                    /
                  </span>
                </span>
                {/* Item */}
                <span className="skill item">
                  <span className="fs-5">Javascript</span>
                  <span className="mx-2" style={{ color: "#9e9e9e" }}>
                    /
                  </span>
                </span>
                {/* Item */}
                <span className="skill item">
                  <span className="fs-5">Redux</span>
                  <span className="mx-2" style={{ color: "#9e9e9e" }}>
                    /
                  </span>
                </span>
                <span className="skill item">
                  <span className="fs-5">ReactJS</span>
                  <span className="mx-2" style={{ color: "#9e9e9e" }}>
                    /
                  </span>
                </span>
                <span className="skill item">
                  <span className="fs-5">NextJS</span>
                  <span className="mx-2" style={{ color: "#9e9e9e" }}>
                    /
                  </span>
                </span>
                <span className="skill item">
                  <span className="fs-5">Tailwind, Bootstrap</span>
                  <span className="mx-2" style={{ color: "#9e9e9e" }}>
                    /
                  </span>
                </span>
                <span className="skill item">
                  <span className="fs-5">Ant Design, Mantine</span>
                </span>
              </div>
            </div>
            {/* Column  */}
            <div className="hidden-element col-xl-6 col-lg-6 col-md-6 col-sm-12 fs-5 fw-bold">
              <div className="fs-5 my-2" style={{ color: "#9e9e9e" }}>
                BACK-END
              </div>
              <div
                className="skills d-flex justify-content-center align-items-center flex-wrap"
                style={{ padding: "0 100px" }}
              >
                {/* Item */}
                <span className="skill item">
                  <span className="fs-5">Java, SpringBoot, Java Swing</span>
                  <span className="mx-2" style={{ color: "#9e9e9e" }}>
                    /
                  </span>
                </span>
                {/* Item */}
                <span className="skill item">
                  <span className="fs-5">RESTfull APIs</span>
                  <span className="mx-2" style={{ color: "#9e9e9e" }}>
                    /
                  </span>
                </span>
                {/* Item */}
                <span className="skill item">
                  <span className="fs-5">Postman</span>
                  <span className="mx-2" style={{ color: "#9e9e9e" }}>
                    /
                  </span>
                </span>
                <span className="skill item">
                  <span className="fs-5">NodeJS(basic)</span>
                  <span className="mx-2" style={{ color: "#9e9e9e" }}>
                    /
                  </span>
                </span>
                <span className="skill item">
                  <span className="fs-5">SQL Server, MySQL, MongoDB</span>
                </span>
              </div>
            </div>
            {/* Column  */}
            <div className="hidden-element col-12 mx-auto my-5 fs-5 fw-bold">
              <div className="fs-5 my-2" style={{ color: "#9e9e9e" }}>
                OTHER
              </div>
              <div
                className="skills d-flex justify-content-center align-items-center flex-wrap"
                style={{ padding: "0 100px" }}
              >
                {/* Item */}
                <span className="skill item">
                  <span className="fs-5">Figma</span>
                  <span className="mx-2" style={{ color: "#9e9e9e" }}>
                    /
                  </span>
                </span>
                {/* Item */}
                <span className="skill item">
                  <span className="fs-5">Git, Github</span>
                  <span className="mx-2" style={{ color: "#9e9e9e" }}>
                    /
                  </span>
                </span>
                {/* Item */}
                <span className="skill item">
                  <span className="fs-5">Junit, UnitTest</span>
                  <span className="mx-2" style={{ color: "#9e9e9e" }}>
                    /
                  </span>
                </span>
                {/* Item */}
                <span className="skill item">
                  <span className="fs-5">Trello</span>
                </span>
              </div>
            </div>
            <div className="hidden-element col-6 my-5 fs-5 fw-bold"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
