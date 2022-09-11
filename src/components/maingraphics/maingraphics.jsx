import React from "react"
import cloud1 from "../../assets/cloud1andbird.png"
import cloud2 from "../../assets/cloud2andbird.png"
import cloud3 from "../../assets/cloud3.png"
import cloud4 from "../../assets/cloud4.png"
import './maingraphics.css'

export default function MainGraphics() {
    return (
    <div className="graphic--container">
        <div className="graphic--row1">
            <img src={cloud1} />
            <img src={cloud2} />
        </div>
        <div className="graphic--row2">
            <img src={cloud3} />
            <img src={cloud4} />
        </div>
    </div>
    )
}