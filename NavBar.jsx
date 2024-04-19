import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="cointer-fluid">
        <NavLink
          className="navbar-brand"
          href="/"
        >
          KIET MCA
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/HomePage"
                style={({ isActive }) =>
                  isActive
                    ? { color: "green", fontWeight: "bold" }
                    : { color: "white" }
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/MyCard"
                style={({ isActive }) =>
                  isActive
                    ? { color: "green", fontWeight: "bold" }
                    : { color: "white" }
                }
              >
                Card
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/MyCounter"
                style={({ isActive }) =>
                  isActive
                    ? { color: "green", fontWeight: "bold" }
                    : { color: "white" }
                }
              >
                Counter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Languages"
                style={({ isActive }) =>
                  isActive
                    ? { color: "green", fontWeight: "bold" }
                    : { color: "white" }
                }
              >
                language
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Student"
                style={({ isActive }) =>
                  isActive
                    ? { color: "green", fontWeight: "bold" }
                    : { color: "white" }
                }
              >
                Student
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Product"
                style={({ isActive }) =>
                  isActive
                    ? { color: "green", fontWeight: "bold" }
                    : { color: "white" }
                }
              >
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/About"
                style={({ isActive }) =>
                  isActive
                    ? { color: "green", fontWeight: "bold" }
                    : { color: "white" }
                }
              >
                AboutUs
              </NavLink>
            </li>
          
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
