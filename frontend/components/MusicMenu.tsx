import React, { useState, useEffect } from "react";
import "../styles/MusicMenu.css";
import useSound from "use-sound";
import music from "/Awayuki.mp3";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store"; // あなたのstoreへのパスに置き換えてください

const MusicMenu = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: RootState) => state.isPlaying);
  const playbackPosition = useSelector(
    (state: RootState) => state.playbackPosition,
  );
  const [volume, setVolume] = useState(0.5); // 初期音量を0.5（50%）に設定
  const [play, { stop, sound }] = useSound(music, {
    volume,
    seek: playbackPosition,
  });

  useEffect(() => {
    if (sound) {
      sound.volume(volume);
    }
  }, [volume, sound]);

  useEffect(() => {
    if (isPlaying) {
      if (sound) {
        console.log("再生直前時点でのシーク位置:", sound.seek());
        play();
      }
    } else {
      stop();
    }
  }, [isPlaying, play, stop, sound, dispatch]);

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  useEffect(() => {
    if (sound) {
      sound.seek(playbackPosition);
    }
  }, [sound, playbackPosition]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound && isPlaying) {
        // 音楽が再生中のときだけ再生位置を更新
        dispatch({ type: "SET_PLAYBACK_POSITION", payload: sound.seek() });
        console.log("再生中の再生位置を保存:", playbackPosition);
      }
    }, 1); // 1m秒ごとに再生位置を更新(最短)

    return () => {
      clearInterval(interval); // コンポーネントがアンマウントされるときにタイマーをクリア
    };
  }, [dispatch, sound, isPlaying]); // isPlayingを依存性配列に追加

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value) / 100);
  };

  const handlePlayButtonClick = () => {
    // 再生/一時停止の状態を切り替え
    if (isPlaying) {
      if (sound) {
        dispatch({ type: "SET_PLAYBACK_POSITION", payload: sound.seek() });
      }
    }
    dispatch({ type: "SET_PLAYING_STATUS", payload: !isPlaying });
    if (!isPlaying && sound) {
      sound.seek(playbackPosition);
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
