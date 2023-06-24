import { NavLink } from "react-router-dom";
import logo from "../../assets/logoText.png";

const Navbar = () => {
  return (
    <div className="bg-slate-900">
        <div className="navbar max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-base-100 hover:text-primary"
              }
              to="/"
            >
              <span>Home</span>
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-base-100 hover:text-primary"
              }
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-base-100 hover:text-primary"
              }
              to="/earlyBird"
            >
              Early Bird
            </NavLink>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img className="w-36 -mt-10" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-medium">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-base-100 hover:text-primary"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-base-100 hover:text-primary"
              }
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-base-100 hover:text-primary"
              }
              to="/earlyBird"
            >
              Early Bird
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
