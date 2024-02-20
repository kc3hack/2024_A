import React from "react";
import "../styles/MusicMenu.css";

const MusicMenu = () => {
  return (
    <div className="music-menu">
      <div className="music-menu-element">
        MusicTitle <br />
        Artist
      </div>
      <div className="music-menu-element">MusicButtons</div>
      <div className="music-menu-element">VolumeControl</div>
    </div>
  );
};

export default MusicMenu;
