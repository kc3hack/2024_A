import React from "react";
import "../styles/BottomMenu.css";

const BottomMenu = () => {
  return (
    <div className="bottom-menu">
      <div className="bottom-menu-element">
        <div className="add-music">
          <img src="/math-plus.svg" alt="" className="add-music-button" />
          <br />
          <span>追加</span>
        </div>
      </div>
      <div className="bottom-menu-element">
        <div className="home">
          <img src="/home-alt.svg" alt="" className="home-button" />
          <br />
          <span>ホーム</span>
        </div>
      </div>
      <div className="bottom-menu-element">
        <div className="music">
          <img src="/disc.svg" alt="" className="music-button" />
          <br />
          <span>ミュージック</span>
        </div>
      </div>
    </div>
  );
};

export default BottomMenu;
