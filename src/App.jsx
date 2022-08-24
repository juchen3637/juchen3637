import React from "react"
import './App.css'
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import AboutMe from "./components/aboutme"
import Project from "./components/project"
import ContactMe from "./components/contactme"
import Footer from "./components/footer"

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
      <Footer />
    </div>
  )
}

export default App
