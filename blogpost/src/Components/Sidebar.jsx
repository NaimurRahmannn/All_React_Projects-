import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile Overlay - Click anywhere to close */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[80px] z-30 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar Panel */}
      <div
        className={`
          fixed top-[80px] left-0 h-[calc(100vh-80px)] bg-[#F7F7F8] shadow-xl transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          w-64 lg:w-82  border-r-0.5 border-r-gray-200
        `}
      >
        {/* Sidebar Content */}
        <div className="p-6 overflow-y-auto h-full">
          <nav className="space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 transition-all hover:bg-gray-200 hover:translate-x-1 ${
                  isActive
                    ? "text-[#750014]"
                    : "text-gray-700"
                }`
              }
              onClick={() => {
                if (window.innerWidth < 1024) onClose();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="font-normal">Home</span>
            </NavLink>
            <NavLink
              to="/post-details"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 transition-all hover:bg-gray-200 hover:translate-x-1 ${
                  isActive
                    ? "text-[#750014]"
                    : "text-gray-700"
                }`
              }
              onClick={() => {
                if (window.innerWidth < 1024) onClose();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="font-normal">All notice</span>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 transition-all hover:bg-gray-200 hover:translate-x-1 ${
                  isActive
                    ? "text-[#750014]"
                    : "text-gray-700"
                }`
              }
              onClick={() => {
                if (window.innerWidth < 1024) onClose();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-normal">About</span>
            </NavLink>
          </nav>

          {/* Additional Links Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
          
           
          </div>
        </div>
      </div>
    </>
  );
}
