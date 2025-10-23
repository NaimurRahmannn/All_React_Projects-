import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function Navbar({ isSidebarOpen, setIsSidebarOpen }) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <div className="relative" ref={profileMenuRef}>
            <button 
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center justify-center rounded-full bg-[#FFB74D] text-[#750014] font-semibold hover:ring-2 hover:opacity-88 focus:outline-none focus:ring-0 transition-all w-8 h-8 sm:w-8.5 sm:h-8.5 lg:w-8.5 lg:h-8.5 text-xs sm:text-sm lg:text-base cursor-pointer"
              aria-label="Profile"
            >
              N
            </button>

            {/* Dropdown Menu */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {/* User Info Section */}
                <div className="px-4 py-3 bg-gradient-to-r from-[#750014] to-[#5A0010] border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FFB74D] flex items-center justify-center text-[#750014] font-bold text-base">
                      N
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Naimur Rahman</p>
                      <p className="text-xs text-gray-200">Student</p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="py-2">
                  <button
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-[#750014] active:text-[#750014] transition-all duration-200 flex items-center gap-3 group"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      // Add navigation to account settings
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-[#750014] flex items-center justify-center transition-colors duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">Account Settings</span>
                  </button>

                  <div className="my-1 px-3">
                    <div className="border-t border-gray-200"></div>
                  </div>

                  <button
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:text-red-600 active:text-red-600 transition-all duration-200 flex items-center gap-3 group"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      // Add logout functionality
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-red-600 flex items-center justify-center transition-colors duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar Component */}      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
