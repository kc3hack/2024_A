import "../styles/App.css";
import { useEffect } from 'react';

let nowMode = 0;

interface Result {
  name: string;
  point: number;
  put: string;
}

function App() {
  useEffect(() => {
    document.getElementById('name')!.style.width = "30vw";
    document.getElementById('local')!.style.width = "30vw";
    document.getElementById('weather')!.style.width = "30vw";
    const btn = document.getElementById('btn');
    document.getElementById('test')!.style.display = 'none';

    if (btn) {
      btn.onclick = handleClick;
    }

    const research = document.getElementById('research');
    if (research) {
      research.onclick = function () {
        if (nowMode === 0) {
          document.getElementById('test')!.style.display = 'inline';
          research.innerHTML = "戻る";
          nowMode = 1;
        } else {
            document.getElementById('name')!.style.display='inline';
            document.getElementById('local')!.style.display='inline';
            document.getElementById('weather')!.style.display='inline';
          document.getElementById('test')!.style.display = 'none';
          research.innerHTML = "キーワードから検索";
          nowMode = 0;
        }
      }
    }
    const weather = document.getElementById('searchByWeather');
    if (weather) {
      weather.onclick = function () {
        if (nowMode === 0) {
          document.getElementById('test')!.style.display = 'inline';
          document.getElementById('research')!.innerHTML = "戻る";
          document.getElementById('name')!.style.display='none';
          document.getElementById('local')!.style.display='none';
          nowMode = 2;
        } else {
            document.getElementById('name')!.style.display='inline';
            document.getElementById('local')!.style.display='inline';
            document.getElementById('weather')!.style.display='inline';
          document.getElementById('test')!.style.display = 'none';
          weather.innerHTML = "天気から検索";
          document.getElementById('research')!.innerHTML = "キーワードから検索";
          nowMode = 0;
        }
      }
    }
    const local = document.getElementById('searchByAddress');
    if (local) {
      local.onclick = function () {
        if (nowMode === 0) {
          document.getElementById('test')!.style.display = 'inline';
          document.getElementById('research')!.innerHTML = "戻る";
          document.getElementById('name')!.style.display='none';
          document.getElementById('weather')!.style.display='none';
          nowMode = 3;
        } else {
            document.getElementById('name')!.style.display='inline';
            document.getElementById('local')!.style.display='inline';
            document.getElementById('weather')!.style.display='inline';
          document.getElementById('test')!.style.display = 'none';
          local.innerHTML = "地域から検索";
          document.getElementById('research')!.innerHTML = "キーワードから検索";
          nowMode = 0;
        }
      }
    }
  }, []); // 空の依存配列を渡すことで、初回のみ実行される

  const handleClick = () => {
    const musicName = document.getElementById('name') as HTMLInputElement;
    const address = document.getElementById('local') as HTMLInputElement;
    const weather = document.getElementById('weather') as HTMLSelectElement;
    bottonOnClick(musicName, address, weather);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div id='test'>
          <input id="name" placeholder="曲名"></input>
          <input id="local" placeholder="地区"></input>
          <select id='weather'>
            <option>選択なし</option>
            <option>晴れ</option>
            <option>雨</option>
          </select>
          <button id="btn">test</button>
          <h1 id='resultArea'></h1>
          <ul id="fileList"></ul>
        </div>
        <div className="bg_pattern Diagonal"></div>
        <div id='page'>
          <button id="research">キーワードから検索</button>
          <button id="searchByWeather">天気から検索</button>
          <button id="searchByAddress">地域から検索</button>
        </div>
      </header>
    </div>
  );
}

const data: {
  曲名: string;
  地域: string;
  天気: string;
  ファイル: string;
}[] = [
  {"曲名":"大阪晴れ","地域":"大阪府,null,null,null,null","天気":"晴れ","ファイル":""},
  {"曲名":"大阪雨","地域":"大阪府,null,null,null,null","天気":"雨","ファイル":""},
  {"曲名":"京都晴れ","地域":"京都府,null,null,null,null","天気":"晴れ","ファイル":""},
  {"曲名":"京都雨","地域":"京都府,null,null,null,null","天気":"雨","ファイル":""}
];

let result: Result[] = [];

function bottonOnClick(musicName: HTMLInputElement, address: HTMLInputElement, weather: HTMLSelectElement) {
  const resultArea = document.getElementById('resultArea');
  result = [];

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    result.push({"name": element.曲名, "point": 0.0, "put": ""});
  }

  if (musicName.value !== ""&&nowMode==1) {
    searchName(musicName.value);
  }
  if (address.value !== ""&&nowMode!=2) {
    searchAddress(address.value);
  }
  if (weather.value !== ""&&nowMode!=3) {
    searchwether(weather.value);
  }

  result.sort((a, b) => a.point < b.point ? 1 : -1);
  console.log(result);
  resultArea!.innerHTML = result[0].name;
  drawResult(result);
}

function searchName(name: string) {
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element.曲名.indexOf(name) >= 0) {
      result[index].point += 10;
      result[index].put += name + " ";
    }
  }
}

function searchwether(nowWether: string) {
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element.天気.indexOf(nowWether) >= 0) {
      result[index].point += 5;
      result[index].put += nowWether + " ";
    }
  }
}
/* 
function searchAddress(localName: string) {
  if (localName.indexOf(",")) {
    const preAddress = localName.split(",");
    const next = true;
  } else {
    const preAddress = localName;
    const next = false;
  }

  if (next) {
    for (let index = 0; index < data.length; index++) {
      const element = data[index].地域.split(",");
      for (let p = 0; p < preAddress.length; p++) {
        const q = preAddress[p];
        if (element[p].indexOf(q) >= 0) {
          result[index].point += 6 / preAddress.length;
          result[index].put += localName + " ";
        } else {
          break;
        }
      }
    }
  } else {
    for (let index = 0; index < data.length; index++) {
      const element = data[index].地域.split(",");
      if (element[0].indexOf(preAddress) >= 0) {
        result[index].point += 5;
      }
    }
  }
} */
function searchAddress(localName: string) {
    let next = false;
    let preAddress: string | string[] = localName;
  
    if (localName.indexOf(",") !== -1) {
      preAddress = localName.split(",");
      next = true;
    }
  
    // 以降のコードは変更なし
    if (next) {
      for (let index = 0; index < data.length; index++) {
        const element = data[index].地域.split(",");
        for (let p = 0; p < preAddress.length; p++) {
          const q = preAddress[p];
          if (element[p].indexOf(q) >= 0) {
            result[index].point += 6 / preAddress.length;
            result[index].put += localName + " ";
          } else {
            break;
          }
        }
      }
    } else {
      for (let index = 0; index < data.length; index++) {
        const element = data[index].地域.split(",");
        if (element[0].indexOf(preAddress as string) >= 0) {
          result[index].point += 5;
        }
      }
    }
  }
  

function drawResult(result: Result[]) {
  const fileList = document.getElementById('fileList');
  fileList!.innerHTML = '';
  for (let index = 1; index < result.length; index++) {
    const element = result[index];
    if (element.point > 0) {
      const listItem = document.createElement('li');
      listItem.textContent = element.name + " " + element.put;
      fileList!.appendChild(listItem);
      console.log(element.name);
    }
  }
}

export default App;
