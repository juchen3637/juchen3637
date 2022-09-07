import React from "react"
import cloud from "../../assets/cloud.png"
import bird from "../../assets/bird.png"
import htmlLogo from "../../assets/html.png"
import cssLogo from "../../assets/css.png"
import javascriptLogo from "../../assets/javascript.png"
import reactLogo from "../../assets/react.png"
import './maingraphics.css'

export default function MainGraphics() {
    return (
    <div className="graphic--container">
        <div className="graphic--row1">
                <img src={cloud} className="cloud"></img>
                <img src={cloud} className="cloud"></img>
                <div className="graphic--birdrow">
                    <img src={bird} className="bird--1"></img>
                    <img src={bird} className="bird--2"></img>
                </div>
                <div className="graphic--logorow1">
                    <img src={htmlLogo} className="htmllogo"></img>
                    <img src={javascriptLogo} className="javascriptlogo"></img>
                </div>
        </div>
        <div className="graphic--row2">
                <img src={cloud} className="cloud"></img>
                <img src={cloud} className="cloud"></img>
                <div className="graphic--logorow2">
                    <img src={cssLogo} className="csslogo"></img>
                    <img src={reactLogo} className="reactlogo"></img>
                </div>
        </div>
    </div>
    )
}