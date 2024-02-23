import React, { useState, useEffect } from "react";
import "../styles/MusicMenu.css";
import useSound from "use-sound";
import music from "/Awayuki.mp3";

const MusicMenu = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // 初期音量を0.5（50%）に設定
  const [play, { stop, sound }] = useSound(music, { volume });

  useEffect(() => {
    if (sound) {
      sound.volume(volume);
    }
  }, [volume, sound]);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value) / 100);
  };

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
          value={volume * 100} // 音量を0から100の範囲に調整
          onChange={handleVolumeChange} // 音量が変更されたときにhandleVolumeChangeを呼び出す
          className="volume-bar"
        ></input>
      </div>
    </div>
  );
};

export default MusicMenu;
