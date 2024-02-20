import { useEffect, useRef ,useState} from 'react';

// 音楽データの型定義
interface Song {
  file: string;
  title: string;
  information: Array<number>;
}

// サンプルの音楽データ
const musicData: Song[] = [
  {
    file: "../public/PressEnter.mp3",
    title: "PressEnter",
    information: [1, 2, 3, 4, 5]
  },
  {
    file: "../public/Glowing_Moon.mp3",
    title: "Glowing_Moon",
    information: [2, 2, 3, 4, 5]
  },
  {
    file: "../public/",
    title: "baca",
    information: [4, 2, 3, 4, 8]
  },
  {
    file: "../public/",
    title: "hoge",
    information: [7, 2, 6, 1, 5]
  }
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

console.log(search(musicData, "baca"))
;

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
      information: element.information
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
searchByInformation(musicData, [3, 2, 3, 4, 5]);

// React コンポーネント
function App() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    useEffect(() => {
      const audio = audioRef.current;
  
      if (audio) {
        if (isPlaying) {
          audio.play();
        } else {
          audio.pause();
        }
      }
  
      return () => {
        if (audio) {
          audio.pause();
        }
      };
    }, [isPlaying]);
  
    const handlePlay = () => {
      setIsPlaying(true);
    };
  
    const handleStop = () => {
      setIsPlaying(false);
    };
  
    return (
      <div>
        {/* refをaudio要素にアタッチします */}
        <audio ref={audioRef} src="../public/Glowing_Moon.mp3" id="audio"></audio>
        
        {/* 再生ボタン */}
        <button onClick={handlePlay}>Play</button>
        
        {/* 停止ボタン */}
        <button onClick={handleStop}>Stop</button>
      </div>
    );
  }

export default App;
