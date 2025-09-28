import React, { useEffect, useState } from "react";
import "./RecruitmentPage.css";
import circleImg from "../../../assets/images/candidates/circle.png";
import womanImg from "../../../assets/images/clients/woman.jpg"; // replace with your actual image

const RecruitmentPage: React.FC = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setAnimate(true);
    }, []);

    return (
        <div className="clients-recruitment-page">
            {/* Top Section */}
            <section className="clients-services-section">
                <div className={`clients-services-content ${animate ? "slide-in" : ""}`}>
                <h5 className="clients-sub-heading">Clients</h5>
                <h1 className="clients-main-heading">Our Recruitment Services</h1>
                <p>
                    BreezNext Ltd offers comprehensive recruitment services for all industries across the UK.
                    Whether you need to find new talent or cover specific roles, our team of experienced
                    consultants is dedicated to supporting you. We maintain a pool of qualified candidates
                    in various sectors, readily available in our database. Partner with us to find the right
                    staffing solutions that align with your business needs.
                </p>
                <p>
                    In the Commercial sector, BreezNext Ltd specializes in providing staffing solutions for a
                    wide range of roles. Our expertise in these areas ensures that we can assist you in
                    finding the ideal candidates to meet your specific requirements across key business
                    functions.
                </p>
                <p>
                    BreezNext Ltd excels in the Commercial and Industrial sectors, offering comprehensive
                    staffing solutions. Whether you need skilled workers for manufacturing processes or
                    other specialized roles, our expertise can assist you in identifying the right candidates
                    to meet your specific staffing needs.
                </p>
                </div>

                <div className="clients-services-image">
                <img src={womanImg} alt="Recruitment" className="clients-woman-img" />
                <img src={circleImg} alt="Green Circle" className="clients-circle-img" />
                </div>
            </section>

            {/* Bottom Section */}
            <section className="client-contact-section">
                <div className="wave"></div>
                <div className="client-contact-content">
                    <p>
                        Contact our recruitment team today at <b>07532848379, 02073771008</b> to connect with one
                        of our dedicated Team Members who specialize in your field. Give us a call and start the
                        conversation about your recruitment needs with our expert team.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default RecruitmentPage;
