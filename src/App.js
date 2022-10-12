import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Footer from "./Component/Footer";
import ScrollToTop from "./Component/ScrollToTop";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Projects from "./Component/Projects/Project";
import Resume from "./Component/Resume/Resume";
import Navbar from "./Component/Navbar/Navbar";
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
