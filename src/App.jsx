import React from "react"
import './App.css'
import Navbar from "./components/navbar/navbar"
import Hero from "./components/hero/hero"
import MainGraphics from "./components/maingraphics/maingraphics"
import AboutMe from "./components/aboutme/aboutme"
import Project from "./components/projectdisplay/project"
import ContactMe from "./components/contactme/contactme"
import Footer from "./components/footer/footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MainGraphics />
      <AboutMe />
      <hr className="divider"></hr>
      <Project />
      <hr className="divider"></hr>
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
