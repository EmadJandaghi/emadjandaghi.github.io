import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
    return (
        <div id="experience">
            <div className="items-container">
                <h1>Professional Experience</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle={{ borderRight: '7px solid white' }}
                        date="01/2025 - 04/2025"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faBriefcase} />}
                    >
                        <h3 className="vertical-timeline-element-title">Robotics Engineer/Scientist, Software Developer (Internship)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Hello Robot Inc, Martinez, CA</h4>
                        <p>
                            Researched and developed software to optimize Stretch Robot Lift performance. Enabled torque-current modeling for impedance control.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="01/2022 - 05/2025"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faBriefcase} />}
                    >
                        <h3 className="vertical-timeline-element-title">Graduate Research/Teaching Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">University of Rhode Island, Kingston, RI</h4>
                        <p>
                            Conducted research on robotics and control (Manipulators, Soft Robots, Autonomous Systems, UGVs, AUVs). Mentored +500 students in Mechatronics and Capstone Design Labs.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="12/2016 - 02/2020"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faBriefcase} />}
                    >
                        <h3 className="vertical-timeline-element-title">Technical Support Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Borna Gostar Sepehr Arian Co., Mashhad, Iran</h4>
                        <p>
                            Designed and analyzed structures, developed expertise in structural optimization and control systems.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Timeline;