import React, { useState, useEffect } from "react";
import "../styles/MusicMenu.css";
import useSound from "use-sound";
import { musicData } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

const MusicMenu = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: RootState) => state.isPlaying);
  const playbackPosition = useSelector(
    (state: RootState) => state.playbackPosition,
  );
  const playingMusicId = useSelector(
    (state: RootState) => state.playingMusicId,
  );
  const newlySelectedMusicId = useSelector(
    (state: RootState) => state.newlySelectedMusicId,
  );
  const [volume, setVolume] = useState(0.5);
  const [play, { stop, sound }] = useSound(musicData[playingMusicId].url, {
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
      }
    }, 1); // 1m秒ごとに再生位置を更新(最短)

    return () => {
      clearInterval(interval); // コンポーネントがアンマウントされるときにタイマーをクリア
    };
  }, [dispatch, sound, isPlaying]); // isPlayingを依存性配列に追加

  useEffect(() => {
    if (playingMusicId !== newlySelectedMusicId) {
      // 再生中の音楽のIDが新しく選択された音楽のIDと異なる場合
      dispatch({
        type: "SET_PLAYING_MUSIC_ID",
        payload: newlySelectedMusicId,
      });
      stop();
      dispatch({ type: "SET_PLAYBACK_POSITION", payload: 0 });
      play();
      console.log("現在", playingMusicId, "新規", newlySelectedMusicId);
    }
  }, [playingMusicId, newlySelectedMusicId, play, stop, dispatch]);

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
