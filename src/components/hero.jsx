import React from "react"
import cloud from "../assets/cloud.png"
import bird from "../assets/bird.png"
import htmlLogo from "../assets/html.png"
import cssLogo from "../assets/css.png"
import javascriptLogo from "../assets/javascript.png"
import reactLogo from "../assets/react.png"
import './hero.css'

export default function Hero() {
    return (
        <hero className="hero">
            <p className="welcome">welcome to my portfolio</p>
            <span>
                <img src={cloud} className="cloud--1"></img>
                <img src={bird} className="bird--1"></img>
                <img src={htmlLogo} className="htmlLogo"></img>
            </span>
            <span>
                <img src={cloud} className="cloud--2"></img>
                <img src={cssLogo} className="cssLogo"></img>
            </span>
            <span>
                <img src={cloud} className="cloud--3"></img>
                <img src={bird} className="bird--2"></img>
                <img src={javascriptLogo} className="javascriptLogo"></img>
            </span>
            <span>
                <img src={cloud} className="cloud--4"></img>
                <img src={reactLogo} className="reactLogo"></img>
            </span>
        </hero>
    )
}