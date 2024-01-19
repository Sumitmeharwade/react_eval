import React from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Register from "./components/Register";

import "./App.css";

function App() {
  return (
      <div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/register">register</a></li>
          <li><a href="/contact">contact</a></li>
        </ul>
        <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
      
  );
}

export default App;
