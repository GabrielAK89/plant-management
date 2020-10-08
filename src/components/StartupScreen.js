import React, { useState } from "react";
import "./StartupScreen.css";
import myImg from "../images/factory.jpg";
import SideNavbar from "./SideNavbar";

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar">
        <form className="form-inline">
          <p>Productivity</p>
          <button type="button" className="btn btn-secondary btn-lg ">Production</button>
          <button type="button" className="btn btn-secondary btn-lg">Reporting</button>
          <button type="button" className="btn btn-secondary btn-lg">Materials</button>
          <button type="button" className="btn btn-secondary btn-lg">Quality</button>
          <button type="button" className="btn btn-secondary btn-lg">Maintenance</button>
        </form>
      </nav>

      <div>
        <img src={myImg}></img>
      </div>
    </React.Fragment>
  );
}