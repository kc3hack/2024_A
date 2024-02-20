import React from "react";
import "../styles/MusicMenu.css";

const MusicMenu = () => {
  return (
    <div className="music-menu">
      <div className="music-description">MusicTitle</div>
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
      <div className="music-volume-control">Volume Control</div>
    </div>
  );
};

export default MusicMenu;
