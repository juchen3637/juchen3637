import React from "react"
import './projectdisplay.css'

export default function ProjectDisplay(props) {
    return (
        <div className="projectdisplay">
            <a href={props.link} target = "_blank">
                <img src={`../../${props.img}`} className="projectdisplay--image"/>
            </a>
            <p className="projectdisplay--description">{props.description}</p>
        </div>
        
    )
}