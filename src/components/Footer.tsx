import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss';

function Footer() {
    return (
        <footer>
            <div>
                <a href="https://www.linkedin.com/in/emad-jandaghi" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                <a href="https://scholar.google.com/citations?user=fw-uLS0AAAAJ&hl=en" target="_blank" rel="noreferrer"><SchoolIcon /></a>
                <a href="https://github.com/EmadJandaghi" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                <a href="mailto:emad.jandaghi@gmail.com" rel="noreferrer"><EmailIcon /></a>
            </div>
            <p>A portfolio designed & built by <a href="https://github.com/EmadJandaghi" target="_blank" rel="noreferrer">Emad Jandaghi</a></p>
        </footer>
    );
}

export default Footer;