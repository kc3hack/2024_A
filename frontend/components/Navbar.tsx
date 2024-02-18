import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Atomosfeel</h1>

      <div className="search-box">
        <input type="text" placeholder="Search" />
      </div>

      <ul>
        <li>search</li>
        <li>details</li>
      </ul>
    </nav>
  );
};

export default Navbar;
