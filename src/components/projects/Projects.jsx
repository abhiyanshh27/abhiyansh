import React from 'react';
import './Projects.css';

const data = [
    {
        id: 1,
        title: "Basic Vulnerability Scanner",
        techStack: ['Python', 'Flask', 'Nmap', 'Wireshark'],
        description:
            "A web-based tool that scans target domains for open ports and basic vulnerabilities",
        features: ["Port Scanning via Nmap", "Export Results as PDF", "Email Notifications"]
    },
    {
        id: 2,
        title: "Web Development",
        techStack: ['HTML', 'SQLite', 'Django', 'React'],
        description:
            "A full-stack reminder app that helps users schedule tasks and receive alerts.",
        features: ["Add Edit delete reminders", "User Authentication (Sign up/Login", "Reminder notifications"]
    },
    {
        id: 3,
        title: "Personal Album",
        techStack: ['HTML', 'CSS', 'Javascript', 'Firebase'],
        description:
            "A secure personal photo album where users can upload, view, and organize their memories",
        features: ["Firebase Authentication", "Categorize and View Albums", "Image Upload with Preview"]
    },
];

const Projects = () => {
    return (
        <section className="projects container section" id="projects">
            <h2 className="section__title">Projects</h2>

            <div className="projects__container grid">
                {data.map(({ id, title, description, techStack, features }) => {
                    return (
                        <div className="projects__card" key={id}>
                            <h3 className="projects__title">{title}</h3>
                            <p className="projects__description">{description}</p>
                            
                            <div className="projects__tech">
                                <h4>Tech Stack:</h4>
                                <div className="tech-tags">
                                    {techStack.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="projects__features">
                                <h4>Key Features:</h4>
                                <ul>
                                    {features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects