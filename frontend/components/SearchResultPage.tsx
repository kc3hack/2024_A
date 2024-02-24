import { useParams } from "react-router-dom";
import { musicData } from "./data";
import { useDispatch } from "react-redux";

const SearchResultPage = () => {
  const { searchTerm } = useParams<{ searchTerm: string | undefined }>();
  const decodedSearchTerm = decodeURIComponent(searchTerm || "");

  const searchResults = search(decodedSearchTerm);
  const dispatch = useDispatch(); // Reduxのdispatch関数を取得

  const handleButtonClick = (index: number) => {
    console.log(`ボタンが押されました。曲名: ${musicData[index].title}`);
    dispatch({ type: "SET_NEWLY_SELECTED_MUSIC_ID", payload: index }); // 再生中の音楽のIDを設定

    stop();
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
