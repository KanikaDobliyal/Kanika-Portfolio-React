import React from "react";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Projects from "./Components/Projects";


function App() {
  return (
    <div>
      <HashRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
