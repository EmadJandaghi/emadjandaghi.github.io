import React from "react";
import award1 from '../assets/images/award1.png';
import award2 from '../assets/images/stem.png';
import award3 from '../assets/images/award3.png'; // Placeholder for new award image
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
                    <p>E. Jandaghi, X. Chen, C. Yuan. <i>IEEE/ASME AIM</i>, 2023. Awarded for outstanding contribution to "Motion Dynamics Modeling and Fault Detection of a Soft Trunk Robot".</p>
                </div>
                <div className="award">
                    <a href="https://www.uri.edu/news/2022/06/uri-faculty-volunteer-at-rhode-island-national-guard-stem-exploration-open-house-for-high-school-students/" target="_blank" rel="noreferrer">
                        <img src={award2} className="zoom" alt="STEM Innovations Volunteer Certifications" width="100%" />
                    </a>
                    <a href="https://www.uri.edu/news/2022/06/uri-faculty-volunteer-at-rhode-island-national-guard-stem-exploration-open-house-for-high-school-students/" target="_blank" rel="noreferrer">
                        <h2>STEM Innovations Certification</h2>
                    </a>
                    <p>E. Jandaghi. <i>Rhode Island National Guard STEM Program</i>, 2022-2024. Received multiple certifications for volunteering and inspiring high school students.</p>
                </div>
                <div className="award">
                    <a href="https://www.example.com/award3" target="_blank" rel="noreferrer">
                        <img src={award3} className="zoom" alt="Outstanding Researcher Award 2024" width="100%" />
                    </a>
                    <a href="https://www.example.com/award3" target="_blank" rel="noreferrer">
                        <h2>Graduate Summer Research Award</h2>
                    </a>
                    <p>Two-Time Graduate Summer Research Stipend Award 2024 & 2025.</p>
                </div>
            </div>
        </div>
    );
}

export default Awards;