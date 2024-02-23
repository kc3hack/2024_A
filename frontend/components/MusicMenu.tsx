import React, { useState } from "react";
import "../styles/MusicMenu.css";
import useSound from "use-sound";
import music from "/Awayuki.mp3";

const MusicMenu = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(music);
  const handlePlayButtonClick = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  };

  return (
    <div className="music-menu">
      <div className="music-description">
        曲名を表示する <br />
        アーティスト名を表示する
      </div>
      <div className="music-menu-buttons">
        <img
          src="/play-track-prev.svg"
          alt=""
          className="play-track-prev-button"
        />
        <img
          src={isPlaying ? "/play-pause.svg" : "/play-button.svg"}
          alt=""
          className="play-track-button"
          onClick={handlePlayButtonClick}
        />
        <img
          src="/play-track-next.svg"
          alt=""
          className="play-track-next-button"
        />
      </div>
      <div className="music-volume-control">
        <img src="/volume-up.svg" alt="" className="volume-icon" />
        <input
          type="range"
          id="volume-bar"
          min="0"
          max="100"
          className="volume-bar"
        ></input>
      </div>
    </div>
  );
};

export default MusicMenu;
