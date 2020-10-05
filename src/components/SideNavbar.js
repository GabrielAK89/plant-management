import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideNavbar.css";

export default function SideNavbar() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="sidenav">
      <button className="dropdown-btn" onClick={handleToggle}>
        Company
        <i className="fa fa-caret-down"></i>
      </button>
      <div
        className={
          isActive ? "dropdown-container-show" : "dropdown-container-hidden"
        }
      >
        <NavLink to="/company/plants" activeStyle={{ color: "#f1f1f1" }}>
          Plants
        </NavLink>
        <NavLink to="/company/departments" activeStyle={{ color: "#f1f1f1" }}>
          Departments
        </NavLink>
        <NavLink to="/company/costcenters" activeStyle={{ color: "#f1f1f1" }}>
          Cost Centers
        </NavLink>
        <NavLink to="/company/machines" activeStyle={{ color: "#f1f1f1" }}>
          Machines
        </NavLink>
        <NavLink to="/company/operators" activeStyle={{ color: "#f1f1f1" }}>
          Operators
        </NavLink>
      </div>
    </div>
  );
}
