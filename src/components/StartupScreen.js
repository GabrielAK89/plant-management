import React from "react";
import { NavLink } from "react-router-dom";
import "./StartupScreen.css";


export default function Navbar() {
  return (
    <React.Fragment>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

        <div className="navbar-nav">
          <NavLink to="/" activeStyle={{ color: "#f1f1f1" }} className="nav-item nav-link ">
            Productivity
          </NavLink>
          <NavLink to="/company" activeStyle={{ color: "#f1f1f1" }} className="nav-item nav-link ">
            Production
          </NavLink>
          <NavLink to="/reporting" activeStyle={{ color: "#f1f1f1" }} className="nav-item nav-link ">
            Reporting
          </NavLink>
          <NavLink to="/materials" activeStyle={{ color: "#f1f1f1" }} className="nav-item nav-link ">
            Materials
          </NavLink>
          <NavLink to="/quality" activeStyle={{ color: "#f1f1f1" }} className="nav-item nav-link ">
            Quality
          </NavLink>
          <NavLink to="/maintenance" activeStyle={{ color: "#f1f1f1" }} className="nav-item nav-link ">
            Maintenance
          </NavLink>
        </div>
        </div>
        
      </nav>

      
    </React.Fragment>
  );
}