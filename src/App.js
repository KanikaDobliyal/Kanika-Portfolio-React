import React from "react";
import NavBar from "./Components/NavBar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div>
      <HashRouter>
        <ScrollToTop />
        <NavBar />

        <Routes>
          <Route
            exact
            path="/"
            element={<Home designation="Web Developer" />}
          ></Route>
          <Route
            exact
            path="/about"
            element={<About heading="My Skills" />}
          ></Route>
          <Route
            exact
            path="/projects"
            element={<Projects heading="Projects" />}
          ></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>

        <Footer
          address="54, HNB Colony, Mothorawala Road, Dehradun - 248001"
          phone="+91- 9761382290"
        />
      </HashRouter>
    </div>
  );
}

export default App;
