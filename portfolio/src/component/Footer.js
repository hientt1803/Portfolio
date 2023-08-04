import { React } from "react";

const FooterSection = () => {
    return (
        <footer className="container">
            <div className="d-flex justify-content-between align-items-center">
                <span className="fs-54">2023 &copy; All Rights Reserved.</span>
                <span className="fs-5">Built with <i class="fa fa-heart-o text-danger" aria-hidden="true"></i> by TranHien</span>
                <span className="fs-5"><a className="text-dark" href="mailTo:tronghientran18@gmail.com">Say Hello</a></span>
            </div>
        </footer>
    );
};

export default FooterSection;
