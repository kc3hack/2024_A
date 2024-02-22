import { useState } from "react";
import reactLogo from "../public/react.svg";
import viteLogo from "../public/vite.svg";
import "../styles/App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
weatherType("Clouds");
function weatherType(value: string) {
  let returnType: number = -1;
  switch (value) {
    case "Clear":
      console.log("晴れ");
      returnType = 1;
      break;
    case "Clouds":
      console.log("曇り");
      returnType = 2;
      break;
    case "Rain":
      console.log("雨");
      returnType = 3;
      break;
    case "Snow":
      console.log("雪");
      returnType = 4;
      break;
    default:
      returnType = -1;
      break;
  }
  return returnType;
}

interface weatherComponent {
  parameters: number[];
  weather: string;
}
//[活発,冷静,地域度]
const weatherInformation: weatherComponent[] = [
  {
    parameters: [-1, -1],
    weather: "天気",
  },
  {
    parameters: [5, 2],
    weather: "晴れ",
  },
  {
    parameters: [3, 3],
    weather: "曇り",
  },
  {
    parameters: [2, 4],
    weather: "雨",
  },
  {
    parameters: [5, 4],
    weather: "雪",
  },
];

function localType(value: string) {
  let returnType: number = -1;
  switch (value) {
    case "大阪府":
      console.log("大阪府");
      returnType = 1;
      break;
    case "京都府":
      console.log("京都");
      returnType = 2;
      break;
    case "兵庫県":
      console.log("兵庫");
      returnType = 3;
      break;
    case "滋賀県":
      console.log("滋賀県");
      returnType = 4;
      break;
    case "奈良県":
      console.log("奈良県");
      returnType = 5;
      break;
    case "和歌山県":
      console.log("和歌山");
      returnType = 6;
      break;
    default:
      returnType = -1;
      break;
  }
  return returnType;
}

interface localComporment {
  name: string;
  parameters: number[];
}

const localInformation: localComporment[] = [
  {
    name: "地域名",
    parameters: [],
  },
  {
    name: "大阪府",
    parameters: [1],
  },
  {
    name: "京都府",
    parameters: [2],
  },
  {
    name: "兵庫県",
    parameters: [3],
  },
  {
    name: "滋賀県",
    parameters: [4],
  },
  {
    name: "奈良県",
    parameters: [5],
  },
  {
    name: "和歌山県",
    parameters: [6],
  },
];

// 音楽データの型定義
interface Song {
  file: string;
  title: string;
  information: Array<number>;
  id: number;
}
// サンプルの音楽データ
export const musicData: Song[] = [
  {
    file: "../public/PressEnter.mp3",
    title: "PressEnter",
    information: [1, 2, 3],
    id: 0,
  },
  {
    file: "../public/Glowing_Moon.mp3",
    title: "Glowing_Moon",
    information: [2, 2, 1],
    id: 1,
  },
  {
    file: "../public/Awayuki.mp3",
    title: "Awayuki",
    information: [4, 2, 4],
    id: 2,
  },
  {
    file: "../public/Conjurer.mp3",
    title: "Conjurer",
    information: [7, 2, 6],
    id: 3,
  },
];
function searchByInformation(data: Song[], parameters: Array<number>) {
  interface preResultData {
    id: number;
    point: number;
    file: string;
    title: string;
    information: Array<number>;
  }
  const resultdata: preResultData[] = [];
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const a: preResultData = {
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
    for (let Index = 0; Index < 2; Index++) {
      const preInformation = element.information[Index];
      const preSource = parameters[Index];
      if (preInformation !== -1 && preSource !== -1) {
        resultdata[index].point += Math.pow(preInformation - preSource, 2);
      }
    }
    if (element.information[2] == parameters[2]) {
      resultdata[index].point /= 2;
      resultdata[index].information[2] = 5;
    } else {
      resultdata[index].information[2] = 0;
    }
  }
  resultdata.sort((a, b) => (a.point > b.point ? 1 : -1));
  console.log(resultdata);
  return resultdata;
}

function decisionParameter(weather: string, address: string) {
  const weatherData: weatherComponent =
    weatherInformation[weatherType(weather)];
  const localData: localComporment = localInformation[localType(address)];
  const returnData: number[] = weatherData.parameters;
  for (let index = 0; index < localData.parameters.length; index++) {
    const element = localData.parameters[index];
    returnData.push(element);
  }
  //ここからどうしよう
  return returnData;
}
export function searchAuto(weather: string, addres: string, musicData: Song[]) {
  return searchByInformation(musicData, decisionParameter(weather, addres));
}

console.log(searchAuto("Snow", "大阪府", musicData));

export default App;
/* 
天気
Clear (晴れ)
Clouds (曇り)
Rain (雨)
Drizzle (霧雨)
Thunderstorm (雷雨)
Snow (雪)
Mist (霧)
Smoke (煙)
Haze (濃霧)
Dust (ほこり)
Fog (霧)
Sand (砂)
Ash (火山灰)
Squall (スコール)
Tornado (竜巻)

一旦晴れ、曇り、雨だけ作る(雪も作りたい)
地域
都市で指定
大阪府、京都府、兵庫県、滋賀県、奈良県、和歌山県の2府4県
*/
