import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function Mainlayout() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-blue-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
