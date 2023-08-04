import { React } from "react";

const SkillSection = () => {
    const cardStyle = {
        "border-radius": "7px",
        "box-shadow":
            "rgba(0, 0, 0, 0.4) 5px 5px, rgba(63, 63, 63, 0.3) 10px 10px," +
            " rgba(48, 48, 48, 0.2) 15px 15px, rgba(10, 8, 8, 0.1) " +
            " 20px 20px, rgba(136, 136, 136, 0.05) 25px 25px",
    };

    return (
        <section className="section">
            <h1 className="fw-bold mb-5 display-1">My Skill</h1>
            <div className="row justify-content-between align-items-center gap-3">
                <div className="mb-5 col-xl-3 col-lg-3 col-md-12 col-sm-12 card text-center text-lg-start text-xl-start" style={cardStyle}>
                    <div className="card-body">
                        <p className="card-title"><i className="fs-3 fa-solid fa-camera-retro"></i></p>
                        <p className="card-text fw-bold fs-2">FRONT-END</p>
                        <ul className="fs-4 fw-semibold">
                            <li>HTML,CSS</li>
                            <li>ReactJS</li>
                            <li>AngularJS</li>
                            <li>Bootstrap 5, Tailwind</li>
                        </ul>
                    </div>
                </div>
                <div className="mb-5 col-xl-3 col-lg-3 col-md-12 col-sm-12 card text-center text-lg-start text-xl-start" style={cardStyle}>
                    <div className="card-body">
                        <p className="card-title"><i className="fs-3 fa-solid fa-network-wired"></i></p>
                        <p className="card-text fw-bold fs-2">BACK-END</p>
                        <ul className="fs-4 fw-semibold">
                            <li>Spring Boot</li>
                            <li>Spring security</li>
                            <li>FireBase</li>
                            <li>SQL Server, MySQL</li>
                        </ul>
                    </div>
                </div>
                <div className="mb-5 col-xl-3 col-lg-3 col-md-12 col-sm-12 card text-center text-lg-start text-xl-start" style={cardStyle}>
                    <div className="card-body">
                        <p className="card-title"><i className="fs-3 fa-brands fa-codepen"></i></p>
                        <p className="card-text fw-bold fs-2">Other skills</p>
                        <ul className="fs-4 fw-semibold">
                            <li>Figma</li>
                            <li>Git, GitHub</li>
                            <li>JUnit4, TestNG</li>
                            <li>Photoshop</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillSection;