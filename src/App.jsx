import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar/Navqbar"; // uncomment for global navbar
import Login from "./Component/Navbar/Login/Login";
// import MindSTrategy from "./Component/Navbar/Project/MindSTrategy ";
import Home from "./Component/Home"
import Aboute from "./Component/Navbar/Aboute/Aboute";
import Contact from "./Component/Navbar/Contact/Contact";
import Applevisiop from "./Component/Navbar/Project/Applevisiop";
import Securesphere from "./Component/Navbar/Project/Securesphere";
import MindSTrategy from "./Component/Navbar/Project/MindSTrategy";
import Footer from "./Component/Navbar/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Aboute />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Applevisiop" element={<Applevisiop/>} />
        <Route path="/MindSTrategy" element={<MindSTrategy/>} />
        <Route path="/secure" element={<Securesphere/>} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>
    </Router>
  );
}

export default App;
