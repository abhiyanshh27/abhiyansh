import React from "react";
import "./Certifications.css";
import { RiExternalLinkLine } from "react-icons/ri";
import { motion } from "framer-motion";

const certifications = [
    {
      "title": "The Bits and Bytes of Computer Networking",
      "platform": "Coursera (Google)",
      "skills": ["Networking Fundamentals", "TCP/IP", "DNS", "Troubleshooting"],
      "date": "2023",
      "link": "https://www.coursera.org/account/accomplishments/verify/BFFYY4ZXAWH6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
      "title": "Python (Basic)",
      "platform": "HackerRank",
      "skills": ["Python syntax", "loops", "data types", "conditionals"],
      "date": "2023",
      "link": "https://www.hackerrank.com/certificates/fa0fa771e0c6"
    },
    {
      "title": "Problem Solving (Basic)",
      "platform": "HackerRank",
      "skills": ["Logic Building", "Conditionals", "Loops", "Efficiency"],
      "date": "2023",
      "link": "https://www.hackerrank.com/certificates/6a4df26574db"
    },
    {
      "title": "Microsoft Certified: Azure Administrator Associate",
      "platform": "Microsoft",
      "skills": ["Azure VMs", "Storage", "Virtual Networks", "IAM", "Monitoring"],
      "date": "2023",
      "link": "https://learn.microsoft.com/en-in/users/abhiyanshvaishnav-1295/credentials/5c6694e8236cc700"
    },
    {
      "title": "Microsoft Azure AI Fundamentals AI-900",
      "platform": "Coursera",
      "skills": ["AI Concepts", "Machine Learning", "Azure Cognitive Services", "Neural Networks"],
      "date": "2023",
      "link": "https://www.coursera.org/account/accomplishments/specialization/SJC0CRCMXTCP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12ne"
    }
  ];
const Certifications = () => {
    return (
        <section className="certifications container section" id="certifications">
            <h2 className="section__title">Certifications</h2>

            <div className="certifications__container grid">
                {certifications.map((cert, index) => (
                    <motion.div
                        layout
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="certification__card"
                        key={index}
                    >
                        <div className="certification__content">
                            <h3 className="certification__title">{cert.title}</h3>
                            <div className="certification__platform">
                                <span className="platform__name">{cert.platform}</span>
                                <span className="certification__date">{cert.date}</span>
                            </div>
                            <div className="certification__skills">
                                {cert.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill__tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="certification__link"
                        >
                            <RiExternalLinkLine />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;