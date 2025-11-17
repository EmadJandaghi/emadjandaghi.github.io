import React from "react";
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import project6 from '../assets/images/project6.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>PhD Research Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/EmadJandaghi" target="_blank" rel="noreferrer"><img src={project1} className="zoom" alt="VR-Linked Robotic Interaction" width="100%" /></a>
                    <a href="https://github.com/EmadJandaghi" target="_blank" rel="noreferrer"><h2>VR-Linked Robotic Interaction</h2></a>
                    <p>Developed an interactive robotic system for real-time physical manipulation of a robotic arm mirrored by a drone in VR. Integrated motion planning, trajectory generation, and VR with haptic feedback using ROS, Python, and Gazebo for synchronized control and visualization. (Ongoing)</p>
                </div>
                <div className="project">
                    <a href="https://github.com/EmadJandaghi/robotics-autonomous-intelligent-inventory-manager" target="_blank" rel="noreferrer"><img src={project6} className="zoom" alt="Autonomous Intelligent Inventory Manager" width="100%" /></a>
                    <a href="https://github.com/EmadJandaghi/robotics-autonomous-intelligent-inventory-manager" target="_blank" rel="noreferrer"><h2>Autonomous Intelligent Inventory Manager</h2></a>
                    <p>An autonomous inventory management system for the DeepMind robot, featured line navigation, AOI color detection, YOLOv8 object recognition, and intelligent shelf inventory verification. integrates Gazebo, RViz2, and custom ROS2 messages for a complete perception and autonomy pipeline.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/EmadJandaghi/learning-control-multi-robotic-arm" target="_blank" rel="noreferrer"><img src={project2} className="zoom" alt="Adaptive Learning Control" width="100%" /></a>
                    <a href="https://github.com/EmadJandaghi/learning-control-multi-robotic-arm" target="_blank" rel="noreferrer"><h2>Environment-Independent Adaptive Learning Control</h2></a>
                    <p>Designed a controller to identify nonlinear uncertain dynamics of robotic arms and AUVs without prior knowledge of dynamical parameters. Implemented a two-layer framework for multi-agent systems to adapt to unknown environments and track leader signals using Python and ROS.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/EmadJandaghi/soft-trunk-robot-dynamics" target="_blank" rel="noreferrer"><img src={project3} className="zoom" alt="Soft Robot Control" width="100%" /></a>
                    <a href="https://github.com/EmadJandaghi/soft-trunk-robot-dynamics" target="_blank" rel="noreferrer"><h2>Control, Modeling, and Fault Detection of Soft Robots</h2></a>
                    <p>Implemented fault detection and isolation algorithms for soft robots. Modeled dynamics with advanced trajectory generation and optimization techniques using Python and ROS, improving reliability during testing.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/EmadJandaghi/soft-trunk-robot-dynamics" target="_blank" rel="noreferrer"><img src={project4} className="zoom" alt="Heterogeneous AI Computation" width="100%" /></a>
                    <a href="https://github.com/EmadJandaghi/soft-trunk-robot-dynamics" target="_blank" rel="noreferrer"><h2>Heterogeneous Computation for AI</h2></a>
                    <p>Explored AI acceleration using CPU-GPU offloading with CUDA for large-scale robot motion dynamics estimation. Demonstrated efficiency in training models with Python and GPU libraries.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/EmadJandaghi/sawyer-robot-simulation" target="_blank" rel="noreferrer"><img src={project5} className="zoom" alt="Sawyer Robot Modeling" width="100%" /></a>
                    <a href="https://github.com/EmadJandaghi/sawyer-robot-simulation" target="_blank" rel="noreferrer"><h2>Sawyer Robot Dynamics Modeling</h2></a>
                    <p>Modeled and simulated the Sawyer robotic arm, focusing on kinematics, motion planning, and trajectory optimization. Developed control systems and analyzed joint dynamics using Python and ROS.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;