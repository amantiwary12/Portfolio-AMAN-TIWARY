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
import Projects from "./Pages/Projects/Projects";

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
        <Route path="/projects" element={<Projects />} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>
    </Router>
  );
}

export default App;





// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Firstpage from "./Pages/Firstpage/Firstpage";
// import About from "./Pages/About/About";
// import Projects from "./Pages/Projects/Projects";
// import ContactPage from "./Pages/ContactPage/ContactPage";
// import MindStrategy from "./Pages/Projects/MindStrategy";
// import SecureSphere from "./Pages/Projects/SecureSphere";
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Firstpage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/projects/mind-strategy" element={<MindStrategy />} />
//           <Route path="/projects/secure-sphere" element={<SecureSphere />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;