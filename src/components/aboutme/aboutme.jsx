import React from "react"
import './aboutme.css'
import face from "../../assets/face.jpg"

export default function AboutMe() {
    return (
        <div className="aboutme" id="aboutme">
            <img src={face} className="face"></img>
            <div className="text">
                <p className="title">ABOUT ME</p>
                <p className="description">my name is justin chen, i'm an aspiring app and front end developer. i'm currently a second year computer engineering major at stevens institute of technology</p>
            </div>
        </div>
    )
}