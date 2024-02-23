/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import SearchResultPage from "./searchResultPage";
// 音楽データの型定義
interface Song {
  file: string;
  title: string;
  information: Array<number>;
  id: number;
}
let history: number[] = [];
// サンプルの音楽データ
const musicData: Song[] = [
  {
    file: "../PressEnter.mp3",
    title: "PressEnter",
    information: [1, 2, 3, 4, 5],
    id: 0,
  },
  {
    file: "../Glowing_Moon.mp3",
    title: "Glowing_Moon",
    information: [2, 2, 3, 4, 5],
    id: 1,
  },
  {
    file: "../Awayuki.mp3",
    title: "Awayuki",
    information: [4, 2, 3, 4, 8],
    id: 2,
  },
  {
    file: "../Conjurer.mp3",
    title: "Conjurer",
    information: [7, 2, 6, 1, 5],
    id: 3,
  },
];

// タイトルにキーワードが含まれる曲を検索する関数
function search(data: Song[], keyWord: string): number[] {
  var result: number[] = [];
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element.title.indexOf(keyWord) >= 0) {
      result.push(index);
    }
  }
  return result;
}

//console.log(search(musicData, "e"))//試しに作ったやつ
// パラメーターに基づいて曲を検索し、類似度でソートする関数
function searchByInformation(data: Song[], parameters: Array<number>) {
  interface preResultData {
    id: number;
    point: number;
    file: string;
    title: string;
    information: Array<number>;
  }
  var resultdata: preResultData[] = [];
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    var a: preResultData = {
      id: index,
      point: 0,
      file: element.file,
      title: element.title,
      information: element.information,
    };
    resultdata.push(a);
  }
  for (let index = 0; index < resultdata.length; index++) {
    const element = resultdata[index];
    for (let Index = 0; Index < parameters.length; Index++) {
      const preInformation = element.information[Index];
      const preSource = parameters[Index];
      if (preInformation !== -1 && preSource !== -1) {
        resultdata[index].point += Math.pow(preInformation - preSource, 2);
      }
    }
  }
  resultdata.sort((a, b) => (a.point > b.point ? 1 : -1));
  console.log(resultdata);
  return resultdata;
}

// パラメーター [3, 2, 3, 4, 5] で曲を検索し、類似度でソート
//console.log(searchByInformation(musicData, [3, 2, 3, 4, 5]));

function historySort() {
  history = removeDuplicates(history);
}
function removeDuplicates(arr: number[]): number[] {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}

// React コンポーネント
function App() {
  return (
    <div>
      <div>
        <SearchResultPage />
      </div>
    </div>
  );
}
export default App;
/* history.unshift(id);曲のidを変数に入れると保存される。
function historySort():被りを消す
historyは前から順に曲のidが入っている
曲名の取り出しはmusicData[id].title;
ファイルのパスの取り出しはmusicData[id].file
*/
