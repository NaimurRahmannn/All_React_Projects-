import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left side - Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          {/* Mobile menu dropdown */}
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 lg:hidden">
            <li><NavLink to="/" className="hover:bg-base-200">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:bg-base-200">About</NavLink></li>
           
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">BlogPost</NavLink>
      </div>
      
      {/* Middle section - Navigation Links (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "btn btn-primary btn-sm" 
                  : "btn btn-ghost btn-sm hover:btn-primary"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive 
                  ? "btn btn-primary btn-sm" 
                  : "btn btn-ghost btn-sm hover:btn-primary"
              }
            >
              About
            </NavLink>
          </li>
         
        </ul>
      </div>
      
      {/* Right side - Action button */}
      <div className="navbar-end">
        <a className="btn btn-outline btn-sm">Login</a>
      </div>
    </div>
  );
}
