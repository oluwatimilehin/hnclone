import React from "react";
import logo from "./y18.gif";

function NavBar() {
  return (
    <nav>
      <div className="nav-bar">
        <img src={logo} className="logo" alt="Na the logo be this" width="18" height="18" />
        <h4> Hacker News </h4>
        <ul>
          <li className="nav-menu"> new | </li>
          <li className="nav-menu"> comments | </li>
          <li className="nav-menu"> ask | </li>
          <li className="nav-menu"> show | </li>
          <li className="nav-menu"> jobs | </li>
          <li className="nav-menu"> submit </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
