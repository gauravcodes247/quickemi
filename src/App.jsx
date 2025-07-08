import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import PersonalLoan from "./components/pages/PersonalLoan";
import CarLoan from "./components/pages/CarLoan";
import HomeLoan from "./components/pages/HomeLoan";
import Navbar from "./components/Navbar";
import BlogHowToCalculateEMI from "./components/pages/BlogHowToCalcEMI";
import BlogPersonalVsHomeEMI from "./components/pages/BlogPErsonalvsHome";
import BlogIndex from "./components/pages/BlogINdex";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/personal-loan-emi-calculator" element={<PersonalLoan />} />
        <Route path="/car-loan-emi-calculator" element={<CarLoan />} />
        <Route path="/home-loan-emi-calculator" element={<HomeLoan />} />
        <Route path="/blog/how-to-calculate-loan-emi" element={<BlogHowToCalculateEMI/>} />
         <Route path="/blog/personal-loan-vs-home-loan-emi" element={<BlogPersonalVsHomeEMI />} />
      

  <Route path="/blog" element={<BlogIndex />} />

      </Routes>
    </Router>
  );
}

export default App;