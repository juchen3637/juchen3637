import React from "react"
import './navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <a href="" className="navbar--name">justin chen</a>
            <ul className="navbar--menu">
                <li className="navbar--item">
                    <a href="">about me</a>
                </li>
                <li className="navbar--item">
                    <a href="">projects</a>
                </li>
                <li className="navbar--item">
                    <a href="">contact</a>
                </li>
            </ul>
        </nav>
    )
}