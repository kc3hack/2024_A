import { useParams } from "react-router-dom";
import { musicData } from "./data";
import React from "react";
import { search } from "./test";
const SearchResultPage = () => {
  const { searchTerm } = useParams<{ searchTerm: string | undefined }>();
  const decodedSearchTerm = decodeURIComponent(searchTerm || "s");

  // 検索結果を取得

  const searchResults = search(decodedSearchTerm);

  const handleButtonClick = (index: number) => {
    console.log(`ボタンが押されました。曲名: ${musicData[index].title}`);
    // ここにボタンが押されたときの処理を追加
  };

  return (
    <div className="app-container">
      <h1 id="top">検索結果</h1>
      <ul id="resultList" className="leftAlign">
        {searchResults.length === 0 ? (
          <li className="left-align">検索結果がありません</li>
        ) : (
          searchResults.map((resultIndex) => (
            <li key={resultIndex} className="left-top-align">
              <span>{musicData[resultIndex].title}</span>
              <button onClick={() => handleButtonClick(resultIndex)}>
                選択
              </button>
            </li>
          ))
        )}
      </ul>
      <div className="bg_pattern Diagonal"></div>
    </div>
  );
};

export default SearchResultPage;
