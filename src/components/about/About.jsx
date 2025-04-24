import React from 'react';
import './About.css';
import Image from '../../assets/abhi/abhi.jpg';
import Resume from '../../assets/abhi/CV.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="Profile" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Abhiyansh Vaishnav, a Computer Science Engineering student at Lovely Professional University, currently in my 3rd year (2022–2026).
                        </p>
                        <p className="about__description">
                            I'm passionate about technology and love exploring how things work — from building responsive websites to diving into the world of cybersecurity and cloud computing. My core programming skills include Java, Python, and JavaScript, and I actively work on full-stack projects using Django and React.
                        </p>
                        <p className="about__description">
                            I've completed certifications in networking, Python programming, and front-end development. I'm currently focused on strengthening my fundamentals in Automata Theory and building real-world projects that reflect my learning journey.
                        </p>
                        <p className="about__description">
                            Let's build something awesome together!
                        </p>

                        <h3 className="skills__title">Skills</h3>
                        <ul className="about__list">
                            <li className="about__list-item">
                                <span className="about__list-icon">💻</span>
                                <span className="about__list-text">Programming: Java | Python | JavaScript | C | C++</span>
                            </li>
                            <li className="about__list-item">
                                <span className="about__list-icon">🌐</span>
                                <span className="about__list-text">Web Development: HTML | CSS | Django | React</span>
                            </li>
                            <li className="about__list-item">
                                <span className="about__list-icon">🛠</span>
                                <span className="about__list-text">Tools & Platforms: Git | AWS | Firebase | SQLite | Linux</span>
                            </li>
                            <li className="about__list-item">
                                <span className="about__list-icon">🕵</span>
                                <span className="about__list-text">Cybersecurity: Nmap | Wireshark | Burp Suite | Kali Linux</span>
                            </li>
                            <li className="about__list-item">
                                <span className="about__list-icon">🎓</span>
                                <span className="about__list-text">Concepts: OOPS | DBMS | OS | Networking | Automata</span>
                            </li>
                        </ul>
                        <button className="btn about__btn" onClick={downloadResume}>Download CV</button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About