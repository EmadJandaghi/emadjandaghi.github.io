import React from "react";
import award1 from '../assets/images/award1.png'; // Changed from mock01
import award2 from '../assets/images/stem.png'; // Changed from mock02
import '../assets/styles/Awards.scss';

function Awards() {
    return (
        <div className="awards-container" id="awards">
            <h1>Awards & Honors</h1>
            <div className="awards-grid">
                <div className="award">
                    <a href="https://web.uri.edu/engineering/students/2023/10/student-led-team-receives-artificial-intelligence-award/" target="_blank" rel="noreferrer">
                        <img src={award1} className="zoom" alt="Best Student Paper Finalist AIM 2023" width="100%" />
                    </a>
                    <a href="https://web.uri.edu/engineering/students/2023/10/student-led-team-receives-artificial-intelligence-award/" target="_blank" rel="noreferrer">
                        <h2>Best Student Paper Finalist</h2>
                    </a>
                    <p>Awarded for outstanding contribution to "Motion Dynamics Modeling and Fault Detection of a Soft Trunk Robot" at IEEE/ASME AIM 2023, June 2023.</p>
                </div>
                <div className="award">
                    <a href="https://www.uri.edu/news/2022/06/uri-faculty-volunteer-at-rhode-island-national-guard-stem-exploration-open-house-for-high-school-students/" target="_blank" rel="noreferrer">
                        <img src={award2} className="zoom" alt="STEM Innovations Volunteer Certifications" width="100%" />
                    </a>
                    <a href="https://www.uri.edu/news/2022/06/uri-faculty-volunteer-at-rhode-island-national-guard-stem-exploration-open-house-for-high-school-students/" target="_blank" rel="noreferrer">
                        <h2>STEM Innovations Certification</h2>
                    </a>
                    <p>Received multiple certifications for volunteering with Rhode Island National Guard STEM programs, inspiring high school students in 2022, 2023, and 2024.</p>
                </div>
            </div>
        </div>
    );
}

export default Awards;