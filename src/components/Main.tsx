import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import emadImage from '../assets/images/emad.jpg';
import '../assets/styles/Main.scss';

function Main() {
    return (
        <div className="container">
            <div className="about-section">
                <div className="image-wrapper">
                    <img src={emadImage} alt="Emad Jandaghi" />
                </div>
                <div className="content">
                    <div className="social_icons">
                        <a href="https://www.linkedin.com/in/emad-jandaghi" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                        <a href="https://scholar.google.com/citations?user=fw-uLS0AAAAJ&hl=en" target="_blank" rel="noreferrer"><SchoolIcon /></a>
                        <a href="https://github.com/EmadJandaghi" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                        <a href="mailto:emad.jandaghi@gmail.com" rel="noreferrer"><EmailIcon /></a>
                    </div>
                    <h1 style={{ fontSize: '3.2rem' }}>Emad Jandaghi</h1>
                    <p style={{ fontSize: '1.4rem' }}>PhD Candidate in Robotics and Control</p>
                    <p style={{ fontSize: '1rem' }}>University of Rhode Island, Kingston, RI, USA</p>
                    <div className="mobile_social_icons">
                        <a href="https://www.linkedin.com/in/emad-jandaghi" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                        <a href="https://scholar.google.com/citations?user=fw-uLS0AAAAJ&hl=en" target="_blank" rel="noreferrer"><SchoolIcon /></a>
                        <a href="https://github.com/EmadJandaghi" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                        <a href="mailto:emad.jandaghi@gmail.com" rel="noreferrer"><EmailIcon /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;