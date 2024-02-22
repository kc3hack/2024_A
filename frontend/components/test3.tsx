import React, { useEffect, useState } from 'react';
import { search } from './test2';
import { musicData } from './App';
import '../styles/App.css';

function App() {
  const [searchResults, setSearchResults] = useState<number[]>([]);

  useEffect(() => {
    const results = search('n');
    setSearchResults(results);
  }, []);

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
          searchResults.map((index) => (
            <li key={index} className="left-top-align">
              <span>{musicData[index].title}</span>
              <button onClick={() => handleButtonClick(index)}>選択</button>
            </li>
          ))
        )}
      </ul>
      <div className="bg_pattern Diagonal"></div>
    </div>
  );
}

export default App;
