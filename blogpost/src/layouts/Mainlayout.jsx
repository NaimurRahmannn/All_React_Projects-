//import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Token from "../pages/Token";
import Allnotice from "../pages/Postdeatails";
import { useState, useEffect } from "react";

export default function Mainlayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div>
        <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>
      <div className={`bg-white shadow-[0_0_10px_#ffffff] min-h-screen transition-all duration-300 pt-20 ${isDesktop && isSidebarOpen ? 'lg:ml-96' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Allnotice" element={<Allnotice/>}/>
          <Route path="/Token" element={<Token/>}/>
           <Route path="/about" element={<About />} />
        </Routes>
      </div>

    </div>
  );
}
