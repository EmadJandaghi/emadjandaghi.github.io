import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faMicrochip, faCogs, faWrench } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Sawyer Robot",
    "ROS",
    "Python",
    "MATLAB",
    "Simulink",
    "Gazebo",
    "VR Integration",
    "Haptic Feedback",
    "Kinematics",
    "Dynamics",
    "PD Control",
    "Trajectory Planning"
];

const labelsSecond = [
    "Soft Robotics",
    "Neural Networks",
    "RBFNN",
    "C++",
    "Raspberry Pi",
    "Arduino",
    "NumPy",
    "CuPy",
    "Fault Detection",
    "Real-Time Control",
    "Embedded Programming",
    "Data-Driven Modeling"
];

const labelsThird = [
    "Adaptive Control",
    "Multi-Agent Systems",
    "Python",
    "MATLAB",
    "AUVs",
    "UGVs",
    "Lyapunov Stability",
    "Trajectory Tracking",
    "Nonlinear Dynamics"
];

const labelsFourth = [
    "Impedance Control",
    "Torque Estimation",
    "Stretch Robot",
    "Python",
    "ROS",
    "C++",
    "Embedded Control",
    "Mechatronics",
    "Motor Calibration",
    "Git",
    "Linux",
    "Hardware Abstraction"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faRobot} size="3x" />
                        <h3>Robotics Simulation & VR-HRI</h3>
                        <p>Developed a simulation and control framework for the Sawyer robot using MATLAB/Simulink, covering kinematics, dynamics, and PD control. Building a VR-based human-robot interaction system with ROS and Python for real-time motion planning and haptic feedback.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faMicrochip} size="3x" />
                        <h3>Embedded AI & Soft Robotics</h3>
                        <p>Created real-time dynamics modeling and fault detection for soft robots using adaptive neural networks. Integrated microcontrollers and firmware, leveraging CPU/GPU computation with Python and C++ for efficient control.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faCogs} size="3x" />
                        <h3>Adaptive Controller for Autonomous Robots</h3>
                        <p>Designed an environment-independent control framework for robotic arms and AUVs, adapting to uncertain dynamics in real-time using a two-layer decentralized system with Python and MATLAB for robust trajectory tracking.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faWrench} size="3x" />
                        <h3>Stretch Lift Control Optimization</h3>
                        <p>Contributed to software development for optimizing the Stretch Robot Lift performance at Hello Robot. Designed an impedance controller using torque-current calibration without accelerometers, extending the control stack with Python, ROS, and C++.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFourth.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;