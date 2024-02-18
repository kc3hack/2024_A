import React from "react";
import "../styles/TopMenu.css";

const TopMenu = () => {
  return (
    <div className="top-menu">
      <div className="title">
        <h1>Atmosfeel</h1>
      </div>
      <ul className="top-menu-items">
        <li>
          <div className="search-box">
            <input type="text" placeholder="Search" />
          </div>
        </li>
        <li>
          <img className="setting-icon" src="/gear-fill.svg" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;
