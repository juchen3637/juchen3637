import React from "react"
import {useState} from "react"
import ProjectDisplay from "./projectdisplay.jsx"
import './project.css'

export default function Project() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    return (
        <div className="project" id="project">
            <p className="project--title">projects</p>
            <div className="project--menu--display">
                <div className="project--menu">
                        <button className={toggleState === 1 ? "project--active" : "project--notactive"}
                        onClick={() => toggleTab(1)}>
                            midterm skipper
                        </button >
                        <button className={toggleState === 2 ? "project--active" : "project--notactive"}
                        onClick={() => toggleTab(2)}>
                            station person counter
                        </button >
                        <p className="project--filler">
                            ......................
                        </p>
                        <button className={toggleState === 3 ? "project--active" : "project--notactive"}
                        onClick={() => toggleTab(3)}>
                            scoreboard counter
                        </button>
                        <p className="project--filler">
                            ......................
                        </p>
                        <button className={toggleState === 4 ? "project--active" : "project--notactive"}
                        onClick={() => toggleTab(4)}>
                            blackjack
                        </button>
                        <button className={toggleState === 5 ? "project--active" : "project--notactive"}
                        onClick={() => toggleTab(5)}>
                            random password generator
                        </button>
                        <button className={toggleState === 6 ? "project--active" : "project--notactive"}
                        onClick={() => toggleTab(6)}>
                            unit converter
                        </button>
                        <button className={toggleState === 7 ? "project--active" : "project--notactive"}
                        onClick={() => toggleTab(7)}>
                            digital business card
                        </button>
                        <button className={toggleState === 8 ? "project--active" : "project--notactive"}
                        onClick={() => toggleTab(8)}>
                            travel journal
                        </button>
                        <button className={toggleState === 9 ? "project--active" : "project--notactive"}
                        onClick={() => toggleTab(9)}>
                            portfolio website
                        </button>
                </div>
                <div>
                    <div className={toggleState === 1 ? "project--display--active" : "project--display"}>
                        <ProjectDisplay 
                            id = {1}
                            link = "https://github.com/juchen3637/midterm_skipper"
                            img = "midtermskipper.png"
                            description = "My first ever coding project, I did not know how to code much so majority of this project was copy, pasting, and splicing together components in Android Studio. This project features a calculator, a static google map, and a fun mini game. Used to skip my coding midterm."
                        />
                    </div>
                    <div className={toggleState === 2 ? "project--display--active" : "project--display"}>
                        <ProjectDisplay 
                            id = {2}
                            link = "https://juchen3637.github.io/Web-Development-2022-2023/stationcounter/index.html"
                            img = "stationpersoncounter.png"
                            description = "Very simple passenger counter that increases by 1 each time and is able to save previous entries. My first JavaScript project, learned how to apply basic functions to a static HTML website."
                        />
                    </div>
                    <div className={toggleState === 3 ? "project--display--active" : "project--display"}>
                        <ProjectDisplay 
                            id = {3}
                            link = "https://juchen3637.github.io/Web-Development-2022-2023/basketball/index.html"
                            img = "scoreboardcounter.png"
                            description = "A scoreboard that keeps track of points from home and away team, specifically used for basketball. Also able to wipe away previous points and start a new game."
                        />
                    </div>
                    <div className={toggleState === 4 ? "project--display--active" : "project--display"}>
                        <ProjectDisplay 
                            id = {4}
                            link = "https://juchen3637.github.io/Web-Development-2022-2023/blackjack/index.html"
                            img = "blackjack.png"
                            description = "Blackjack game coded via JavaScript. Learned how to use more advanced JavaScript functions such as for loops, if and else statements, and random number generating functions."
                        />
                    </div>
                    <div className={toggleState === 5 ? "project--display--active" : "project--display"}>
                        <ProjectDisplay 
                            id = {5}
                            link = "https://juchen3637.github.io/Web-Development-2022-2023/password/index.html"
                            img = "randompasswordgenerate.png"
                            description = "This project is able to generate 2 completely randomized passwords using an array of characters avalible for input on the keyboard."
                        />
                    </div>
                    <div className={toggleState === 6 ? "project--display--active" : "project--display"}>
                        <ProjectDisplay 
                            id = {6}
                            link = "https://juchen3637.github.io/Web-Development-2022-2023/unitconverter/index.html"
                            img = "unitconverter.png"
                            description = "A basic unit converter that displays the number inputted in meter/feet, liter/gallon, and pound/kilo. Learned how to pass parameters through functions and how to use template strings."
                        />
                    </div>
                    <div className={toggleState === 7 ? "project--display--active" : "project--display"}>
                        <ProjectDisplay 
                            id = {7}
                            link = "https://justchenbusycard.web.app/"
                            img = "digitalbusinesscard.png"
                            description = "As the name suggests, it is a digital business card that has my contact information and a little about what I am interested in. My first ever React project that taught me how to create custom components and how to integrate them together."
                        />
                    </div>
                    <div className={toggleState === 8 ? "project--display--active" : "project--display"}>
                        <ProjectDisplay 
                            id = {8}
                            link = "https://justchenaroundtheworld.web.app/"
                            img = "traveljournal.png"
                            description = "Small React project that taught me how to use properties to make reusuable react components. Disclaimer I do not travel very often and the data used are random and preset, I wish I traveled to these places."
                        />
                    </div>
                    <div className={toggleState === 9 ? "project--display--active" : "project--display"}>
                        <ProjectDisplay 
                            id = {9}
                            link = "https://github.com/juchen3637/juchen3637"
                            img = "websiteportfolio.png"
                            description = "My biggest project so far using all of what I learned over the course of summer 2022. This website portfolio makes use of my HTML, CSS, JavaScript, and React skills. "
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}