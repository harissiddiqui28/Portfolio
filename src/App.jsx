import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Foot from "./components/Foot";
import Skills from "./components/Skills";






function App() {
  return (
    <>
  
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Foot/>
    </>
  );
}

export default App;
