import React from "react";
import mock01 from '../assets/images/auv.png';
import mock02 from '../assets/images/arm.png';
import mock03 from '../assets/images/soft2.png';
import mock04 from '../assets/images/soft1.png';
import mock05 from '../assets/images/soft0.png';
import mock06 from '../assets/images/msc.png';
import '../assets/styles/Publications.scss';

function Publications() {
    return (
        <div className="publications-container" id="publications">
            <h1>Publications</h1>
            <div className="publications-grid">
                <div className="publication">
                    <a href="https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2024.1491907/full" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="Adaptive Formation Learning Control" width="100%" /></a>
                    <a href="https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2024.1491907/full" target="_blank" rel="noreferrer"><h2>Adaptive Formation Learning Control for Cooperative AUVs Under Complete Uncertainty</h2></a>
                    <p>E. Jandaghi, M. Zhou, P. Stegagno, C. Yuan. <i>Frontiers in Robotics and AI</i>, 2024. Focused on adaptive control for AUVs under complete uncertainty.</p>
                </div>
                <div className="publication">
                    <a href="https://ieeexplore.ieee.org/abstract/document/10637197" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="Composite Distributed Learning" width="100%" /></a>
                    <a href="https://ieeexplore.ieee.org/abstract/document/10637197" target="_blank" rel="noreferrer"><h2>Composite Distributed Learning of Multi-Agent Systems with Complete Uncertain Dynamics</h2></a>
                    <p>E. Jandaghi, D. Stein, A. Hoburg, P. Stegagno, M. Zhou, C. Yuan. <i>Advanced Intelligent Mechatronics</i>, 2024. Explored synchronization of nonlinear multi-agent systems.</p>
                </div>
                <div className="publication">
                    <a href="https://ieeexplore.ieee.org/abstract/document/10196206" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="Soft Trunk Robot Fault Detection" width="100%" /></a>
                    <a href="https://ieeexplore.ieee.org/abstract/document/10196206" target="_blank" rel="noreferrer"><h2>Motion Dynamics Modeling and Fault Detection for a Soft Trunk Robot</h2></a>
                    <p>E. Jandaghi, X. Chen, C. Yuan. <i>IEEE/ASME AIM</i>, 2023. Best Student Paper Finalist Award.</p>
                </div>
                <div className="publication">
                    <a href="https://ieeexplore.ieee.org/abstract/document/10156314" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="Soft Trunk Fault Isolation" width="100%" /></a>
                    <a href="https://ieeexplore.ieee.org/abstract/document/10156314" target="_blank" rel="noreferrer"><h2>Dynamics Learning-Based Fault Isolation for a Soft Trunk Robot</h2></a>
                    <p>J. Zhang, X. Chen, E. Jandaghi, W. Zeng, M. Zhou, C. Yuan. <i>American Control Conference (ACC)</i>, 2023.</p>
                </div>
                <div className="publication">
                    <a href="https://ieeexplore.ieee.org/abstract/document/10002179" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="Soft Trunk Robot Control" width="100%" /></a>
                    <a href="https://ieeexplore.ieee.org/abstract/document/10002179" target="_blank" rel="noreferrer"><h2>Automatic Control of a Soft Trunk Robot Actuated by Strings</h2></a>
                    <p>J. Trivisonno, C. Amaral, L. Garofalo, X. Chen, E. Jandaghi, C. Yuan. <i>IEEE MIT URTC</i>, 2022.</p>
                </div>
                <div className="publication">
                    <a href="https://link.springer.com/article/10.1007/s00366-020-00960-w" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="Time Integration Scheme" width="100%" /></a>
                    <a href="https://link.springer.com/article/10.1007/s00366-020-00960-w" target="_blank" rel="noreferrer"><h2>New Model-Dependent Time Integration Scheme with Numerical Damping for Dynamic Analysis</h2></a>
                    <p>A. Namadchi, E. Jandaghi, J. Alamatian. <i>Journal of Engineering with Computers</i>, 2021. Proposed a new time integration scheme.</p>
                </div>
            </div>
        </div>
    );
}

export default Publications;