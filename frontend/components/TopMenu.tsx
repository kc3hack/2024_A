import React from "react";
import "../styles/TopMenu.css";

const TopMenu = () => {
  return (
    <nav>
      <div className="topmenu">
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

export default TopMenu;
