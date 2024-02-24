import Header from "../components/Header";
import Footer from "../components/Footer";
import { getHistory } from "../components/data";
import { historySort } from "../components/data";
import { musicData } from "../components/data";
//import { historyAdd } from "../components/data";
const History = () => {
  historySort();
  const historyID:number[]=getHistory();
  const handleButtonClick = (index: number) => {
    console.log(`ボタンが押されました。曲名: ${musicData[index].title}`);
    // ここにボタンが押されたときの処理を追加
  };
  return (
    <main>
      <Header />
      <h1>ここは履歴のページです</h1>
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
      <Footer />
    </main>
  );
};

export default History;
