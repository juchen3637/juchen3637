import React from "react"
import './footer.css'
import githubLogo from "../assets/github.png"
import linkedinLogo from "../assets/linkedin.png"
import resumeIcon from "../assets/resume.png"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer--icon--container">
                <a href="https://github.com/juchen3637" target="_blank">
                    <img src={githubLogo} className="footer--icons"/>
                </a>
                <a href="https://www.linkedin.com/in/justin-chen-30b231227/" target="_blank">
                    <img src={linkedinLogo} className="footer--icons"/>
                </a>
                <a href="https://drive.google.com/file/d/1rl6HnmTIqB72B29wJujnfHv0efSGRPXH/view?usp=sharing" target="_blank">
                    <img src={resumeIcon} className="footer--icons"/>
                </a>
            </div>
        </footer>
    )
}