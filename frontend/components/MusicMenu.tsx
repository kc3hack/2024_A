import React from "react";
import "../styles/MusicMenu.css";

const MusicMenu = () => {
  return (
    <div className="music-menu">
      <div className="music-menu-element">
        <div className="music-description">MusicTitle</div>
      </div>
      <div className="music-menu-element">
        <div className="music-menu-buttons">
          <img
            src="/play-track-prev.svg"
            alt=""
            className="play-track-prev-button"
          />
          <img src="/play-button.svg" alt="" className="play-track-button" />
          <img
            src="/play-track-next.svg"
            alt=""
            className="play-track-next-button"
          />
        </div>
      </div>
      <div className="music-menu-element">
        <div className="music-volume">Volume</div>
      </div>
    </div>
  );
};

export default MusicMenu;
