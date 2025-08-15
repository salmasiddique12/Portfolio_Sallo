import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Skills from "./component/Skills";
import Projects from "./component/Project";
import About from "./component/About/About";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content"> {/* Wrapper to add spacing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<h1><Projects/></h1>} />
          <Route path="/about" element={<h1><About></About> </h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
