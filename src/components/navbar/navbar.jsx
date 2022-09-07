import React from "react"
import {Link} from "react-scroll"
import './navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar--flex">
            <Link to="home" spy={true} smooth={true} offset={-200} duration={500} className="navbar--name">justin chen</Link>
            <ul className="navbar--menu">
                <li className="navbar--item">
                    <Link to="aboutme" spy={true} smooth={true} offset={500} duration={500}>about me</Link>
                </li>
                <li className="navbar--item">
                    <Link to="project" spy={true} smooth={true} offset={-150} duration={500}>projects</Link>
                </li>
                <li className="navbar--item">
                    <Link to="contactme" spy={true} smooth={true} offset={-150} duration={500}>contact</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}