import React from "react"
import './App.css'
import Navbar from "./components/navbar.jsx"
import Hero from "./components/hero.jsx"
import AboutMe from "./components/aboutme.jsx"
import Project from "./components/project.jsx"
import ContactMe from "./components/contactme.jsx"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <hr className="divider"></hr>
      <Project />
      <hr className="divider"></hr>
      <ContactMe />
    </div>
  )
}

export default App
