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
      returnType = 0;
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
    parameters: [8, 4],
    weather: "晴れ",
  },
  {
    parameters: [6, 6],
    weather: "曇り",
  },
  {
    parameters: [3, 8],
    weather: "雨",
  },
  {
    parameters: [4, 7],
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
      returnType = 1;
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
export interface Song {
  url: string;
  title: string;
  information: Array<number>;
  id: number;
}
// 完成版の音楽データ
export const musicData: Song[] = [
  {
    url: "/PressEnter.mp3",
    title: "PressEnter",
    information: [9, 3, 1],
    id: 0,
  },
  {
    url: "/Glowing_Moon.mp3",
    title: "Glowing_Moon",
    information: [8, 5, 3],
    id: 1,
  },
  {
    url: "/Awayuki.mp3",
    title: "Awayuki",
    information: [6, 7, 2],
    id: 2,
  },
  {
    url: "/Conjurer.mp3",
    title: "Conjurer",
    information: [5, 8, 0],
    id: 3,
  },
  {
    url: "/Moment_on_The_Floor.mp3",
    title: "Moment_on_The_Floor",
    information: [9, 3, 0],
    id: 4,
  },
  {
    url: "/Morning.mp3",
    title: "Morning",
    information: [5, 7, 0],
    id: 5,
  },
  {
    url: "/Parade.mp3",
    title: "Parade",
    information: [9, 3, 4],
    id: 6,
  },
  {
    url: "/しゅわしゅわハニーレモン350ml.mp3",
    title: "しゅわしゅわハニーレモン350ml",
    information: [8, 4, 0],
    id: 7,
  },
  {
    url: "/パステルハウス.mp3",
    title: "パステルハウス",
    information: [7, 6, 0],
    id: 8,
  },
  {
    url: "/ミッドナイト・ジャズ.mp3",
    title: "ミッドナイト・ジャズ",
    information: [6, 8, 0],
    id: 9,
  },
  {
    url: "/ようこそ　大阪へ.mp3",
    title: "ようこそ大阪へ",
    information: [9, 3, 1],
    id: 10,
  },
  {
    url: "/雨響く京都.mp3",
    title: "雨響く京都",
    information: [3, 8, 2],
    id: 11,
  },
  {
    url: "/夏祭りの露店通り.mp3",
    title: "夏祭りの露店通り",
    information: [8, 4, 0],
    id: 12,
  },
  {
    url: "/週末京都現実逃避.mp3",
    title: "週末京都現実逃避",
    information: [6, 7, 2],
    id: 13,
  },
];
export interface preResultData {
  id: number;
  point: number;
  url: string;
  title: string;
  information: Array<number>;
}
function searchByInformation(data: Song[], parameters: Array<number>) {
  const resultdata: preResultData[] = [];
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const a: preResultData = {
      id: index,
      point: Math.random() * 5,
      url: element.url,
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
      resultdata[index].point /= 10;
      resultdata[index].information[2] = 5;
    } else {
      resultdata[index].information[2] = 0;
    }
  }
  resultdata.sort((a, b) => (a.point > b.point ? 1 : -1));
  // console.log(resultdata);
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
export function searchAuto(weather: string, addres: string) {
  return searchByInformation(musicData, decisionParameter(weather, addres));
}

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
let history: number[] = [];
export function historyAdd(id: number) {
  history.unshift(id);
}
export function historySort() {
  history = removeDuplicates(history);
}
function removeDuplicates(arr: number[]): number[] {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}
export function getHistory() {
  return history;
}
/* historyAdd(id);曲のidを変数に入れると保存される。
function historySort():被りを消す
historyは前から順に曲のidが入っている
曲名の取り出しはmusicData[id].title;
ファイルのパスの取り出しはmusicData[id].url
*/
