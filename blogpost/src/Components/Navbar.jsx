import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Navbar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <>
      <div className="navbar bg-[#750014] shadow-md text-white min-h-[80px] px-1 lg:px-2 fixed top-0 left-0 right-0 z-50">
        {/* Left side - Sidebar Toggle + Logo */}
        <div className="navbar-start flex items-center gap-0 mb-1">
          {/* Sidebar Toggle Icon */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="btn btn-ghost btn-square text-white hover:bg-[#5A0010] focus:outline-none focus:ring-0 border-0 bg-transparent hover:text-white active:bg-[#5A0010] shadow-none hover:shadow-none active:shadow-none min-h-0 h-10 w-10 rounded-3xl"
            aria-label="Toggle Sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo and Title */}
          <NavLink
            to="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <img
              src="/MBSTU_Logo.png"
              alt="MBSTU Logo"
              className="h-12 w-auto"
            />
            <div className="flex items-center scale-75 sm:scale-90 md:scale-95 lg:scale-100 origin-left mt-2">
              {/* Desktop/Tablet: Two lines */}
              <div className="hidden sm:block">
                <div className="text-white font-normal text-base leading-tight tracking-tight whitespace-nowrap">
                  Jananeta Abdul Mannan Hall
                </div>
                <div className="text-gray-300 text-[11px] font-light tracking-[0.15em] uppercase mt-0.5 whitespace-nowrap">
                  MBSTU
                </div>
              </div>

              {/* Mobile: Three lines */}
              <div className="block sm:hidden">
                <div className="text-white font-normal text-sm leading-tight tracking-tight whitespace-nowrap">
                  Jananeta Abdul
                </div>
                <div className="text-white font-normal text-sm leading-tight tracking-tight whitespace-nowrap">
                  Mannan Hall
                </div>
                <div className="text-gray-300 text-[10px] font-light tracking-[0.15em] uppercase mt-0.5 whitespace-nowrap">
                  MBSTU
                </div>
              </div>
            </div>
          </NavLink>
        </div>

        {/* Middle section - Navigation Links (Desktop) */}
        <div className="navbar-center hidden lg:flex"></div>

        {/* Right side - Profile Button */}
        <div className="navbar-end flex items-center gap-2 sm:gap-3 mr-2 sm:mr-3 lg:mr-4">
          <button 
            className="flex items-center justify-center rounded-full bg-[#FFB74D] text-[#750014] font-semibold hover:ring-2 hover:opacity-88 focus:outline-none focus:ring-0 transition-all w-8 h-8 sm:w-8.5 sm:h-8.5 lg:w-8.5 lg:h-8.5 text-xs sm:text-sm lg:text-base cursor-pointer"
            aria-label="Profile"
          >
            N
          </button>
        </div>
      </div>

      {/* Sidebar Component */}      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
