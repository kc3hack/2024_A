import Header from "../components/Header";
import Footer from "../components/Footer";
import { getHistory } from "../components/data";
import { historySort } from "../components/data";
import { musicData } from "../components/data";
import { useDispatch } from "react-redux";
import "../styles/SearchResultPage.css";
//import { historyAdd } from "../components/data";
import "../styles/SearchResultPage.css";
const History = () => {
  historySort();
  const historyID: number[] = getHistory();
  const dispatch = useDispatch();
  const handleButtonClick = (index: number) => {
    dispatch({ type: "SET_NEWLY_SELECTED_MUSIC_ID", payload: index }); // 再生中の音楽のIDを設定
    stop();
  };
  /*   return (
    <div>
      
      <ul id="resultList" className="leftAlign">
        {historyID.length === 0 ? (
          <li className="left-align">履歴がありません</li>
        ) : (
          historyID.map((resultIndex) => (
            <li key={resultIndex} className="left-top-align">
              <span>{musicData[resultIndex].title}</span>
              <button onClick={() => handleButtonClick(resultIndex)}>
                選択
              </button>
            </li>
          ))
        )}
      </ul>
      
    </div>
  );
}; */
  return (
    <div>
      <Header />
      <div className="app-container">
        <h1 id="top">履歴</h1>
        <ul className="result-list">
          {historyID.length === 0 ? (
            <li className="result-nothing">履歴がありません</li>
          ) : (
            historyID.map((resultIndex) => (
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
      <Footer />
    </div>
  );
};

export default History;
