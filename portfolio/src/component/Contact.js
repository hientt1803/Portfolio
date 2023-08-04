import { React } from "react";

const ContactSection = () => {
    return (
        <section className="section" id="contact">
            <h1 className="display-2 fw-bold mb-5">We can do more interested things together!</h1>
            <ul className="d-flex justify-content-center align-items-center list-unstyled gap-5 fw-semibold">
                <li>
                    <h4>Phone Number: <a className="text-dark-emphasis" href="tel:+84706802119">0706802119</a></h4>
                </li>
                <li>
                    <h4>Personal Email: <a className="text-dark-emphasis" href="mailTo:tronghientran18@gmail.com">tronghientran18@gmail.com</a></h4>
                </li>
            </ul>

        </section>
    );
};

export default ContactSection;
