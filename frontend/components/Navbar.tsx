import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="title">
          <h1>Atomosfeel</h1>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>

        <ul>
          <li>settings</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
