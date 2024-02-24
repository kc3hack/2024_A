import { useParams } from "react-router-dom";
import { musicData } from "./data";
import React from "react";
import "../styles/SearchResultPage.css";

const SearchResultPage = () => {
  const { searchTerm } = useParams<{ searchTerm: string | undefined }>();
  const decodedSearchTerm = decodeURIComponent(searchTerm || "");

  // 検索結果を取得
  const searchResults = search(decodedSearchTerm);

  const handleButtonClick = (index: number) => {
    console.log(`ボタンが押されました。曲名: ${musicData[index].title}`);
    // ここにボタンが押されたときの処理を追加
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
      <h1 id="top">検索結果</h1>
      <hr />
      <ul className="result-list">
        {searchResults.length === 0 ? (
          <li className="result-nothing">検索結果がありません</li>
        ) : (
          searchResults.map((resultIndex) => (
            <li key={resultIndex} className="result-element border-animation">
              <span className="music-title">
                {musicData[resultIndex].title}
              </span>

              <img
                src="/play-button.svg"
                alt=""
                className="play-music-button"
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

export default SearchResultPage;
