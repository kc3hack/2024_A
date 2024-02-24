// RegisterMusic.tsx

import { useParams } from "react-router-dom";
import { musicData } from "./data";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
import "../styles/RegisterMusic.css";

const RegisterMusic = () => {
  const { searchTerm } = useParams<{ searchTerm: string | undefined }>();
  const decodedSearchTerm = decodeURIComponent(searchTerm || "");

  // 検索結果を取得
  const searchResults = search(decodedSearchTerm);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleButtonClick = (index: number) => {
    console.log(`ボタンが押されました。曲名: ${musicData[index].title}`);
    dispatch({ type: "SET_MUSIC_ID", payload: index });
    navigate("/location/");
  };

  function search(keyWord: string): number[] {
    const result: number[] = [];
    console.log("検索キーワード: " + keyWord);
    // 何も入力していない時は全曲を表示
    if (keyWord === "all") return Array.from(Array(musicData.length).keys());

    for (let index = 0; index < musicData.length; index++) {
      const element = musicData[index];
      if (element.title.indexOf(keyWord) >= 0) {
        result.push(index);
      }
    }
    return result;
  }

  return (
    <div className="app-container">
      <h1 id="top">曲を選択する</h1>
      <hr />
      <ul className="register-list">
        {searchResults.length === 0 ? (
          <li className="register-nothing">検索結果がありません</li>
        ) : (
          searchResults.map((resultIndex) => (
            <li key={resultIndex} className="register-element border-animation">
              <span className="music-title">
                {musicData[resultIndex].title}
              </span>
              {/* <button
                onClick={() => handleButtonClick(resultIndex)}
                className="play-music-button"
              >
                選択
              </button> */}
              <img
                src="/math-plus.svg"
                alt=""
                className="register-music-button"
                onClick={() => handleButtonClick(resultIndex)}
              />
            </li>
          ))
        )}
      </ul>
      <div className="bg_pattern Diagonal"></div>
    </div>
  );
};

export default RegisterMusic;
