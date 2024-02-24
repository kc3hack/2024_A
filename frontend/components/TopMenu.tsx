import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "../styles/TopMenu.css";

const TopMenu = () => {
  return (
    <div className="top-menu">
      <div className="title">
        <Link to="/">
          <h1>Atmosfeel</h1>
        </Link>
      </div>
      <div className="top-menu-items">
        <SearchBar />
      </div>
    </div>
  );
};

export default TopMenu;
