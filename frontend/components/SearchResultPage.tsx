import { useParams } from "react-router-dom";
import { musicData } from "./data";
import { useDispatch } from "react-redux";
import "../styles/SearchResultPage.css";

const SearchResultPage = () => {
  const { searchTerm } = useParams<{ searchTerm: string | undefined }>();
  const decodedSearchTerm = decodeURIComponent(searchTerm || "");

  const searchResults = search(decodedSearchTerm);
  const dispatch = useDispatch(); // Reduxのdispatch関数を取得

  const handleButtonClick = (index: number) => {
    dispatch({ type: "SET_NEWLY_SELECTED_MUSIC_ID", payload: index }); // 再生中の音楽のIDを設定
    stop();
  };

  function search(keyWord: string): number[] {
    const result: number[] = [];
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
