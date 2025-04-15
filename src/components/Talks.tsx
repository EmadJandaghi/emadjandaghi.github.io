import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Talks.scss';

function Talks() {
    return (
        <div id="talks">
            <div className="items-container">
                <h1>Talks and Participations</h1>
                <VerticalTimeline className="talks-vertical-timeline">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--talk"
                        contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle={{ borderRight: '7px solid white' }}
                        date="Sep 2024"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faMicrophone} />}
                    >
                        <h3 className="vertical-timeline-element-title">Environment-Independent Formation Learning Control of Multi-AUVs</h3>
                        <h4 className="vertical-timeline-element-subtitle">Northeast Robotics Colloquium</h4>
                        <p>Presented adaptive control strategies for multi-AUV coordination under uncertainty.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--talk"
                        contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle={{ borderRight: '7px solid white' }}
                        date="Sep 2024"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faMicrophone} />}
                    >
                        <h3 className="vertical-timeline-element-title">Advances in Robotics Control and Multi-Agent Systems</h3>
                        <h4 className="vertical-timeline-element-subtitle">Northeastern University, Invited Talk</h4>
                        <p>Discussed innovations in control frameworks for multi-agent robotic systems.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--talk"
                        contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle={{ borderRight: '7px solid white' }}
                        date="Jul 2024"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faMicrophone} />}
                    >
                        <h3 className="vertical-timeline-element-title">Motion Dynamics Modeling and Fault Detection of a Soft Trunk Robot</h3>
                        <h4 className="vertical-timeline-element-subtitle">AIM 2024, Oral Presentation</h4>
                        <p>Shared advancements in soft robotics dynamics and fault detection techniques.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--talk"
                        contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle={{ borderRight: '7px solid white' }}
                        date="Dec 2023"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faMicrophone} />}
                    >
                        <h3 className="vertical-timeline-element-title">Multi-Robot Systems Coordination</h3>
                        <h4 className="vertical-timeline-element-subtitle">IEEE Symposium on Multi-Robot Systems</h4>
                        <p>Explored coordination strategies for multi-robot environments.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--talk"
                        contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle={{ borderRight: '7px solid white' }}
                        date="Oct 2023"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faMicrophone} />}
                    >
                        <h3 className="vertical-timeline-element-title">Dynamics Learning-Based Fault Isolation</h3>
                        <h4 className="vertical-timeline-element-subtitle">IEEE CSS Houston Webinar, Invited Talk</h4>
                        <p>Presented fault isolation methods for robotic systems using dynamics learning.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--talk"
                        contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle={{ borderRight: '7px solid white' }}
                        date="Jun 2023"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faMicrophone} />}
                    >
                        <h3 className="vertical-timeline-element-title">Soft Robotics Control and Modeling</h3>
                        <h4 className="vertical-timeline-element-subtitle">AIM 2023, Oral Presentation</h4>
                        <p>Discussed control and modeling techniques for soft robotic systems.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--talk"
                        contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle={{ borderRight: '7px solid white' }}
                        date="May 2023"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faMicrophone} />}
                    >
                        <h3 className="vertical-timeline-element-title">Fault Detection in Soft Robotics</h3>
                        <h4 className="vertical-timeline-element-subtitle">ACC 2023, Oral and Poster Presentation</h4>
                        <p>Presented oral and poster sessions on fault detection for soft robots.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--talk"
                        contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle={{ borderRight: '7px solid white' }}
                        date="May 2023"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faMicrophone} />}
                    >
                        <h3 className="vertical-timeline-element-title">Robotics Innovation and Applications</h3>
                        <h4 className="vertical-timeline-element-subtitle">Robotics Summit & Device Talks</h4>
                        <p>Shared insights on robotics advancements and their practical applications.</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Talks;