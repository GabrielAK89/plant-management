import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./StartupScreen.css";
import myImg from "../images/factory.jpg";
import SideNavbar from "./SideNavbar";

export default function Navbar() {
  return (
    <React.Fragment>
      
      <nav className="navbar">
        <NavLink to="/company" activeStyle={{ color: "#f1f1f1" }} className="btn btn-secondary btn-lg ">
          Production
        </NavLink>
        <NavLink to="/reporting" activeStyle={{ color: "#f1f1f1" }} className="btn btn-secondary btn-lg ">
          Reporting
        </NavLink>
        <NavLink to="/materials" activeStyle={{ color: "#f1f1f1" }} className="btn btn-secondary btn-lg ">
          Materials
        </NavLink>
        <NavLink to="/quality" activeStyle={{ color: "#f1f1f1" }} className="btn btn-secondary btn-lg ">
          Quality
        </NavLink>
        <NavLink to="/maintenance" activeStyle={{ color: "#f1f1f1" }} className="btn btn-secondary btn-lg ">
          Maintenance
        </NavLink>
      </nav>

      
    </React.Fragment>
  );
}