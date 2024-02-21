import React from "react";
import "../styles/BottomMenu.css";
import { Link } from "react-router-dom";

const BottomMenu = () => {
  return (
    <div className="bottom-menu">
      <div className="bottom-menu-element">
        <div className="add-music">
          <Link to="/location">
            <img src="/math-plus.svg" alt="" className="add-music-button" />
            <br />
            <span>追加</span>
          </Link>
        </div>
      </div>
      <div className="bottom-menu-element">
        <div className="home">
          <Link to="/">
            <img src="/home-alt.svg" alt="" className="home-button" />
            <br />
            <span>ホーム</span>
          </Link>
        </div>
      </div>
      <div className="bottom-menu-element">
        <div className="music">
          <Link to="/history">
            <img src="/disc.svg" alt="" className="music-button" />
            <br />
            <span>履歴</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomMenu;
